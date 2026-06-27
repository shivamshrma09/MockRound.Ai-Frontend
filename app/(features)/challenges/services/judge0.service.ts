import axios from 'axios';

const JUDGE0_API = process.env.NEXT_PUBLIC_JUDGE_ZERO!;
const RAPIDAPI_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_KEY!;
const RAPIDAPI_HOST = process.env.NEXT_PUBLIC_RAPIDAPI_HOST!;

const getLanguageId = (language: string): number => {
  const languageMap: { [key: string]: number } = {
    'JavaScript': 63,
    'Python': 71,
    'Java': 62,
    'C++': 54,
    'C': 50,
  };
  return languageMap[language] || 63;
};

const toBase64 = (str: string): string => {
  try {
    return btoa(unescape(encodeURIComponent(str)));
  } catch {
    return btoa(str);
  }
};

const fromBase64 = (str: string): string => {
  try {
    return decodeURIComponent(escape(atob(str)));
  } catch {
    return atob(str);
  }
};

export const runCodeOnJudge0 = async (code: string, language: string, input: string) => {
  try {
    const response = await axios.post(
      `${JUDGE0_API}?base64_encoded=true&wait=true`,
      {
        source_code: toBase64(code),
        language_id: getLanguageId(language),
        stdin: toBase64(input),
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-key': RAPIDAPI_KEY,
          'x-rapidapi-host': RAPIDAPI_HOST,
        },
        timeout: 30000,
      }
    );

    const data = response.data;
    const stdout = data.stdout ? fromBase64(data.stdout).trim() : '';
    const stderr = data.stderr ? fromBase64(data.stderr).trim() : '';
    const compileError = data.compile_output ? fromBase64(data.compile_output).trim() : '';

    return {
      success: data.status?.id <= 3,
      output: stdout,
      status: data.status?.description,
      error: stderr || compileError || '',
      time: data.time,
      memory: data.memory,
    };
  } catch (error: any) {
    console.error('Judge0 error:', error);
    return {
      success: false,
      output: '',
      error: error.message || 'Execution failed',
    };
  }
};

export const runTestCases = async (code: string, language: string, testCases: any[]) => {
  const results = [];

  for (let i = 0; i < testCases.length; i++) {
    const testCase = testCases[i];
    const inputData = testCase.inputData || testCase.input;

    if (i > 0) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    const result = await runCodeOnJudge0(code, language, inputData);
    const output = result.output || (result.error ? `Error: ${result.error}` : 'No output');
    const isCorrect = result.success && output.trim() === testCase.expected.trim();

    results.push({
      caseNumber: i + 1,
      input: testCase.input,
      inputData,
      output,
      expected: testCase.expected,
      status: isCorrect ? '✅ PASS' : '❌ FAIL',
      isCorrect,
      error: result.error,
    });
  }

  return results;
};

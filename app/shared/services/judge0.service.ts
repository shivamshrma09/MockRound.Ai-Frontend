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
    'TypeScript': 63,
    'Python3': 71,
    'C++17': 54,
    'JavaScript (Node)': 63,
    'Python 3': 71,
  };
  return languageMap[language] || 63;
};

const formatInputData = (input: string): string => {
  if (input.includes('nums = ') && input.includes('target = ')) {
    const parts = input.split(', ');
    const nums = parts[0].replace('nums = ', '');
    const target = parts[1].replace('target = ', '');
    return `${nums}\n${target}`;
  }
  return input;
};

export interface Judge0Result {
  success: boolean;
  output: string;
  status?: string;
  error?: string;
  time?: string;
  memory?: string;
}

export interface TestCaseResult {
  caseNumber: number;
  input: string;
  inputData: string;
  output: string;
  expected: string;
  status: '✅ PASS' | '❌ FAIL';
  isCorrect: boolean;
  error?: string;
}

export const runCodeOnJudge0 = async (
  code: string, 
  language: string, 
  input: string = ''
): Promise<Judge0Result> => {
  try {
    const response = await axios.post(
      `${JUDGE0_API}?base64_encoded=false&wait=true`,
      {
        source_code: code,
        language_id: getLanguageId(language),
        stdin: input,
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
    return {
      success: true,
      output: data.stdout?.trim() || '',
      status: data.status?.description,
      error: data.stderr || data.compile_output || '',
      time: data.time,
      memory: data.memory,
    };
  } catch (error: any) {
    console.error('Judge0 API Error:', error.response?.data || error.message);
    return {
      success: false,
      output: '',
      error: error.response?.data?.message || error.message || 'Execution failed',
    };
  }
};

export const runTestCases = async (
  code: string, 
  language: string, 
  testCases: Array<{ input: string; expected: string }>
): Promise<TestCaseResult[]> => {
  const results: TestCaseResult[] = [];

  for (let i = 0; i < testCases.length; i++) {
    const testCase = testCases[i];
    const inputData = formatInputData(testCase.input);
    
    // Rate limiting (1 sec delay after first case)
    if (i > 0) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    const result = await runCodeOnJudge0(code, language, inputData);
    const output = result.output || result.error || 'No output';
    const isCorrect = output.trim() === testCase.expected.trim();

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

// Bonus: Get all supported languages
export const getSupportedLanguages = async () => {
  try {
    const response = await axios.get(`${JUDGE0_API.replace('/submissions', '/languages')}?base64_encoded=false`, {
      headers: {
        'x-rapidapi-key': RAPIDAPI_KEY,
        'x-rapidapi-host': RAPIDAPI_HOST,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Languages fetch error:', error);
    return [];
  }
};

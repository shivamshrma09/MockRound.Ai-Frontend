import axios from 'axios';

const JUDGE0_API = process.env.NEXT_PUBLIC_JUDGE_ZERO!;
const RAPIDAPI_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_KEY!;
const RAPIDAPI_HOST = process.env.NEXT_PUBLIC_RAPIDAPI_HOST!;

const getLanguageId = (language: string): number => {
  const map: { [key: string]: number } = {
    'JavaScript': 63,
    'Python': 71,
    'Java': 62,
    'C++': 54,
    'C': 50,
  };
  return map[language] || 63;
};

// User ke function code ke around stdin-based runner wrap karta hai
const wrapWithRunner = (userCode: string, language: string, fnName: string, inputData: string): string => {
  if (language === 'JavaScript') {
    const lines = inputData.trim().split('\n');
    const argsCode = lines.map((line, i) => {
      const trimmed = line.trim();
      return `const arg${i} = JSON.parse(\`${trimmed}\`);`;
    }).join('\n');
    const argsList = lines.map((_, i) => `arg${i}`).join(', ');

    return `${userCode}

${argsCode}
const result = ${fnName}(${argsList});
console.log(JSON.stringify(result));
`;
  }

  if (language === 'Python') {
    const lines = inputData.trim().split('\n');
    const argsCode = lines.map((line, i) => {
      const trimmed = line.trim();
      return `arg${i} = json.loads("""${trimmed}""")`;
    }).join('\n');
    const argsList = lines.map((_, i) => `arg${i}`).join(', ');

    return `import json
${userCode}

${argsCode}
result = ${fnName}(${argsList})
print(json.dumps(result))
`;
  }

  // Java / C++ / C — stdin se directly padhte hain, wrap nahi karna
  return userCode;
};

const normalizeOutput = (val: string): string => {
  try {
    return JSON.stringify(JSON.parse(val.trim()));
  } catch {
    return val.trim().toLowerCase();
  }
};

export const runCodeOnJudge0 = async (
  code: string,
  language: string,
  inputData: string,
  fnName?: string
) => {
  try {
    const sourceCode = fnName && ['JavaScript', 'Python'].includes(language)
      ? wrapWithRunner(code, language, fnName, inputData)
      : code;

    const response = await axios.post(
      `${JUDGE0_API}?base64_encoded=false&wait=true`,
      {
        source_code: sourceCode,
        language_id: getLanguageId(language),
        stdin: inputData.trim(),
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

    const d = response.data;
    const status = d.status?.description || '';
    const stdout = d.stdout?.trim() || '';
    const stderr = d.stderr?.trim() || '';
    const compileErr = d.compile_output?.trim() || '';

    if (status === 'Compilation Error') {
      return { success: false, output: '', error: compileErr, status };
    }
    if (status.includes('Runtime') || status.includes('Error')) {
      return { success: false, output: '', error: stderr || status, status };
    }
    if (status === 'Time Limit Exceeded') {
      return { success: false, output: '', error: 'Time Limit Exceeded', status };
    }

    return {
      success: true,
      output: stdout,
      status,
      error: stderr || compileErr || '',
      time: d.time,
      memory: d.memory,
    };
  } catch (error: any) {
    return {
      success: false,
      output: '',
      error: error.response?.data?.message || error.message || 'Execution failed',
    };
  }
};

// Function name extract karta hai code se
const extractFunctionName = (code: string, language: string): string => {
  let match: RegExpMatchArray | null = null;
  if (language === 'JavaScript') {
    match = code.match(/function\s+(\w+)\s*\(/) || code.match(/const\s+(\w+)\s*=\s*(?:function|\()/);
  } else if (language === 'Python') {
    match = code.match(/def\s+(\w+)\s*\(/);
  }
  return match ? match[1] : '';
};

export const runTestCases = async (code: string, language: string, testCases: any[]) => {
  const results = [];
  const fnName = extractFunctionName(code, language);

  for (let i = 0; i < testCases.length; i++) {
    const testCase = testCases[i];
    const inputData = testCase.inputData || testCase.input;

    if (i > 0) {
      await new Promise((resolve) => setTimeout(resolve, 800));
    }

    const result = await runCodeOnJudge0(code, language, inputData, fnName);

    const output = result.output || '';
    const expected = testCase.expected;
    const hasError = !result.success || (!output && result.error);

    const isCorrect = !hasError && normalizeOutput(output) === normalizeOutput(expected);
    const displayOutput = hasError ? (result.error || 'No output') : output;

    results.push({
      caseNumber: i + 1,
      input: testCase.input,
      inputData,
      output: displayOutput,
      expected,
      status: isCorrect ? '✅ PASS' : hasError ? `❌ ${result.error}` : '❌ FAIL',
      isCorrect,
      error: result.error || '',
      executionStatus: result.status || '',
    });
  }

  return results;
};

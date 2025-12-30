export const microsoftQuestions = [
  {
    time: 40,
    title: "Reverse Integer",
    difficulty: "Easy",
    description: "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range, then return 0.",
    constraints: ["-2^31 <= x <= 2^31 - 1"],
    examples: [{ input: "x = 123", output: "321", explanation: "Reverse the digits of 123" }],
    testCases: [
      { input: "x = 123", expected: "321", inputData: "123" },
      { input: "x = -123", expected: "-321", inputData: "-123" },
      { input: "x = 120", expected: "21", inputData: "120" },
      { input: "x = 0", expected: "0", inputData: "0" },
      { input: "x = 1534236469", expected: "0", inputData: "1534236469" },
      { input: "x = -2147483648", expected: "0", inputData: "-2147483648" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function reverse(x) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def reverse(x):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public int reverse(int x) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 55,
    title: "Container With Most Water",
    difficulty: "Medium",
    description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    constraints: ["n == height.length", "1 <= n <= 2 * 10^4", "0 <= height[i] <= 3 * 10^4"],
    examples: [{ input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6", explanation: "Rain water trapped" }],
    testCases: [
      { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", expected: "6", inputData: "[0,1,0,2,1,0,1,3,2,1,2,1]" },
      { input: "height = [4,2,0,3,2,5]", expected: "9", inputData: "[4,2,0,3,2,5]" },
      { input: "height = [3,0,2,0,4]", expected: "7", inputData: "[3,0,2,0,4]" },
      { input: "height = [0,2,0]", expected: "0", inputData: "[0,2,0]" },
      { input: "height = [1,1]", expected: "0", inputData: "[1,1]" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function trap(height) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def trap(height):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public int trap(int[] height) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 85,
    title: "Word Ladder",
    difficulty: "Hard",
    description: "A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that every adjacent pair of words differs by a single letter.",
    constraints: ["1 <= beginWord.length <= 10", "endWord.length == beginWord.length", "1 <= wordList.length <= 5000"],
    examples: [{ input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]', output: "5", explanation: "One shortest transformation sequence" }],
    testCases: [
      { input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]', expected: "5", inputData: '"hit", "cog", ["hot","dot","dog","lot","log","cog"]' },
      { input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]', expected: "0", inputData: '"hit", "cog", ["hot","dot","dog","lot","log"]' },
      { input: 'beginWord = "a", endWord = "c", wordList = ["a","b","c"]', expected: "2", inputData: '"a", "c", ["a","b","c"]' },
      { input: 'beginWord = "hot", endWord = "dog", wordList = ["hot","dog"]', expected: "0", inputData: '"hot", "dog", ["hot","dog"]' },
      { input: 'beginWord = "hot", endWord = "dog", wordList = ["hot","dog","dot"]', expected: "3", inputData: '"hot", "dog", ["hot","dog","dot"]' }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function ladderLength(beginWord, endWord, wordList) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def ladderLength(beginWord, endWord, wordList):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public int ladderLength(String beginWord, String endWord, List<String> wordList) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 45,
    title: "Roman to Integer",
    difficulty: "Easy",
    description: "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M. Convert a roman numeral to an integer.",
    constraints: ["1 <= s.length <= 15", "s contains only characters ('I', 'V', 'X', 'L', 'C', 'D', 'M')"],
    examples: [{ input: 's = "III"', output: "3", explanation: "III = 3" }],
    testCases: [
      { input: 's = "III"', expected: "3", inputData: '"III"' },
      { input: 's = "LVIII"', expected: "58", inputData: '"LVIII"' },
      { input: 's = "MCMXC"', expected: "1990", inputData: '"MCMXC"' },
      { input: 's = "IV"', expected: "4", inputData: '"IV"' },
      { input: 's = "IX"', expected: "9", inputData: '"IX"' },
      { input: 's = "MMMCMXCIX"', expected: "3999", inputData: '"MMMCMXCIX"' }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function romanToInt(s) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def romanToInt(s):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public int romanToInt(String s) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 65,
    title: "3Sum",
    difficulty: "Medium",
    description: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
    constraints: ["3 <= nums.length <= 3000", "-10^5 <= nums[i] <= 10^5"],
    examples: [{ input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]", explanation: "Triplets that sum to 0" }],
    testCases: [
      { input: "nums = [-1,0,1,2,-1,-4]", expected: "[[-1,-1,2],[-1,0,1]]", inputData: "[-1,0,1,2,-1,-4]" },
      { input: "nums = [0,1,1]", expected: "[]", inputData: "[0,1,1]" },
      { input: "nums = [0,0,0]", expected: "[[0,0,0]]", inputData: "[0,0,0]" },
      { input: "nums = [-2,0,1,1,2]", expected: "[[-2,0,2],[-2,1,1]]", inputData: "[-2,0,1,1,2]" },
      { input: "nums = [-1,0,1]", expected: "[[-1,0,1]]", inputData: "[-1,0,1]" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function threeSum(nums) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def threeSum(nums):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  }
];
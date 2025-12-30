export const amazonQuestions = [
  {
    time: 45,
    title: "Two Sum",
    difficulty: "Easy",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    constraints: ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9", "Only one valid answer exists"],
    examples: [{ input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "nums[0] + nums[1] = 9" }],
    testCases: [
      { input: "nums = [2,7,11,15], target = 9", expected: "[0,1]", inputData: "[2,7,11,15], 9" },
      { input: "nums = [3,2,4], target = 6", expected: "[1,2]", inputData: "[3,2,4], 6" },
      { input: "nums = [3,3], target = 6", expected: "[0,1]", inputData: "[3,3], 6" },
      { input: "nums = [1,5,3,7,9], target = 12", expected: "[2,4]", inputData: "[1,5,3,7,9], 12" },
      { input: "nums = [-1,-2,-3,-4,-5], target = -8", expected: "[2,4]", inputData: "[-1,-2,-3,-4,-5], -8" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function twoSum(nums, target) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def twoSum(nums, target):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 60,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    description: "Given a string s, find the length of the longest substring without repeating characters.",
    constraints: ["0 <= s.length <= 5 * 10^4", "s consists of English letters, digits, symbols and spaces"],
    examples: [{ input: 's = "abcabcbb"', output: "3", explanation: 'The answer is "abc", with length 3' }],
    testCases: [
      { input: 's = "abcabcbb"', expected: "3", inputData: '"abcabcbb"' },
      { input: 's = "bbbbb"', expected: "1", inputData: '"bbbbb"' },
      { input: 's = "pwwkew"', expected: "3", inputData: '"pwwkew"' },
      { input: 's = ""', expected: "0", inputData: '""' },
      { input: 's = "dvdf"', expected: "3", inputData: '"dvdf"' },
      { input: 's = "abcdef"', expected: "6", inputData: '"abcdef"' }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function lengthOfLongestSubstring(s) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def lengthOfLongestSubstring(s):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 90,
    title: "Merge K Sorted Lists",
    difficulty: "Hard",
    description: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
    constraints: ["k == lists.length", "0 <= k <= 10^4", "0 <= lists[i].length <= 500"],
    examples: [{ input: "lists = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]", explanation: "Merging all lists into one sorted list" }],
    testCases: [
      { input: "lists = [[1,4,5],[1,3,4],[2,6]]", expected: "[1,1,2,3,4,4,5,6]", inputData: "[[1,4,5],[1,3,4],[2,6]]" },
      { input: "lists = []", expected: "[]", inputData: "[]" },
      { input: "lists = [[]]", expected: "[]", inputData: "[[]]" },
      { input: "lists = [[1],[2],[3]]", expected: "[1,2,3]", inputData: "[[1],[2],[3]]" },
      { input: "lists = [[-1,1,3],[0,2,4]]", expected: "[-1,0,1,2,3,4]", inputData: "[[-1,1,3],[0,2,4]]" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function mergeKLists(lists) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def mergeKLists(lists):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public ListNode mergeKLists(ListNode[] lists) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 50,
    title: "Valid Parentheses",
    difficulty: "Easy",
    description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    constraints: ["1 <= s.length <= 10^4", "s consists of parentheses only '()[]{}'"],
    examples: [{ input: 's = "()"', output: "true", explanation: "Valid parentheses" }],
    testCases: [
      { input: 's = "()"', expected: "true", inputData: '"()"' },
      { input: 's = "()[]{}"', expected: "true", inputData: '"()[]{}"' },
      { input: 's = "(]"', expected: "false", inputData: '"(]"' },
      { input: 's = "([)]"', expected: "false", inputData: '"([)]"' },
      { input: 's = "{[]}"', expected: "true", inputData: '"{[]}"' },
      { input: 's = "(("', expected: "false", inputData: '"(("' }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function isValid(s) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def isValid(s):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public boolean isValid(String s) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 70,
    title: "LRU Cache",
    difficulty: "Medium",
    description: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    constraints: ["1 <= capacity <= 3000", "0 <= key <= 10^4", "0 <= value <= 10^5"],
    examples: [{ input: 'LRUCache(2); put(1,1); put(2,2); get(1)', output: "1", explanation: "Cache operations" }],
    testCases: [
      { input: "capacity=2, operations=[put(1,1),put(2,2),get(1)]", expected: "1", inputData: "2" },
      { input: "capacity=2, operations=[put(1,1),put(2,2),get(1),put(3,3),get(2)]", expected: "-1", inputData: "2" },
      { input: "capacity=1, operations=[put(2,1),get(2)]", expected: "1", inputData: "1" },
      { input: "capacity=3, operations=[put(1,1),put(2,2),put(3,3),get(1)]", expected: "1", inputData: "3" },
      { input: "capacity=2, operations=[get(2),put(2,6),get(1)]", expected: "-1", inputData: "2" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "class LRUCache {\n  constructor(capacity) {\n    // Initialize\n  }\n  \n  get(key) {\n    // Write your solution here\n  }\n  \n  put(key, value) {\n    // Write your solution here\n  }\n}" },
      { language: "Python", code: "class LRUCache:\n    def __init__(self, capacity):\n        # Initialize\n        pass\n    \n    def get(self, key):\n        # Write your solution here\n        pass\n    \n    def put(self, key, value):\n        # Write your solution here\n        pass" },
      { language: "Java", code: "class LRUCache {\n    public LRUCache(int capacity) {\n        // Initialize\n    }\n    \n    public int get(int key) {\n        // Write your solution here\n        \n    }\n    \n    public void put(int key, int value) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  }
];
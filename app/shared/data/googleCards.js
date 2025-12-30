const googleCards = [
  {
    id: 5,
    companyName: "Google",
    logoSrc: "https://ik.imagekit.io/qwzhnpeqg/mockround.ai%20imges%20public/google.png",
    roundType: "Coding Round",
    questions: 3,
    duration: "90 min",
    successRate: "15%",
    attempts: 67234,
    description: "Complex algorithmic problems requiring optimal solutions and clean code.",
    reviews: [{ name: "Arjun Patel", imageSrc: "https://randomuser.me/api/portraits/men/18.jpg", text: "Google coding rounds are challenging but well-structured." }],
    questionsList: [
      {
        time: 30,
        title: "Two Sum",
        difficulty: "Easy",
        description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
        constraints: [
          "2 <= nums.length <= 10^4",
          "-10^9 <= nums[i] <= 10^9",
          "Only one valid answer exists"
        ],
        examples: [
          {
            input: "nums = [2,7,11,15], target = 9",
            output: "[0,1]",
            explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
          }
        ],
        testCases: [
          { input: "nums = [2,7,11,15], target = 9", expected: "[0,1]", inputData: "[2,7,11,15]\n9" },
          { input: "nums = [3,2,4], target = 6", expected: "[1,2]", inputData: "[3,2,4]\n6" },
          { input: "nums = [3,3], target = 6", expected: "[0,1]", inputData: "[3,3]\n6" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function twoSum(nums, target) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def twoSum(nums, target):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 35,
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        description: "Given a string s, find the length of the longest substring without repeating characters.",
        constraints: [
          "0 <= s.length <= 5 * 10^4",
          "s consists of English letters, digits, symbols and spaces"
        ],
        examples: [
          {
            input: 's = "abcabcbb"',
            output: "3",
            explanation: 'The answer is "abc", with the length of 3.'
          }
        ],
        testCases: [
          { input: 's = "abcabcbb"', expected: "3", inputData: "abcabcbb" },
          { input: 's = "bbbbb"', expected: "1", inputData: "bbbbb" },
          { input: 's = "pwwkew"', expected: "3", inputData: "pwwkew" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function lengthOfLongestSubstring(s) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def lengthOfLongestSubstring(s):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 25,
        title: "Longest Common Prefix",
        difficulty: "Easy",
        description: "Write a function to find the longest common prefix string amongst an array of strings.",
        constraints: [
          "1 <= strs.length <= 200",
          "0 <= strs[i].length <= 200",
          "strs[i] consists of only lowercase English letters"
        ],
        examples: [
          {
            input: 'strs = ["flower","flow","flight"]',
            output: '"fl"',
            explanation: 'The longest common prefix is "fl"'
          }
        ],
        testCases: [
          { input: 'strs = ["flower","flow","flight"]', expected: '"fl"', inputData: '["flower","flow","flight"]' },
          { input: 'strs = ["dog","racecar","car"]', expected: '""', inputData: '["dog","racecar","car"]' }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function longestCommonPrefix(strs) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def longestCommonPrefix(strs):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public String longestCommonPrefix(String[] strs) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
    ]
  },
  {
    id: 11,
    companyName: "Google",
    logoSrc: "https://ik.imagekit.io/qwzhnpeqg/mockround.ai%20imges%20public/google.png",
    roundType: "Coding Round",
    questions: 3,
    duration: "90 min",
    successRate: "18%",
    attempts: 45123,
    description: "Advanced algorithms and data structure problems.",
    reviews: [{ name: "Neha Singh", imageSrc: "https://randomuser.me/api/portraits/women/22.jpg", text: "Google tests deep algorithmic thinking." }],
    questionsList: [
      {
        time: 30,
        title: "Valid Parentheses",
        difficulty: "Easy",
        description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
        constraints: [
          "1 <= s.length <= 10^4",
          "s consists of parentheses only '()[]{}'."
        ],
        examples: [
          {
            input: 's = "()"',
            output: "true",
            explanation: "Valid parentheses."
          }
        ],
        testCases: [
          { input: 's = "()"', expected: "true", inputData: "()" },
          { input: 's = "()[]{}"', expected: "true", inputData: "()[]{}" },
          { input: 's = "(]"', expected: "false", inputData: "(]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function isValid(s) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def isValid(s):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public boolean isValid(String s) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 40,
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
        constraints: [
          "nums1.length == m",
          "nums2.length == n",
          "0 <= m <= 1000",
          "0 <= n <= 1000"
        ],
        examples: [
          {
            input: "nums1 = [1,3], nums2 = [2]",
            output: "2.00000",
            explanation: "merged array = [1,2,3] and median is 2."
          }
        ],
        testCases: [
          { input: "nums1 = [1,3], nums2 = [2]", expected: "2.00000", inputData: "[1,3]\n[2]" },
          { input: "nums1 = [1,2], nums2 = [3,4]", expected: "2.50000", inputData: "[1,2]\n[3,4]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function findMedianSortedArrays(nums1, nums2) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def findMedianSortedArrays(nums1, nums2):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 20,
        title: "Merge Intervals",
        difficulty: "Medium",
        description: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals.",
        constraints: [
          "1 <= intervals.length <= 10^4",
          "intervals[i].length == 2",
          "0 <= starti <= endi <= 10^4"
        ],
        examples: [
          {
            input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
            output: "[[1,6],[8,10],[15,18]]",
            explanation: "Since intervals [1,3] and [2,6] overlap, merge them into [1,6]."
          }
        ],
        testCases: [
          { input: "intervals = [[1,3],[2,6],[8,10],[15,18]]", expected: "[[1,6],[8,10],[15,18]]", inputData: "[[1,3],[2,6],[8,10],[15,18]]" },
          { input: "intervals = [[1,4],[4,5]]", expected: "[[1,5]]", inputData: "[[1,4],[4,5]]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function merge(intervals) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def merge(intervals):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int[][] merge(int[][] intervals) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
    ]
  }
];

export { googleCards };
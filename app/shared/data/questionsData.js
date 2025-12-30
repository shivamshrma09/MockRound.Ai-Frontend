export const questionsData = {
  1: {
    time: 140,
    title: "Two Sum",
    difficulty: "Easy",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    constraints: [
      "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
      "You can return the answer in any order.",
    ],
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2].",
      },
    ],
    testCases: [
      { input: "nums = [2,7,11,15], target = 9", expected: "[0,1]", inputData: "[2,7,11,15]\n9" },
      { input: "nums = [3,2,4], target = 6", expected: "[1,2]", inputData: "[3,2,4]\n6" },
      { input: "nums = [3,3], target = 6", expected: "[0,1]", inputData: "[3,3]\n6" },
      { input: "nums = [1,2,3,4,5], target = 8", expected: "[2,4]", inputData: "[1,2,3,4,5]\n8" },
      { input: "nums = [5,75,25], target = 100", expected: "[1,2]", inputData: "[5,75,25]\n100" },
      { input: "nums = [0,4,3,0], target = 0", expected: "[0,3]", inputData: "[0,4,3,0]\n0" },
      { input: "nums = [-1,-2,-3,-4,-5], target = -8", expected: "[2,4]", inputData: "[-1,-2,-3,-4,-5]\n-8" },
      { input: "nums = [1,5,5,11], target = 10", expected: "[1,2]", inputData: "[1,5,5,11]\n10" },
      { input: "nums = [15,2,7,8,9,5,3,1], target = 10", expected: "[2,6]", inputData: "[15,2,7,8,9,5,3,1]\n10" },
      { input: "nums = [6,8,2,4,1,9], target = 7", expected: "[2,4]", inputData: "[6,8,2,4,1,9]\n7" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function twoSum(nums, target) {\n // Write your solution here\n \n}" },
      { language: "Python", code: "def twoSum(nums, target):\n # Write your solution here\n pass" },
      { language: "Java", code: "class Solution {\n public int[] twoSum(int[] nums, int target) {\n // Write your solution here\n \n }\n}" },
      { language: "C++", code: "class Solution {\npublic:\n vector<int> twoSum(vector<int>& nums, int target) {\n // Write your solution here\n \n }\n};" },
      { language: "C", code: "int* twoSum(int* nums, int numsSize, int target, int* returnSize) {\n // Write your solution here\n \n}" },
    ]
  },
  2: {
    time: 140,
    title: "Add Two Numbers",
    difficulty: "Medium",
    description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    constraints: [
      "The number of nodes in each linked list is in the range [1, 100].",
      "0 <= Node.val <= 9",
      "It is guaranteed that the list represents a number that does not have leading zeros.",
    ],
    examples: [
      {
        input: "l1 = [2,4,3], l2 = [5,6,4]",
        output: "[7,0,8]",
        explanation: "342 + 465 = 807.",
      },
    ],
    testCases: [
      { input: "l1 = [2,4,3], l2 = [5,6,4]", expected: "[7,0,8]" },
      { input: "l1 = [0], l2 = [0]", expected: "[0]" },
    ],
    defaultCode: [
      { language: "JavaScript", code: "function addTwoNumbers(l1, l2) {\n // Write your solution here\n \n}" },
      { language: "Python", code: "def addTwoNumbers(l1, l2):\n # Write your solution here\n pass" },
      { language: "Java", code: "class Solution {\n public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n // Write your solution here\n \n }\n}" },
      { language: "C++", code: "class Solution {\npublic:\n ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\n // Write your solution here\n \n }\n};" },
      { language: "C", code: "struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {\n // Write your solution here\n \n}" },
    ]
  },
  3: {
    time: 140,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    description: "Given a string s, find the length of the longest substring without repeating characters.",
    constraints: [
      "0 <= s.length <= 5 * 10^4",
      "s consists of English letters, digits, symbols and spaces.",
    ],
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc", with the length of 3.',
      },
      {
        input: 's = "bbbbb"',
        output: "1",
        explanation: 'The answer is "b", with the length of 1.',
      },
    ],
    testCases: [
      { input: 's = "abcabcbb"', expected: "3" },
      { input: 's = "bbbbb"', expected: "1" },
      { input: 's = "pwwkew"', expected: "3" },
    ],
    defaultCode: [
      { language: "JavaScript", code: "function lengthOfLongestSubstring(s) {\n // Write your solution here\n \n}" },
      { language: "Python", code: "def lengthOfLongestSubstring(s):\n # Write your solution here\n pass" },
      { language: "Java", code: "class Solution {\n public int lengthOfLongestSubstring(String s) {\n // Write your solution here\n \n }\n}" },
      { language: "C++", code: "class Solution {\npublic:\n int lengthOfLongestSubstring(string s) {\n // Write your solution here\n \n }\n};" },
      { language: "C", code: "int lengthOfLongestSubstring(char* s) {\n // Write your solution here\n \n}" },
    ]
  },
  4: {
    time: 140,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
    constraints: [
      "nums1.length == m",
      "nums2.length == n",
      "0 <= m <= 1000",
      "0 <= n <= 1000",
      "The overall run time complexity should be O(log (m+n)).",
    ],
    examples: [
      {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.00000",
        explanation: "merged array = [1,2,3] and median is 2.",
      },
    ],
    testCases: [
      { input: "nums1 = [1,3], nums2 = [2]", expected: "2.00000" },
      { input: "nums1 = [1,2], nums2 = [3,4]", expected: "2.50000" },
    ],
    defaultCode: [
      { language: "JavaScript", code: "function findMedianSortedArrays(nums1, nums2) {\n // Write your solution here\n \n}" },
      { language: "Python", code: "def findMedianSortedArrays(nums1, nums2):\n # Write your solution here\n pass" },
      { language: "Java", code: "class Solution {\n public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n // Write your solution here\n \n }\n}" },
      { language: "C++", code: "class Solution {\npublic:\n double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n // Write your solution here\n \n }\n};" },
      { language: "C", code: "double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {\n // Write your solution here\n \n}" },
    ]
  },
  5: {
    time: 140,
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    description: "Given a string s, return the longest palindromic substring in s.",
    constraints: [
      "1 <= s.length <= 1000",
      "s consist of only digits and English letters.",
    ],
    examples: [
      {
        input: 's = "babad"',
        output: '"bab"',
        explanation: '"aba" is also a valid answer.',
      },
    ],
    testCases: [
      { input: 's = "babad"', expected: '"bab"' },
    ],
    defaultCode: [
      { language: "JavaScript", code: "function longestPalindrome(s) {\n // Write your solution here\n \n}" },
      { language: "Python", code: "def longestPalindrome(s):\n # Write your solution here\n pass" },
      { language: "Java", code: "class Solution {\n public String longestPalindrome(String s) {\n // Write your solution here\n \n }\n}" },
      { language: "C++", code: "class Solution {\npublic:\n string longestPalindrome(string s) {\n // Write your solution here\n \n }\n};" },
      { language: "C", code: "char* longestPalindrome(char* s) {\n // Write your solution here\n \n}" },
    ]
  }
};
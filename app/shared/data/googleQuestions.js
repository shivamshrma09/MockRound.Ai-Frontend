export const googleQuestions = [
  {
    time: 45,
    title: "Binary Search",
    difficulty: "Easy",
    description: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.",
    constraints: ["1 <= nums.length <= 10^4", "-10^4 < nums[i], target < 10^4", "All integers in nums are unique"],
    examples: [{ input: "nums = [-1,0,3,5,9,12], target = 9", output: "4", explanation: "9 exists in nums and its index is 4" }],
    testCases: [
      { input: "nums = [-1,0,3,5,9,12], target = 9", expected: "4", inputData: "[-1,0,3,5,9,12], 9" },
      { input: "nums = [-1,0,3,5,9,12], target = 2", expected: "-1", inputData: "[-1,0,3,5,9,12], 2" },
      { input: "nums = [5], target = 5", expected: "0", inputData: "[5], 5" },
      { input: "nums = [1,3,5,7,9], target = 1", expected: "0", inputData: "[1,3,5,7,9], 1" },
      { input: "nums = [1,3,5,7,9], target = 9", expected: "4", inputData: "[1,3,5,7,9], 9" },
      { input: "nums = [2,5], target = 0", expected: "-1", inputData: "[2,5], 0" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function search(nums, target) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def search(nums, target):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public int search(int[] nums, int target) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 60,
    title: "Add Two Numbers",
    difficulty: "Medium",
    description: "You are given two non-empty linked lists representing two non-negative integers. Add the two numbers and return the sum as a linked list.",
    constraints: ["1 <= l1.length, l2.length <= 100", "0 <= Node.val <= 9"],
    examples: [{ input: "l1 = [2,4,3], l2 = [5,6,4]", output: "[7,0,8]", explanation: "342 + 465 = 807" }],
    testCases: [
      { input: "l1 = [2,4,3], l2 = [5,6,4]", expected: "[7,0,8]", inputData: "[2,4,3], [5,6,4]" },
      { input: "l1 = [0], l2 = [0]", expected: "[0]", inputData: "[0], [0]" },
      { input: "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]", expected: "[8,9,9,9,0,0,0,1]", inputData: "[9,9,9,9,9,9,9], [9,9,9,9]" },
      { input: "l1 = [1], l2 = [9,9]", expected: "[0,0,1]", inputData: "[1], [9,9]" },
      { input: "l1 = [5], l2 = [5]", expected: "[0,1]", inputData: "[5], [5]" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function addTwoNumbers(l1, l2) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def addTwoNumbers(l1, l2):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 90,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
    constraints: ["0 <= m <= 1000", "0 <= n <= 1000", "1 <= m + n <= 2000"],
    examples: [{ input: "nums1 = [1,3], nums2 = [2]", output: "2.0", explanation: "merged array = [1,2,3] and median is 2" }],
    testCases: [
      { input: "nums1 = [1,3], nums2 = [2]", expected: "2.0", inputData: "[1,3], [2]" },
      { input: "nums1 = [1,2], nums2 = [3,4]", expected: "2.5", inputData: "[1,2], [3,4]" },
      { input: "nums1 = [0,0], nums2 = [0,0]", expected: "0.0", inputData: "[0,0], [0,0]" },
      { input: "nums1 = [], nums2 = [1]", expected: "1.0", inputData: "[], [1]" },
      { input: "nums1 = [2], nums2 = []", expected: "2.0", inputData: "[2], []" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function findMedianSortedArrays(nums1, nums2) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def findMedianSortedArrays(nums1, nums2):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 50,
    title: "Palindrome Number",
    difficulty: "Easy",
    description: "Given an integer x, return true if x is palindrome integer.",
    constraints: ["-2^31 <= x <= 2^31 - 1"],
    examples: [{ input: "x = 121", output: "true", explanation: "121 reads as 121 from left to right and from right to left" }],
    testCases: [
      { input: "x = 121", expected: "true", inputData: "121" },
      { input: "x = -121", expected: "false", inputData: "-121" },
      { input: "x = 10", expected: "false", inputData: "10" },
      { input: "x = 0", expected: "true", inputData: "0" },
      { input: "x = 1221", expected: "true", inputData: "1221" },
      { input: "x = 12321", expected: "true", inputData: "12321" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function isPalindrome(x) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def isPalindrome(x):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public boolean isPalindrome(int x) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 75,
    title: "Group Anagrams",
    difficulty: "Medium",
    description: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
    constraints: ["1 <= strs.length <= 10^4", "0 <= strs[i].length <= 100"],
    examples: [{ input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]', explanation: "Group anagrams together" }],
    testCases: [
      { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', expected: '[["bat"],["nat","tan"],["ate","eat","tea"]]', inputData: '["eat","tea","tan","ate","nat","bat"]' },
      { input: 'strs = [""]', expected: '[[""]]', inputData: '[""]' },
      { input: 'strs = ["a"]', expected: '[["a"]]', inputData: '["a"]' },
      { input: 'strs = ["abc","bca","cab","xyz"]', expected: '[["abc","bca","cab"],["xyz"]]', inputData: '["abc","bca","cab","xyz"]' },
      { input: 'strs = ["listen","silent","hello"]', expected: '[["listen","silent"],["hello"]]', inputData: '["listen","silent","hello"]' }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function groupAnagrams(strs) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def groupAnagrams(strs):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 80,
    title: "Sliding Window Maximum",
    difficulty: "Hard",
    description: "You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right.",
    constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4", "1 <= k <= nums.length"],
    examples: [{ input: "nums = [1,3,-1,-3,5,3,6,7], k = 3", output: "[3,3,5,5,6,7]", explanation: "Maximum in each sliding window" }],
    testCases: [
      { input: "nums = [1,3,-1,-3,5,3,6,7], k = 3", expected: "[3,3,5,5,6,7]", inputData: "[1,3,-1,-3,5,3,6,7], 3" },
      { input: "nums = [1], k = 1", expected: "[1]", inputData: "[1], 1" },
      { input: "nums = [1,-1], k = 1", expected: "[1,-1]", inputData: "[1,-1], 1" },
      { input: "nums = [9,11], k = 2", expected: "[11]", inputData: "[9,11], 2" },
      { input: "nums = [4,-2], k = 2", expected: "[4]", inputData: "[4,-2], 2" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function maxSlidingWindow(nums, k) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def maxSlidingWindow(nums, k):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  }
];
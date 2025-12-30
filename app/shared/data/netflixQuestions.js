export const netflixQuestions = [
  {
    time: 45,
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    description: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
    constraints: ["1 <= prices.length <= 10^5", "0 <= prices[i] <= 10^4"],
    examples: [{ input: "prices = [7,1,5,3,6,4]", output: "5", explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5" }],
    testCases: [
      { input: "prices = [7,1,5,3,6,4]", expected: "5", inputData: "[7,1,5,3,6,4]" },
      { input: "prices = [7,6,4,3,1]", expected: "0", inputData: "[7,6,4,3,1]" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function maxProfit(prices) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def maxProfit(prices):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public int maxProfit(int[] prices) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 60,
    title: "Top K Frequent Elements",
    difficulty: "Medium",
    description: "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
    constraints: ["1 <= nums.length <= 10^5", "k is in the range [1, the number of unique elements in the array]"],
    examples: [{ input: "nums = [1,1,1,2,2,3], k = 2", output: "[1,2]", explanation: "1 appears 3 times, 2 appears 2 times" }],
    testCases: [
      { input: "nums = [1,1,1,2,2,3], k = 2", expected: "[1,2]", inputData: "[1,1,1,2,2,3], 2" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function topKFrequent(nums, k) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def topKFrequent(nums, k):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public int[] topKFrequent(int[] nums, int k) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 80,
    title: "Design Search Autocomplete System",
    difficulty: "Hard",
    description: "Design a search autocomplete system for a search engine. Users may input a sentence (at least one word and end with a special character '#').",
    constraints: ["1 <= sentence.length <= 100", "1 <= times <= 50"],
    examples: [{ input: 'AutocompleteSystem(["i love you", "island", "iroman"], [5, 3, 2])', output: "Autocomplete suggestions", explanation: "Design autocomplete system" }],
    testCases: [
      { input: "sentences and times arrays", expected: "Top 3 suggestions", inputData: "Various inputs" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "class AutocompleteSystem {\n  constructor(sentences, times) {\n    // Initialize\n  }\n  \n  input(c) {\n    // Write your solution here\n  }\n}" },
      { language: "Python", code: "class AutocompleteSystem:\n    def __init__(self, sentences, times):\n        # Initialize\n        pass\n    \n    def input(self, c):\n        # Write your solution here\n        pass" },
      { language: "Java", code: "class AutocompleteSystem {\n    public AutocompleteSystem(String[] sentences, int[] times) {\n        // Initialize\n    }\n    \n    public List<String> input(char c) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 40,
    title: "Contains Duplicate",
    difficulty: "Easy",
    description: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    constraints: ["1 <= nums.length <= 10^5", "-10^9 <= nums[i] <= 10^9"],
    examples: [{ input: "nums = [1,2,3,1]", output: "true", explanation: "1 appears twice" }],
    testCases: [
      { input: "nums = [1,2,3,1]", expected: "true", inputData: "[1,2,3,1]" },
      { input: "nums = [1,2,3,4]", expected: "false", inputData: "[1,2,3,4]" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function containsDuplicate(nums) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def containsDuplicate(nums):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 70,
    title: "Design Hit Counter",
    difficulty: "Medium",
    description: "Design a hit counter which counts the number of hits received in the past 5 minutes (i.e., the past 300 seconds).",
    constraints: ["1 <= timestamp <= 2 * 10^9", "All calls are being made to the system in chronological order"],
    examples: [{ input: "HitCounter counter = new HitCounter(); counter.hit(1); counter.getHits(300);", output: "1", explanation: "Hit counter operations" }],
    testCases: [
      { input: "hit(1), hit(2), hit(3), getHits(4)", expected: "3", inputData: "Various operations" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "class HitCounter {\n  constructor() {\n    // Initialize\n  }\n  \n  hit(timestamp) {\n    // Write your solution here\n  }\n  \n  getHits(timestamp) {\n    // Write your solution here\n  }\n}" },
      { language: "Python", code: "class HitCounter:\n    def __init__(self):\n        # Initialize\n        pass\n    \n    def hit(self, timestamp):\n        # Write your solution here\n        pass\n    \n    def getHits(self, timestamp):\n        # Write your solution here\n        pass" },
      { language: "Java", code: "class HitCounter {\n    public HitCounter() {\n        // Initialize\n    }\n    \n    public void hit(int timestamp) {\n        // Write your solution here\n    }\n    \n    public int getHits(int timestamp) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  }
];
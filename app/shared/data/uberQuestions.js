export const uberQuestions = [
  {
    time: 50,
    title: "Move Zeroes",
    difficulty: "Easy",
    description: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
    constraints: ["1 <= nums.length <= 10^4", "-2^31 <= nums[i] <= 2^31 - 1"],
    examples: [{ input: "nums = [0,1,0,3,12]", output: "[1,3,12,0,0]", explanation: "Move zeros to end" }],
    testCases: [
      { input: "nums = [0,1,0,3,12]", expected: "[1,3,12,0,0]", inputData: "[0,1,0,3,12]" },
      { input: "nums = [0]", expected: "[0]", inputData: "[0]" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function moveZeroes(nums) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def moveZeroes(nums):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public void moveZeroes(int[] nums) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 65,
    title: "Meeting Rooms II",
    difficulty: "Medium",
    description: "Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.",
    constraints: ["1 <= intervals.length <= 10^4", "0 <= starti < endi <= 10^6"],
    examples: [{ input: "intervals = [[0,30],[5,10],[15,20]]", output: "2", explanation: "Need 2 rooms at most" }],
    testCases: [
      { input: "intervals = [[0,30],[5,10],[15,20]]", expected: "2", inputData: "[[0,30],[5,10],[15,20]]" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function minMeetingRooms(intervals) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def minMeetingRooms(intervals):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public int minMeetingRooms(int[][] intervals) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 90,
    title: "Design Uber Pool",
    difficulty: "Hard",
    description: "Design a ride-sharing system that can handle multiple passengers sharing rides (like Uber Pool).",
    constraints: ["Handle multiple riders", "Optimize routes", "Real-time matching"],
    examples: [{ input: "Rider requests and driver locations", output: "Optimal ride matches", explanation: "Design ride sharing system" }],
    testCases: [
      { input: "Multiple ride requests", expected: "Optimized matches", inputData: "Various scenarios" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "class UberPool {\n  constructor() {\n    // Initialize ride sharing system\n  }\n  \n  requestRide(passenger, pickup, destination) {\n    // Write your solution here\n  }\n  \n  matchRiders(requests) {\n    // Write your solution here\n  }\n}" },
      { language: "Python", code: "class UberPool:\n    def __init__(self):\n        # Initialize ride sharing system\n        pass\n    \n    def requestRide(self, passenger, pickup, destination):\n        # Write your solution here\n        pass\n    \n    def matchRiders(self, requests):\n        # Write your solution here\n        pass" },
      { language: "Java", code: "class UberPool {\n    public UberPool() {\n        // Initialize ride sharing system\n    }\n    \n    public void requestRide(String passenger, Location pickup, Location destination) {\n        // Write your solution here\n    }\n    \n    public List<Match> matchRiders(List<Request> requests) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 40,
    title: "Single Number",
    difficulty: "Easy",
    description: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
    constraints: ["1 <= nums.length <= 3 * 10^4", "-3 * 10^4 <= nums[i] <= 3 * 10^4"],
    examples: [{ input: "nums = [2,2,1]", output: "1", explanation: "1 appears only once" }],
    testCases: [
      { input: "nums = [2,2,1]", expected: "1", inputData: "[2,2,1]" },
      { input: "nums = [4,1,2,1,2]", expected: "4", inputData: "[4,1,2,1,2]" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function singleNumber(nums) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def singleNumber(nums):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public int singleNumber(int[] nums) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 75,
    title: "Word Break",
    difficulty: "Medium",
    description: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
    constraints: ["1 <= s.length <= 300", "1 <= wordDict.length <= 1000", "1 <= wordDict[i].length <= 20"],
    examples: [{ input: 's = "leetcode", wordDict = ["leet","code"]', output: "true", explanation: '"leetcode" can be segmented as "leet code"' }],
    testCases: [
      { input: 's = "leetcode", wordDict = ["leet","code"]', expected: "true", inputData: '"leetcode", ["leet","code"]' }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function wordBreak(s, wordDict) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def wordBreak(s, wordDict):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public boolean wordBreak(String s, List<String> wordDict) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  }
];
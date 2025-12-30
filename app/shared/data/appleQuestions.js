export const appleQuestions = [
  {
    time: 40,
    title: "Climbing Stairs",
    difficulty: "Easy",
    description: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    constraints: ["1 <= n <= 45"],
    examples: [{ input: "n = 2", output: "2", explanation: "1+1 or 2 steps" }],
    testCases: [
      { input: "n = 2", expected: "2", inputData: "2" },
      { input: "n = 3", expected: "3", inputData: "3" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function climbStairs(n) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def climbStairs(n):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public int climbStairs(int n) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 65,
    title: "Course Schedule",
    difficulty: "Medium",
    description: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.",
    constraints: ["1 <= numCourses <= 10^5", "0 <= prerequisites.length <= 5000"],
    examples: [{ input: "numCourses = 2, prerequisites = [[1,0]]", output: "true", explanation: "Take course 0 then 1" }],
    testCases: [
      { input: "numCourses = 2, prerequisites = [[1,0]]", expected: "true", inputData: "2, [[1,0]]" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function canFinish(numCourses, prerequisites) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def canFinish(numCourses, prerequisites):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public boolean canFinish(int numCourses, int[][] prerequisites) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 85,
    title: "Design Twitter",
    difficulty: "Hard",
    description: "Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and see the 10 most recent tweets in the user's news feed.",
    constraints: ["1 <= userId, followerId, followeeId <= 500", "0 <= tweetId <= 10^4"],
    examples: [{ input: "Twitter operations", output: "Feed with tweets", explanation: "Design Twitter system" }],
    testCases: [
      { input: "postTweet(1, 5); getNewsFeed(1)", expected: "[5]", inputData: "Various operations" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "class Twitter {\n  constructor() {\n    // Initialize\n  }\n  \n  postTweet(userId, tweetId) {\n    // Write your solution here\n  }\n  \n  getNewsFeed(userId) {\n    // Write your solution here\n  }\n  \n  follow(followerId, followeeId) {\n    // Write your solution here\n  }\n  \n  unfollow(followerId, followeeId) {\n    // Write your solution here\n  }\n}" },
      { language: "Python", code: "class Twitter:\n    def __init__(self):\n        # Initialize\n        pass\n    \n    def postTweet(self, userId, tweetId):\n        # Write your solution here\n        pass\n    \n    def getNewsFeed(self, userId):\n        # Write your solution here\n        pass\n    \n    def follow(self, followerId, followeeId):\n        # Write your solution here\n        pass\n    \n    def unfollow(self, followerId, followeeId):\n        # Write your solution here\n        pass" },
      { language: "Java", code: "class Twitter {\n    public Twitter() {\n        // Initialize\n    }\n    \n    public void postTweet(int userId, int tweetId) {\n        // Write your solution here\n    }\n    \n    public List<Integer> getNewsFeed(int userId) {\n        // Write your solution here\n        \n    }\n    \n    public void follow(int followerId, int followeeId) {\n        // Write your solution here\n    }\n    \n    public void unfollow(int followerId, int followeeId) {\n        // Write your solution here\n    }\n}" }
    ]
  },
  {
    time: 35,
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    description: "Given the root of a binary tree, return its maximum depth.",
    constraints: ["The number of nodes in the tree is in the range [0, 10^4]", "-100 <= Node.val <= 100"],
    examples: [{ input: "root = [3,9,20,null,null,15,7]", output: "3", explanation: "Maximum depth is 3" }],
    testCases: [
      { input: "root = [3,9,20,null,null,15,7]", expected: "3", inputData: "[3,9,20,null,null,15,7]" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function maxDepth(root) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def maxDepth(root):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public int maxDepth(TreeNode root) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 55,
    title: "Coin Change",
    difficulty: "Medium",
    description: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount.",
    constraints: ["1 <= coins.length <= 12", "1 <= coins[i] <= 2^31 - 1", "0 <= amount <= 10^4"],
    examples: [{ input: "coins = [1,3,4], amount = 6", output: "2", explanation: "6 = 3 + 3" }],
    testCases: [
      { input: "coins = [1,3,4], amount = 6", expected: "2", inputData: "[1,3,4], 6" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function coinChange(coins, amount) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def coinChange(coins, amount):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public int coinChange(int[] coins, int amount) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  }
];
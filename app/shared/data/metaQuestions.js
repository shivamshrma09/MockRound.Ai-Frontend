export const metaQuestions = [
  {
    time: 50,
    title: "Valid Anagram",
    difficulty: "Easy",
    description: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
    constraints: ["1 <= s.length, t.length <= 5 * 10^4", "s and t consist of lowercase English letters"],
    examples: [{ input: 's = "anagram", t = "nagaram"', output: "true", explanation: "Both strings have same characters" }],
    testCases: [
      { input: 's = "anagram", t = "nagaram"', expected: "true", inputData: '"anagram", "nagaram"' },
      { input: 's = "rat", t = "car"', expected: "false", inputData: '"rat", "car"' }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function isAnagram(s, t) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def isAnagram(s, t):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public boolean isAnagram(String s, String t) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 60,
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    description: "Given the root of a binary tree, return the level order traversal of its nodes' values.",
    constraints: ["The number of nodes in the tree is in the range [0, 2000]", "-1000 <= Node.val <= 1000"],
    examples: [{ input: "root = [3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]", explanation: "Level by level traversal" }],
    testCases: [
      { input: "root = [3,9,20,null,null,15,7]", expected: "[[3],[9,20],[15,7]]", inputData: "[3,9,20,null,null,15,7]" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function levelOrder(root) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def levelOrder(root):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 90,
    title: "Serialize and Deserialize Binary Tree",
    difficulty: "Hard",
    description: "Design an algorithm to serialize and deserialize a binary tree.",
    constraints: ["The number of nodes in the tree is in the range [0, 10^4]", "-1000 <= Node.val <= 1000"],
    examples: [{ input: "root = [1,2,3,null,null,4,5]", output: "[1,2,3,null,null,4,5]", explanation: "Serialize then deserialize" }],
    testCases: [
      { input: "root = [1,2,3,null,null,4,5]", expected: "[1,2,3,null,null,4,5]", inputData: "[1,2,3,null,null,4,5]" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function serialize(root) {\n  // Write your solution here\n}\n\nfunction deserialize(data) {\n  // Write your solution here\n}" },
      { language: "Python", code: "def serialize(root):\n    # Write your solution here\n    pass\n\ndef deserialize(data):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "public String serialize(TreeNode root) {\n    // Write your solution here\n    \n}\n\npublic TreeNode deserialize(String data) {\n    // Write your solution here\n    \n}" }
    ]
  },
  {
    time: 45,
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    description: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists in a one sorted list.",
    constraints: ["The number of nodes in both lists is in the range [0, 50]", "-100 <= Node.val <= 100"],
    examples: [{ input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]", explanation: "Merge two sorted lists" }],
    testCases: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", expected: "[1,1,2,3,4,4]", inputData: "[1,2,4], [1,3,4]" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function mergeTwoLists(list1, list2) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def mergeTwoLists(list1, list2):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  },
  {
    time: 70,
    title: "Validate Binary Search Tree",
    difficulty: "Medium",
    description: "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
    constraints: ["The number of nodes in the tree is in the range [1, 10^4]", "-2^31 <= Node.val <= 2^31 - 1"],
    examples: [{ input: "root = [2,1,3]", output: "true", explanation: "Valid BST" }],
    testCases: [
      { input: "root = [2,1,3]", expected: "true", inputData: "[2,1,3]" },
      { input: "root = [5,1,4,null,null,3,6]", expected: "false", inputData: "[5,1,4,null,null,3,6]" }
    ],
    defaultCode: [
      { language: "JavaScript", code: "function isValidBST(root) {\n  // Write your solution here\n  \n}" },
      { language: "Python", code: "def isValidBST(root):\n    # Write your solution here\n    pass" },
      { language: "Java", code: "class Solution {\n    public boolean isValidBST(TreeNode root) {\n        // Write your solution here\n        \n    }\n}" }
    ]
  }
];
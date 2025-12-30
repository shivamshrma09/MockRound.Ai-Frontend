const moreGoogleCards = [
  {
    id: 12,
    companyName: "Google",
    logoSrc: "/google.png",
    roundType: "System Design",
    questions: 2,
    duration: "45 min",
    successRate: "12%",
    attempts: 23456,
    description: "Design scalable systems and discuss trade-offs.",
    reviews: [{ name: "Rohit Kumar", imageSrc: "https://randomuser.me/api/portraits/men/35.jpg", text: "Google system design focuses on scalability and real-world constraints." }],
    questionsList: [
      {
        time: 25,
        title: "Design URL Shortener",
        difficulty: "Medium",
        description: "Design a URL shortening service like bit.ly that can shorten long URLs and redirect users to original URLs.",
        requirements: [
          "Shorten long URLs to 6-8 character codes",
          "Redirect short URLs to original URLs",
          "Handle 100M URLs per day",
          "Custom aliases support",
          "Analytics and click tracking"
        ],
        constraints: [
          "Read heavy system (100:1 read/write ratio)",
          "Low latency for redirects (<100ms)",
          "High availability (99.9%)",
          "Data retention for 5 years"
        ],
        keyComponents: [
          "URL encoding algorithm",
          "Database design",
          "Caching strategy",
          "Load balancing",
          "Analytics pipeline"
        ]
      },
      {
        time: 20,
        title: "Design Chat System",
        difficulty: "Hard",
        description: "Design a real-time chat system that supports one-on-one and group conversations.",
        requirements: [
          "Real-time messaging",
          "Group chats (up to 100 users)",
          "Message history",
          "Online/offline status",
          "Push notifications"
        ],
        constraints: [
          "Support 50M daily active users",
          "Message delivery in <1 second",
          "99.99% uptime",
          "Cross-platform support"
        ],
        keyComponents: [
          "WebSocket connections",
          "Message queue system",
          "Database sharding",
          "Notification service",
          "CDN for media files"
        ]
      }
    ]
  },
  {
    id: 13,
    companyName: "Google",
    logoSrc: "/google.png",
    roundType: "Technical MCQ",
    questions: 25,
    duration: "45 min",
    successRate: "22%",
    attempts: 89234,
    description: "Advanced computer science concepts and Google-specific technologies.",
    reviews: [{ name: "Priya Sharma", imageSrc: "https://randomuser.me/api/portraits/women/28.jpg", text: "Google MCQs test deep CS fundamentals and system knowledge." }],
    questionsList: [
      {
        time: 2,
        topic: "Distributed Systems",
        difficulty: "Hard",
        question: "In Google's MapReduce paradigm, what happens during the 'shuffle' phase?",
        options: [
          "Data is randomly distributed across nodes",
          "Intermediate key-value pairs are sorted and grouped by key",
          "Input data is split into chunks",
          "Final results are collected from reducers"
        ],
        correctAnswer: 1,
        explanation: "The shuffle phase sorts and groups intermediate key-value pairs by key before sending them to reducers."
      },
      {
        time: 2,
        topic: "Algorithm Complexity",
        difficulty: "Medium",
        question: "What is the time complexity of finding the k-th largest element using QuickSelect algorithm?",
        options: [
          "O(n log n)",
          "O(n) average case",
          "O(k log n)",
          "O(n²) always"
        ],
        correctAnswer: 1,
        explanation: "QuickSelect has O(n) average time complexity, though worst case is O(n²)."
      },
      {
        time: 2,
        topic: "Database Systems",
        difficulty: "Hard",
        question: "In Google's Bigtable, what is the primary key structure?",
        options: [
          "(row, column, timestamp)",
          "(table, row, column)",
          "(row, column family, column qualifier, timestamp)",
          "(partition, row, column)"
        ],
        correctAnswer: 2,
        explanation: "Bigtable uses (row, column family, column qualifier, timestamp) as the primary key structure."
      },
      {
        time: 2,
        topic: "Machine Learning",
        difficulty: "Medium",
        question: "What is the main advantage of using attention mechanisms in neural networks?",
        options: [
          "Reduces model size",
          "Allows focusing on relevant parts of input",
          "Increases training speed",
          "Prevents overfitting"
        ],
        correctAnswer: 1,
        explanation: "Attention mechanisms allow models to focus on relevant parts of the input sequence dynamically."
      },
      {
        time: 2,
        topic: "System Design",
        difficulty: "Hard",
        question: "What is the CAP theorem in distributed systems?",
        options: [
          "Consistency, Availability, Performance",
          "Consistency, Availability, Partition tolerance",
          "Concurrency, Atomicity, Persistence",
          "Caching, Authentication, Performance"
        ],
        correctAnswer: 1,
        explanation: "CAP theorem states that distributed systems can only guarantee 2 out of 3: Consistency, Availability, and Partition tolerance."
      }
    ]
  },
  {
    id: 14,
    companyName: "Google",
    logoSrc: "/google.png",
    roundType: "Behavioral Round",
    questions: 8,
    duration: "60 min",
    successRate: "35%",
    attempts: 34567,
    description: "Leadership principles and behavioral scenarios based on Google's culture.",
    reviews: [{ name: "Amit Verma", imageSrc: "https://randomuser.me/api/portraits/men/42.jpg", text: "Google behavioral rounds focus on Googleyness and leadership qualities." }],
    questionsList: [
      {
        time: 8,
        category: "Leadership",
        difficulty: "Medium",
        question: "Tell me about a time when you had to lead a project with team members who had conflicting opinions. How did you handle it?",
        followUp: [
          "What was the outcome?",
          "What would you do differently?",
          "How did you measure success?"
        ],
        keyPoints: [
          "Demonstrate active listening",
          "Show conflict resolution skills",
          "Highlight collaborative approach",
          "Mention data-driven decisions"
        ]
      },
      {
        time: 8,
        category: "Problem Solving",
        difficulty: "Hard",
        question: "Describe a situation where you had to solve a complex technical problem with limited resources and tight deadlines.",
        followUp: [
          "What was your thought process?",
          "How did you prioritize tasks?",
          "What trade-offs did you make?"
        ],
        keyPoints: [
          "Show systematic approach",
          "Demonstrate resourcefulness",
          "Highlight impact and results",
          "Mention learning from the experience"
        ]
      },
      {
        time: 7,
        category: "Innovation",
        difficulty: "Medium",
        question: "Tell me about a time when you came up with an innovative solution to improve a process or product.",
        followUp: [
          "How did you validate your idea?",
          "What resistance did you face?",
          "How did you measure improvement?"
        ],
        keyPoints: [
          "Show creative thinking",
          "Demonstrate user focus",
          "Highlight measurable impact",
          "Show persistence and iteration"
        ]
      },
      {
        time: 7,
        category: "Collaboration",
        difficulty: "Medium",
        question: "Describe a time when you had to work with a difficult stakeholder or team member. How did you manage the relationship?",
        followUp: [
          "What made them difficult to work with?",
          "How did you build trust?",
          "What was the final outcome?"
        ],
        keyPoints: [
          "Show empathy and understanding",
          "Demonstrate communication skills",
          "Highlight relationship building",
          "Show positive outcome"
        ]
      },
      {
        time: 8,
        category: "Growth Mindset",
        difficulty: "Medium",
        question: "Tell me about a significant failure or mistake you made. How did you handle it and what did you learn?",
        followUp: [
          "How did you communicate the failure?",
          "What steps did you take to fix it?",
          "How has this changed your approach?"
        ],
        keyPoints: [
          "Show ownership and accountability",
          "Demonstrate learning mindset",
          "Highlight corrective actions",
          "Show growth from experience"
        ]
      }
    ]
  },
  {
    id: 15,
    companyName: "Google",
    logoSrc: "/google.png",
    roundType: "Coding Round",
    questions: 2,
    duration: "75 min",
    successRate: "14%",
    attempts: 56789,
    description: "Advanced algorithmic challenges with optimal solutions required.",
    reviews: [{ name: "Kavya Reddy", imageSrc: "https://randomuser.me/api/portraits/women/31.jpg", text: "Google coding rounds demand perfect solutions with optimal complexity." }],
    questionsList: [
      {
        time: 40,
        title: "Trapping Rain Water",
        difficulty: "Hard",
        description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
        constraints: [
          "n == height.length",
          "1 <= n <= 2 * 10^4",
          "0 <= height[i] <= 3 * 10^4"
        ],
        examples: [
          {
            input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
            output: "6",
            explanation: "6 units of rain water are being trapped."
          }
        ],
        testCases: [
          { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", expected: "6", inputData: "[0,1,0,2,1,0,1,3,2,1,2,1]" },
          { input: "height = [4,2,0,3,2,5]", expected: "9", inputData: "[4,2,0,3,2,5]" },
          { input: "height = [3,0,2,0,4]", expected: "7", inputData: "[3,0,2,0,4]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function trap(height) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def trap(height):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int trap(int[] height) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 35,
        title: "Group Anagrams",
        difficulty: "Medium",
        description: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
        constraints: [
          "1 <= strs.length <= 10^4",
          "0 <= strs[i].length <= 100",
          "strs[i] consists of lowercase English letters"
        ],
        examples: [
          {
            input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
            output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
            explanation: "Group anagrams together."
          }
        ],
        testCases: [
          { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', expected: '[["bat"],["nat","tan"],["ate","eat","tea"]]', inputData: '["eat","tea","tan","ate","nat","bat"]' },
          { input: 'strs = [""]', expected: '[[""]]', inputData: '[""]' }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function groupAnagrams(strs) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def groupAnagrams(strs):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
    ]
  }
];

export { moreGoogleCards };
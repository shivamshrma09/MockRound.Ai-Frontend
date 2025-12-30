export const interviewDatabase = [
  {
    id: 5,
    companyName: "Google",
    logoSrc: "/google.png",
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
        constraints: ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9", "Only one valid answer exists"],
        examples: [{ input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]." }],
        testCases: [
          { input: "nums = [2,7,11,15], target = 9", expected: "[0,1]", inputData: "[2,7,11,15]\n9" },
          { input: "nums = [3,2,4], target = 6", expected: "[1,2]", inputData: "[3,2,4]\n6" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function twoSum(nums, target) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def twoSum(nums, target):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
       {
        time: 30,
        title: "Merge Sorted Array",
        difficulty: "Easy",
        description: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.",
        constraints: ["nums1.length == m + n", "nums2.length == n", "0 <= m, n <= 200"],
        examples: [{ input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", output: "[1,2,2,3,5,6]", explanation: "The arrays we are merging are [1,2,3] and [2,5,6]." }],
        testCases: [
          { input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", expected: "[1,2,2,3,5,6]", inputData: "[1,2,3,0,0,0]\n3\n[2,5,6]\n3" },
          { input: "nums1 = [1], m = 1, nums2 = [], n = 0", expected: "[1]", inputData: "[1]\n1\n[]\n0" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function merge(nums1, m, nums2, n) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def merge(nums1, m, nums2, n):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 45,
        title: "First Missing Positive",
        difficulty: "Hard",
        description: "Given an unsorted integer array nums, return the smallest missing positive integer.",
        constraints: ["1 <= nums.length <= 10^5", "-2^31 <= nums[i] <= 2^31 - 1"],
        examples: [{ input: "nums = [1,2,0]", output: "3", explanation: "The numbers in the range [1,2] are all in the array." }],
        testCases: [
          { input: "nums = [1,2,0]", expected: "3", inputData: "[1,2,0]" },
          { input: "nums = [3,4,-1,1]", expected: "2", inputData: "[3,4,-1,1]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function firstMissingPositive(nums) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def firstMissingPositive(nums):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int firstMissingPositive(int[] nums) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
      
    ]
  },
  {
    id: 11,
    companyName: "Google",
    logoSrc: "/google.png",
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
        constraints: ["1 <= s.length <= 10^4", "s consists of parentheses only '()[]{}'."],
        examples: [{ input: 's = "()"', output: "true", explanation: "Valid parentheses." }],
        testCases: [
          { input: 's = "()"', expected: "true", inputData: "()" },
          { input: 's = "()[]{}"', expected: "true", inputData: "()[]{}" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function isValid(s) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def isValid(s):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public boolean isValid(String s) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
    ]
  },
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
        requirements: ["Shorten long URLs to 6-8 character codes", "Redirect short URLs to original URLs", "Handle 100M URLs per day"],
        constraints: ["Read heavy system (100:1 read/write ratio)", "Low latency for redirects (<100ms)", "High availability (99.9%)"],
        keyComponents: ["URL encoding algorithm", "Database design", "Caching strategy", "Load balancing"]
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
        options: ["Data is randomly distributed across nodes", "Intermediate key-value pairs are sorted and grouped by key", "Input data is split into chunks", "Final results are collected from reducers"],
        correctAnswer: 1,
        explanation: "The shuffle phase sorts and groups intermediate key-value pairs by key before sending them to reducers."
      }
    ]
  },
  {
    id: 100,
    companyName: "Computer Fundamentals",
    logoSrc: "/computer.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "30 min",
    successRate: "N/A",
    attempts: 0,
    description: "Computer Fundamentals practice set - Part 1",
    reviews: [],
    questionsList: [
      { time: 2, topic: "Hardware", difficulty: "Easy", question: "What is the primary function of the Central Processing Unit (CPU) in a computer system?", options: ["To manage and store data permanently", "To perform calculations and execute instructions", "To display information to the user", "To provide network connectivity"], correctAnswer: 1, explanation: "The CPU executes instructions and performs arithmetic and logic operations." },
      { time: 2, topic: "Hardware", difficulty: "Easy", question: "Which of the following is considered the brain of the computer?", options: ["RAM", "Hard Drive", "CPU", "Motherboard"], correctAnswer: 2, explanation: "The CPU is often called the brain because it executes program instructions." },
      { time: 2, topic: "OS", difficulty: "Easy", question: "What is the main purpose of an operating system?", options: ["To perform calculations", "To manage computer hardware and software resources", "To display graphics", "To store data"], correctAnswer: 1, explanation: "An OS manages hardware resources and provides services for application software." },
      { time: 2, topic: "I/O", difficulty: "Easy", question: "Which of the following is an input device?", options: ["Monitor", "Printer", "Keyboard", "Speaker"], correctAnswer: 2, explanation: "A keyboard is used to provide input to the computer." },
      { time: 2, topic: "Memory", difficulty: "Easy", question: "What type of memory is volatile and loses its contents when power is turned off?", options: ["ROM", "Flash Memory", "RAM", "Hard Drive"], correctAnswer: 2, explanation: "RAM is volatile memory and loses data when power is removed." },
      { time: 2, topic: "Firmware", difficulty: "Easy", question: "Which of the following best describes the function of BIOS in a computer system?", options: ["Manages data storage", "Initializes hardware during booting", "Runs applications", "Provides internet access"], correctAnswer: 1, explanation: "BIOS initializes hardware and starts the boot process." },
      { time: 2, topic: "Hardware", difficulty: "Easy", question: "Which component of the computer is responsible for executing instructions from computer programs?", options: ["RAM", "Hard Drive", "CPU", "Network Card"], correctAnswer: 2, explanation: "The CPU executes program instructions." },
      { time: 2, topic: "Motherboard", difficulty: "Easy", question: "Which of the following describes the function of the motherboard in a computer system?", options: ["Stores data", "Processes instructions", "Connects and allows communication between various components", "Displays output"], correctAnswer: 2, explanation: "The motherboard connects components and allows them to communicate." },
      { time: 2, topic: "Number Systems", difficulty: "Easy", question: "Which of the following is the correct binary representation of the decimal number 10?", options: ["1010", "1001", "1100", "1110"], correctAnswer: 0, explanation: "10 in binary is 1010." },
      { time: 2, topic: "Troubleshooting", difficulty: "Easy", question: "A user reports that their computer is running slowly and often freezes. What is the most likely cause of this issue?", options: ["The computer's hardware is outdated", "The operating system is not updated", "The computer has insufficient RAM or a failing hard drive", "The computer's graphics card is faulty"], correctAnswer: 2, explanation: "Insufficient RAM or failing storage often causes slowness and freezing." },
      { time: 2, topic: "Number Systems", difficulty: "Easy", question: "What is the base of the binary number system?", options: ["2", "8", "10", "16"], correctAnswer: 0, explanation: "Binary is base-2." },
      { time: 2, topic: "Number Systems", difficulty: "Easy", question: "Which of the following number systems is commonly used in digital electronics and computing?", options: ["Decimal", "Binary", "Octal", "Hexadecimal"], correctAnswer: 1, explanation: "Binary is the fundamental number system used in digital electronics." },
      { time: 2, topic: "Number Systems", difficulty: "Easy", question: "In the hexadecimal number system, which digit follows 9?", options: ["A", "B", "C", "D"], correctAnswer: 0, explanation: "Hex digits go 0-9 then A-F; A follows 9." },
      { time: 2, topic: "Number Systems", difficulty: "Easy", question: "What is the binary equivalent of the decimal number 5?", options: ["0010", "0101", "1001", "1101"], correctAnswer: 1, explanation: "5 in binary is 0101." },
      { time: 2, topic: "Number Systems", difficulty: "Easy", question: "Which of the following best describes the octal number system?", options: ["Base-2", "Base-8", "Base-10", "Base-16"], correctAnswer: 1, explanation: "Octal is base-8." }
    ]
  },
  {
    id: 101,
    companyName: "Computer Fundamentals",
    logoSrc: "/computer.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "30 min",
    successRate: "N/A",
    attempts: 0,
    description: "Computer Fundamentals practice set - Part 2",
    reviews: [],
    questionsList: [
      { time: 2, topic: "Number Systems", difficulty: "Easy", question: "Convert the binary number 1101 to its decimal equivalent.", options: ["10", "11", "12", "13"], correctAnswer: 3, explanation: "1101 in binary equals 13 in decimal." },
      { time: 2, topic: "Number Systems", difficulty: "Easy", question: "What is the hexadecimal representation of the binary number 1111?", options: ["9", "A", "B", "F"], correctAnswer: 3, explanation: "1111 (binary) is F in hexadecimal." },
      { time: 2, topic: "Number Systems", difficulty: "Easy", question: "How many unique values can be represented by 4 bits in binary?", options: ["8", "12", "16", "32"], correctAnswer: 2, explanation: "4 bits can represent 2^4 = 16 unique values." },
      { time: 2, topic: "Number Systems", difficulty: "Easy", question: "Which of the following is the correct binary representation of the decimal number 20?", options: ["10100", "10010", "11010", "11100"], correctAnswer: 0, explanation: "20 in binary is 10100." },
      { time: 2, topic: "Number Systems", difficulty: "Easy", question: "Convert the decimal number 7 to its binary equivalent.", options: ["0010", "0100", "0111", "1000"], correctAnswer: 2, explanation: "7 in binary is 0111." },
      { time: 2, topic: "Number Systems", difficulty: "Easy", question: "Convert the hexadecimal number A3 to its binary equivalent.", options: ["10100011", "11010011", "10011100", "10110101"], correctAnswer: 0, explanation: "A3 (hex) = 1010 0011 (binary) = 10100011." },
      { time: 2, topic: "Number Systems", difficulty: "Easy", question: "A student converts a binary number 101010 to decimal but gets the result as 41. What is the correct result?", options: ["34", "40", "42", "44"], correctAnswer: 2, explanation: "Binary 101010 = 42." },
      { time: 2, topic: "Hardware", difficulty: "Easy", question: "Which component of a computer is responsible for processing data?", options: ["RAM", "CPU", "Motherboard", "Hard Drive"], correctAnswer: 1, explanation: "The CPU processes data and executes instructions." },
      { time: 2, topic: "I/O", difficulty: "Easy", question: "What type of device is a keyboard?", options: ["Input", "Output", "Storage", "Processing"], correctAnswer: 0, explanation: "A keyboard is an input device." },
      { time: 2, topic: "Storage", difficulty: "Easy", question: "Which component stores the operating system and files for long-term use?", options: ["RAM", "CPU", "Hard Drive", "Power Supply"], correctAnswer: 2, explanation: "Long-term storage is provided by HDDs/SSDs (hard drives)." },
      { time: 2, topic: "Power", difficulty: "Easy", question: "What is the purpose of a power supply unit (PSU) in a computer?", options: ["To process data", "To store data", "To provide power to the computer", "To display images"], correctAnswer: 2, explanation: "The PSU supplies electrical power to components." },
      { time: 2, topic: "Motherboard", difficulty: "Easy", question: "Which of the following best describes the function of a motherboard?", options: ["Stores data", "Connects all components and allows communication", "Processes data", "Provides power"], correctAnswer: 1, explanation: "The motherboard connects components and enables communication between them." },
      { time: 2, topic: "Cooling", difficulty: "Easy", question: "Which component is primarily responsible for cooling the CPU?", options: ["RAM", "Power Supply", "Fan/Heat Sink", "Motherboard"], correctAnswer: 2, explanation: "A fan and heat sink remove heat from the CPU." },
      { time: 2, topic: "Memory", difficulty: "Easy", question: "What is the main function of the RAM in a computer system?", options: ["To store data permanently", "To execute instructions", "To provide temporary storage for active processes", "To connect components"], correctAnswer: 2, explanation: "RAM provides temporary storage for active processes and data." },
      { time: 2, topic: "Binary", difficulty: "Easy", question: "Which of the following is the binary representation of the command to access the first byte of memory?", options: ["00000001", "00000000", "11111111", "10000000"], correctAnswer: 1, explanation: "00000000 commonly represents zero or the first address offset, depending on convention." }
    ]
  },
  {
    id: 102,
    companyName: "Computer Fundamentals",
    logoSrc: "/computer.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "30 min",
    successRate: "N/A",
    attempts: 0,
    description: "Computer Fundamentals practice set - Part 3",
    reviews: [],
    questionsList: [
      { time: 2, topic: "Networking", difficulty: "Easy", question: "What is the binary equivalent of the IP address 192.168.0.1?", options: ["11000000.10101000.00000000.00000001", "11111111.11111111.11111111.11111111", "10101010.01010101.10101010.01010101", "00000000.00000000.00000000.00000000"], correctAnswer: 0, explanation: "192 = 11000000, 168 = 10101000, 0 = 00000000, 1 = 00000001." },
      { time: 2, topic: "Networking", difficulty: "Easy", question: "Convert the binary MAC address 11001100:10101010:11110000:11001100:10101010:11110000 to its hexadecimal equivalent.", options: ["CC:AA:F0:CC:AA:F0", "C0:A8:00:01:00:01", "FF:FF:FF:FF:FF:FF", "0A:00:00:01:00:01"], correctAnswer: 0, explanation: "11001100=CC, 10101010=AA, 11110000=F0." },
      { time: 2, topic: "Networking", difficulty: "Easy", question: "A user is unable to connect to the internet. Which of the following is the first step in troubleshooting the issue?", options: ["Check the network cables", "Replace the computer", "Uninstall the operating system", "Format the hard drive"], correctAnswer: 0, explanation: "Always start with basic physical checks like cables and power." },
      { time: 2, topic: "Networking", difficulty: "Easy", question: "A network administrator notices that the network is experiencing high latency. What could be a possible cause?", options: ["Heavy network traffic", "Incorrect IP configuration", "Hardware failure", "Malware infection"], correctAnswer: 0, explanation: "Heavy traffic/congestion commonly causes high latency." },
      { time: 2, topic: "Security", difficulty: "Easy", question: "A company's internal network is experiencing frequent security breaches. Which measure is most effective?", options: ["Install antivirus software", "Use strong firewalls and encryption", "Limit employee internet usage", "Disable all network access"], correctAnswer: 1, explanation: "Firewalls and encryption are key to preventing unauthorized access and protecting data." },
      { time: 2, topic: "Databases", difficulty: "Easy", question: "What is the primary purpose of a Database Management System (DBMS)?", options: ["To create graphics", "To manage data in a structured way", "To connect to the internet", "To perform calculations"], correctAnswer: 1, explanation: "A DBMS stores, manages and provides access to structured data." },
      { time: 2, topic: "Databases", difficulty: "Easy", question: "Which of the following is a characteristic of a relational database?", options: ["Data is stored in files", "Data is stored in tables with rows and columns", "Data is stored in a hierarchy", "Data is stored in a flat format"], correctAnswer: 1, explanation: "Relational DBs use tables with rows and columns and relationships between them." },
      { time: 2, topic: "Databases", difficulty: "Easy", question: "What does SQL stand for?", options: ["Structured Query Language", "Sequential Query Language", "Structured Quality Language", "Standard Query Language"], correctAnswer: 0, explanation: "SQL stands for Structured Query Language." },
      { time: 2, topic: "Databases", difficulty: "Easy", question: "What is the purpose of the primary key in a database table?", options: ["To perform calculations", "To uniquely identify each record in the table", "To store large amounts of data", "To manage user access"], correctAnswer: 1, explanation: "Primary keys uniquely identify records in a table." },
      { time: 2, topic: "Databases", difficulty: "Easy", question: "Which of the following is used to retrieve data from a database?", options: ["UPDATE", "SELECT", "INSERT", "DELETE"], correctAnswer: 1, explanation: "SELECT retrieves data from a database." },
      { time: 2, topic: "Databases", difficulty: "Easy", question: "What is the difference between a primary key and a foreign key?", options: ["A primary key can contain duplicates, while a foreign key cannot", "A foreign key uniquely identifies records, while a primary key does not", "A primary key uniquely identifies records in its own table, while a foreign key refers to the primary key in another table", "There is no difference"], correctAnswer: 2, explanation: "Primary keys uniquely identify records; foreign keys reference primary keys in other tables." },
      { time: 2, topic: "Databases", difficulty: "Easy", question: "Which SQL statement is used to insert a new record into a table?", options: ["INSERT INTO", "ADD RECORD", "INSERT NEW", "ADD ROW"], correctAnswer: 0, explanation: "INSERT INTO is used to add new records." },
      { time: 2, topic: "Databases", difficulty: "Easy", question: "What will be the result of: SELECT * FROM Customers WHERE Country = 'Germany';", options: ["It will delete records from the Customers table", "It will update records in the Customers table", "It will retrieve all records from the Customers table where the Country is 'Germany'", "It will retrieve all records from the Customers table"], correctAnswer: 2, explanation: "The WHERE clause filters rows where Country equals 'Germany'." },
      { time: 2, topic: "Databases", difficulty: "Easy", question: "Consider: SELECT name, COUNT(*) FROM Employees GROUP BY name HAVING COUNT(*) > 1; What does this query do?", options: ["It retrieves names of employees and the number of times each appears, filtering only those names that appear more than once", "It deletes duplicate names from the Employees table", "It updates the count of employee names in the Employees table", "It retrieves all records from the Employees table"], correctAnswer: 0, explanation: "The query groups by name and returns only names that appear more than once." },
      { time: 2, topic: "Databases", difficulty: "Easy", question: "A user reports that they are unable to retrieve specific data from a database. What could be the issue?", options: ["The SQL query might be incorrectly written", "The database is full", "The server is turned off", "The application is outdated"], correctAnswer: 0, explanation: "An incorrect SQL query is a common reason for unexpected results." }
    ]
  },
  {
    id: 103,
    companyName: "Computer Fundamentals",
    logoSrc: "/computer.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "30 min",
    successRate: "N/A",
    attempts: 0,
    description: "Computer Fundamentals practice set - Part 4",
    reviews: [],
    questionsList: [
      { time: 2, topic: "Databases", difficulty: "Easy", question: "A database query is taking too long to execute. Which of the following could be a reason for this?", options: ["The database has too many indexes", "The query is poorly optimized", "The server has too much RAM", "The network is too fast"], correctAnswer: 1, explanation: "Poorly optimized queries are a common cause of slow performance." },
      { time: 2, topic: "Databases", difficulty: "Easy", question: "A database admin notices frequent deadlocks. What could be the cause?", options: ["Improper indexing", "Concurrent transactions trying to access the same resources", "Too many indexes", "Insufficient user permissions"], correctAnswer: 1, explanation: "Deadlocks happen when concurrent transactions lock resources needed by each other." },
      { time: 2, topic: "Security", difficulty: "Easy", question: "What is the primary purpose of a firewall in a computer network?", options: ["To store data", "To block unauthorized access", "To increase processing speed", "To display graphics"], correctAnswer: 1, explanation: "Firewalls block unauthorized access and control network traffic." },
      { time: 2, topic: "Security", difficulty: "Easy", question: "Which of the following is considered a strong password?", options: ["password123", "JohnDoe", "ABCDEF", "5f^#2kG!vD"], correctAnswer: 3, explanation: "Strong passwords include a mix of characters, numbers, and symbols." },
      { time: 2, topic: "Security", difficulty: "Easy", question: "What is the purpose of encryption in computer security?", options: ["To delete files", "To hide the user interface", "To protect data by converting it into a code", "To increase the size of files"], correctAnswer: 2, explanation: "Encryption protects data by making it unreadable without the decryption key." },
      { time: 2, topic: "Security", difficulty: "Easy", question: "What does the term 'phishing' refer to?", options: ["A type of malware", "A hacking technique involving fake websites or emails", "A method of protecting data", "A tool for software development"], correctAnswer: 1, explanation: "Phishing uses fraudulent emails or sites to trick users into revealing sensitive information." },
      { time: 2, topic: "Security", difficulty: "Easy", question: "Which of the following is a characteristic of ransomware?", options: ["It protects your data", "It encrypts your data and demands payment for decryption", "It speeds up your computer", "It is used to create backups"], correctAnswer: 1, explanation: "Ransomware encrypts files and demands payment for the decryption key." },
      { time: 2, topic: "Linux", difficulty: "Easy", question: "Which of the following commands can be used in Linux to change the permissions of a file?", options: ["chmod", "ps", "grep", "ls"], correctAnswer: 0, explanation: "chmod changes file permissions in Unix/Linux systems." },
      { time: 2, topic: "Security", difficulty: "Easy", question: "Which SQL technique can help prevent SQL injection attacks?", options: ["SELECT *", "INSERT INTO", "DROP TABLE", "Prepared Statements"], correctAnswer: 3, explanation: "Prepared statements (parameterized queries) help prevent SQL injection." },
      { time: 2, topic: "Security", difficulty: "Easy", question: "A user reports their antivirus detected a virus but cannot remove it. What should they do next?", options: ["Ignore the warning", "Turn off the antivirus", "Update the antivirus software and run a full scan", "Delete all files"], correctAnswer: 2, explanation: "Updating the antivirus and running a full scan may remove or quarantine the threat." },
      { time: 2, topic: "Security", difficulty: "Easy", question: "An employee receives an email asking for their login credentials. What should they do?", options: ["Reply with the information", "Click the link provided", "Forward the email to IT support", "Delete the email immediately"], correctAnswer: 2, explanation: "Forwarding suspicious emails to IT allows investigation and safe handling." },
      { time: 2, topic: "Security", difficulty: "Easy", question: "A company's database has been encrypted by ransomware. What is the best immediate course of action?", options: ["Pay the ransom", "Disconnect the infected systems from the network", "Ignore the attack", "Continue using the database"], correctAnswer: 1, explanation: "Disconnecting prevents further spread and allows containment and recovery steps." },
      { time: 2, topic: "Web", difficulty: "Easy", question: "What does the acronym URL stand for?", options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Routing Locator", "Universal Routing Locator"], correctAnswer: 0, explanation: "URL stands for Uniform Resource Locator." },
      { time: 2, topic: "Web", difficulty: "Easy", question: "Which of the following is a common use of HTML?", options: ["To create websites", "To manage databases", "To program operating systems", "To design graphics"], correctAnswer: 0, explanation: "HTML is used to structure and create web pages." },
      { time: 2, topic: "Web", difficulty: "Easy", question: "What is the primary purpose of CSS in web development?", options: ["To define the structure of a web page", "To manage database connections", "To style and layout web pages", "To perform calculations"], correctAnswer: 2, explanation: "CSS defines presentation, layout and styling for web pages." }
    ]
  },
  {
    id: 104,
    companyName: "Computer Fundamentals",
    logoSrc: "/computer.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "30 min",
    successRate: "N/A",
    attempts: 0,
    description: "Computer Fundamentals practice set - Part 5",
    reviews: [],
    questionsList: [
      { time: 2, topic: "Web", difficulty: "Easy", question: "What does the term 'HTTP' stand for in web technologies?", options: ["HyperText Transfer Protocol", "Hyperlink Text Transfer Protocol", "Hyperlink Transfer Protocol", "HyperText Transfer Port"], correctAnswer: 0, explanation: "HTTP stands for HyperText Transfer Protocol." },
      { time: 2, topic: "Web", difficulty: "Easy", question: "What is the role of a DNS server?", options: ["To store website data", "To host websites", "To translate domain names into IP addresses", "To manage internet connections"], correctAnswer: 2, explanation: "DNS maps domain names to IP addresses." },
      { time: 2, topic: "Web", difficulty: "Easy", question: "Which HTML tag is used to create a hyperlink?", options: ["<a>", "<link>", "<href>", "<img>"], correctAnswer: 0, explanation: "The <a> tag defines a hyperlink in HTML." },
      { time: 2, topic: "CSS", difficulty: "Easy", question: "Which CSS property is used to change the text color of an element?", options: ["font-style", "color", "text-color", "background-color"], correctAnswer: 1, explanation: "The 'color' property sets the text color in CSS." },
      { time: 2, topic: "JS", difficulty: "Easy", question: "Which of the following can be used to update the content of an HTML element in JavaScript?", options: ["document.write()", "innerHTML", "updateHTML()", "setContent()"], correctAnswer: 1, explanation: "innerHTML (a property) is commonly used to set or get HTML content of an element." },
      { time: 2, topic: "Web", difficulty: "Easy", question: "A website is not loading and shows '404 Not Found'. What could be the issue?", options: ["The server is down", "The page has been moved or deleted", "The user’s internet connection is slow", "The website is using too much memory"], correctAnswer: 1, explanation: "404 indicates the requested resource was not found on the server." },
      { time: 2, topic: "Web", difficulty: "Easy", question: "A website is loading slowly. What could be a potential cause?", options: ["Large images or media files", "Incorrect HTML tags", "Too many CSS files", "Invalid JavaScript syntax"], correctAnswer: 0, explanation: "Large media files increase load times and slow a site." },
      { time: 2, topic: "Programming", difficulty: "Easy", question: "What is the primary purpose of a programming language?", options: ["To design hardware", "To create programs that perform specific tasks", "To browse the internet", "To store large amounts of data"], correctAnswer: 1, explanation: "Programming languages are used to write software that performs tasks." },
      { time: 2, topic: "Programming", difficulty: "Easy", question: "Which of the following is an example of a high-level programming language?", options: ["Assembly", "C++", "Binary", "Machine Language"], correctAnswer: 1, explanation: "C++ is a high-level programming language (closer to human-readable syntax)." },
      { time: 2, topic: "Programming", difficulty: "Easy", question: "What does the term 'algorithm' refer to in programming?", options: ["A step-by-step procedure to solve a problem", "A programming language", "A type of hardware", "A network protocol"], correctAnswer: 0, explanation: "An algorithm is a step-by-step procedure for solving a problem." },
      { time: 2, topic: "Programming", difficulty: "Easy", question: "What is the main difference between a compiled language and an interpreted language?", options: ["Compiled languages are faster", "Interpreted languages are more efficient", "Compiled languages are converted into machine code before execution, while interpreted languages are executed line by line", "There is no difference"], correctAnswer: 2, explanation: "Compiled languages are translated to machine code before running; interpreted languages are executed by an interpreter at runtime." },
      { time: 2, topic: "Programming", difficulty: "Easy", question: "Which of the following describes a variable in programming?", options: ["A fixed value", "A placeholder for storing data that can change", "A type of error", "A programming language"], correctAnswer: 1, explanation: "A variable stores data that can change during program execution." },
      { time: 2, topic: "Python", difficulty: "Easy", question: "What is the output of: print(2 + 3 * 4)?", options: ["20", "14", "24", "10"], correctAnswer: 1, explanation: "Multiplication has higher precedence: 3*4=12; 12+2=14." },
      { time: 2, topic: "Python", difficulty: "Easy", question: "Which of the following is the correct syntax for a for loop in Python?", options: ["for i = 0 to 5:", "for i in range(5):", "for (i = 0; i < 5; i++)", "for (i = 1 to 5)"], correctAnswer: 1, explanation: "'for i in range(5):' is the correct Python loop syntax." }
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
        followUp: ["What was the outcome?", "What would you do differently?", "How did you measure success?"],
        keyPoints: ["Demonstrate active listening", "Show conflict resolution skills", "Highlight collaborative approach"]
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
        constraints: ["n == height.length", "1 <= n <= 2 * 10^4", "0 <= height[i] <= 3 * 10^4"],
        examples: [{ input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6", explanation: "6 units of rain water are being trapped." }],
        testCases: [
          { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", expected: "6", inputData: "[0,1,0,2,1,0,1,3,2,1,2,1]" },
          { input: "height = [4,2,0,3,2,5]", expected: "9", inputData: "[4,2,0,3,2,5]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function trap(height) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def trap(height):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int trap(int[] height) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
    ]
  },
  {
    id: 16,
    companyName: "Meta",
    logoSrc: "/meta.png",
    roundType: "Coding Round",
    questions: 3,
    duration: "90 min",
    successRate: "16%",
    attempts: 45678,
    description: "High-frequency problems focusing on arrays, strings, and optimization.",
    reviews: [{ name: "Sarah Chen", imageSrc: "https://randomuser.me/api/portraits/women/15.jpg", text: "Meta focuses on clean, optimized solutions." }],
    questionsList: [
      {
        time: 30,
        title: "Merge Sorted Array",
        difficulty: "Easy",
        description: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.",
        constraints: ["nums1.length == m + n", "nums2.length == n", "0 <= m, n <= 200"],
        examples: [{ input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", output: "[1,2,2,3,5,6]", explanation: "The arrays we are merging are [1,2,3] and [2,5,6]." }],
        testCases: [
          { input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", expected: "[1,2,2,3,5,6]", inputData: "[1,2,3,0,0,0]\n3\n[2,5,6]\n3" },
          { input: "nums1 = [1], m = 1, nums2 = [], n = 0", expected: "[1]", inputData: "[1]\n1\n[]\n0" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function merge(nums1, m, nums2, n) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def merge(nums1, m, nums2, n):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
    ]
  },
  {
    id: 17,
    companyName: "Meta",
    logoSrc: "/meta.png",
    roundType: "Coding Round",
    questions: 3,
    duration: "90 min",
    successRate: "18%",
    attempts: 38945,
    description: "Medium complexity problems with focus on algorithms and data structures.",
    reviews: [{ name: "Alex Johnson", imageSrc: "https://randomuser.me/api/portraits/men/25.jpg", text: "Meta tests algorithmic thinking and optimization skills." }],
    questionsList: [
      {
        time: 40,
        title: "3Sum",
        difficulty: "Medium",
        description: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
        constraints: ["3 <= nums.length <= 3000", "-10^5 <= nums[i] <= 10^5"],
        examples: [{ input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]", explanation: "The distinct triplets are [-1,0,1] and [-1,-1,2]." }],
        testCases: [
          { input: "nums = [-1,0,1,2,-1,-4]", expected: "[[-1,-1,2],[-1,0,1]]", inputData: "[-1,0,1,2,-1,-4]" },
          { input: "nums = [0,1,1]", expected: "[]", inputData: "[0,1,1]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function threeSum(nums) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def threeSum(nums):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
    ]
  },
  {
    id: 18,
    companyName: "Meta",
    logoSrc: "/meta.png",
    roundType: "Coding Round",
    questions: 2,
    duration: "75 min",
    successRate: "12%",
    attempts: 29876,
    description: "Advanced problems requiring optimal solutions and complex algorithms.",
    reviews: [{ name: "David Kim", imageSrc: "https://randomuser.me/api/portraits/men/30.jpg", text: "Meta hard problems test deep algorithmic knowledge." }],
    questionsList: [
      {
        time: 45,
        title: "First Missing Positive",
        difficulty: "Hard",
        description: "Given an unsorted integer array nums, return the smallest missing positive integer.",
        constraints: ["1 <= nums.length <= 10^5", "-2^31 <= nums[i] <= 2^31 - 1"],
        examples: [{ input: "nums = [1,2,0]", output: "3", explanation: "The numbers in the range [1,2] are all in the array." }],
        testCases: [
          { input: "nums = [1,2,0]", expected: "3", inputData: "[1,2,0]" },
          { input: "nums = [3,4,-1,1]", expected: "2", inputData: "[3,4,-1,1]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function firstMissingPositive(nums) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def firstMissingPositive(nums):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int firstMissingPositive(int[] nums) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
    ]
  },
  {
    id: 19,
    companyName: "Meta",
    logoSrc: "/meta.png",
    roundType: "Coding Round",
    questions: 3,
    duration: "90 min",
    successRate: "20%",
    attempts: 34567,
    description: "String manipulation and dynamic programming focused problems.",
    reviews: [{ name: "Emma Wilson", imageSrc: "https://randomuser.me/api/portraits/women/20.jpg", text: "Meta emphasizes string algorithms and DP solutions." }],
    questionsList: [
      {
        time: 35,
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        description: "Given a string s, find the length of the longest substring without repeating characters.",
        constraints: ["0 <= s.length <= 5 * 10^4", "s consists of English letters, digits, symbols and spaces"],
        examples: [{ input: 's = "abcabcbb"', output: "3", explanation: 'The answer is "abc", with the length of 3.' }],
        testCases: [
          { input: 's = "abcabcbb"', expected: "3", inputData: "abcabcbb" },
          { input: 's = "bbbbb"', expected: "1", inputData: "bbbbb" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function lengthOfLongestSubstring(s) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def lengthOfLongestSubstring(s):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
    ]
  },
  {
    id: 20,
    companyName: "Meta",
    logoSrc: "/meta.png",
    roundType: "Coding Round",
    questions: 3,
    duration: "90 min",
    successRate: "15%",
    attempts: 42156,
    description: "Tree and graph algorithms with advanced data structures.",
    reviews: [{ name: "Michael Brown", imageSrc: "https://randomuser.me/api/portraits/men/35.jpg", text: "Meta tree problems require deep understanding of traversals." }],
    questionsList: [
      {
        time: 35,
        title: "Binary Tree Inorder Traversal",
        difficulty: "Easy",
        description: "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
        constraints: ["The number of nodes in the tree is in the range [0, 100]", "-100 <= Node.val <= 100"],
        examples: [{ input: "root = [1,null,2,3]", output: "[1,3,2]", explanation: "Inorder traversal: left, root, right." }],
        testCases: [
          { input: "root = [1,null,2,3]", expected: "[1,3,2]", inputData: "[1,null,2,3]" },
          { input: "root = []", expected: "[]", inputData: "[]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function inorderTraversal(root) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def inorderTraversal(root):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public List<Integer> inorderTraversal(TreeNode root) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
    ]
  },
  {
    id: 21,
    companyName: "Meta",
    logoSrc: "/meta.png",
    roundType: "Coding Round",
    questions: 3,
    duration: "90 min",
    successRate: "22%",
    attempts: 56789,
    description: "Array manipulation and mathematical algorithms.",
    reviews: [{ name: "Lisa Garcia", imageSrc: "https://randomuser.me/api/portraits/women/25.jpg", text: "Meta array problems test optimization and edge case handling." }],
    questionsList: [
      {
        time: 25,
        title: "Container With Most Water",
        difficulty: "Medium",
        description: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container that contains the most water.",
        constraints: ["n == height.length", "2 <= n <= 10^5", "0 <= height[i] <= 10^4"],
        examples: [{ input: "height = [1,8,6,2,5,4,8,3,7]", output: "49", explanation: "The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49." }],
        testCases: [
          { input: "height = [1,8,6,2,5,4,8,3,7]", expected: "49", inputData: "[1,8,6,2,5,4,8,3,7]" },
          { input: "height = [1,1]", expected: "1", inputData: "[1,1]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function maxArea(height) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def maxArea(height):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int maxArea(int[] height) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
    ]
  },
  {
    id: 22,
    companyName: "Apple",
    logoSrc: "/apple.png",
    roundType: "Coding Round",
    questions: 3,
    duration: "90 min",
    successRate: "20%",
    attempts: 34567,
    description: "Focus on clean code, edge cases, and efficient algorithms.",
    reviews: [{ name: "John Smith", imageSrc: "https://randomuser.me/api/portraits/men/40.jpg", text: "Apple emphasizes code quality and thorough testing." }],
    questionsList: [
      {
        time: 30,
        title: "Two Sum",
        difficulty: "Easy",
        description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
        constraints: ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9", "Only one valid answer exists"],
        examples: [{ input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]." }],
        testCases: [
          { input: "nums = [2,7,11,15], target = 9", expected: "[0,1]", inputData: "[2,7,11,15]\n9" },
          { input: "nums = [3,2,4], target = 6", expected: "[1,2]", inputData: "[3,2,4]\n6" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function twoSum(nums, target) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def twoSum(nums, target):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
    ]
  },
  {
    id: 23,
    companyName: "Apple",
    logoSrc: "/apple.png",
    roundType: "Coding Round",
    questions: 3,
    duration: "90 min",
    successRate: "18%",
    attempts: 28945,
    description: "Advanced problems focusing on algorithms and data structures.",
    reviews: [{ name: "Sarah Wilson", imageSrc: "https://randomuser.me/api/portraits/women/30.jpg", text: "Apple interviews test problem-solving and optimization skills." }],
    questionsList: [
      {
        time: 30,
        title: "Valid Parentheses",
        difficulty: "Easy",
        description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
        constraints: ["1 <= s.length <= 10^4", "s consists of parentheses only '()[]{}'."],
        examples: [{ input: 's = "()"', output: "true", explanation: "Valid parentheses." }],
        testCases: [
          { input: 's = "()"', expected: "true", inputData: "()" },
          { input: 's = "()[]{}"', expected: "true", inputData: "()[]{}" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function isValid(s) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def isValid(s):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public boolean isValid(String s) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
    ]
  },
  {
    id: 24,
    companyName: "Apple",
    logoSrc: "/apple.png",
    roundType: "Coding Round",
    questions: 3,
    duration: "90 min",
    successRate: "16%",
    attempts: 42156,
    description: "String and array manipulation with mathematical algorithms.",
    reviews: [{ name: "Mike Johnson", imageSrc: "https://randomuser.me/api/portraits/men/25.jpg", text: "Apple focuses on clean implementations and edge cases." }],
    questionsList: [
      {
        time: 35,
        title: "Group Anagrams",
        difficulty: "Medium",
        description: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
        constraints: ["1 <= strs.length <= 10^4", "0 <= strs[i].length <= 100", "strs[i] consists of lowercase English letters"],
        examples: [{ input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]', explanation: "Group anagrams together." }],
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
  },
  {
    id: 25,
    companyName: "Apple",
    logoSrc: "/apple.png",
    roundType: "Coding Round",
    questions: 3,
    duration: "90 min",
    successRate: "22%",
    attempts: 35678,
    description: "Mathematical and algorithmic problem solving.",
    reviews: [{ name: "Lisa Chen", imageSrc: "https://randomuser.me/api/portraits/women/35.jpg", text: "Apple tests mathematical thinking and algorithm optimization." }],
    questionsList: [
      {
        time: 30,
        title: "Reverse Integer",
        difficulty: "Medium",
        description: "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range, then return 0.",
        constraints: ["-2^31 <= x <= 2^31 - 1"],
        examples: [{ input: "x = 123", output: "321", explanation: "Reverse the digits of 123" }],
        testCases: [
          { input: "x = 123", expected: "321", inputData: "123" },
          { input: "x = -123", expected: "-321", inputData: "-123" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function reverse(x) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def reverse(x):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int reverse(int x) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
    ]
  },
  {
    id: 26,
    companyName: "Apple",
    logoSrc: "/apple.png",
    roundType: "Coding Round",
    questions: 3,
    duration: "90 min",
    successRate: "19%",
    attempts: 29876,
    description: "Dynamic programming and string manipulation problems.",
    reviews: [{ name: "David Brown", imageSrc: "https://randomuser.me/api/portraits/men/45.jpg", text: "Apple emphasizes clean code and efficient solutions." }],
    questionsList: [
      {
        time: 35,
        title: "Longest Palindromic Substring",
        difficulty: "Medium",
        description: "Given a string s, return the longest palindromic substring in s.",
        constraints: ["1 <= s.length <= 1000", "s consist of only digits and English letters"],
        examples: [{ input: 's = "babad"', output: '"bab"', explanation: '"aba" is also a valid answer.' }],
        testCases: [
          { input: 's = "babad"', expected: '"bab"', inputData: "babad" },
          { input: 's = "cbbd"', expected: '"bb"', inputData: "cbbd" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function longestPalindrome(s) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def longestPalindrome(s):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public String longestPalindrome(String s) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
    ]
  },
  {
    id: 27,
    companyName: "Apple",
    logoSrc: "/apple.png",
    roundType: "Coding Round",
    questions: 3,
    duration: "90 min",
    successRate: "17%",
    attempts: 38945,
    description: "Advanced data structures and algorithm optimization.",
    reviews: [{ name: "Emma Davis", imageSrc: "https://randomuser.me/api/portraits/women/40.jpg", text: "Apple challenges require deep algorithmic understanding." }],
    questionsList: [
      {
        time: 35,
        title: "Spiral Matrix",
        difficulty: "Medium",
        description: "Given an m x n matrix, return all elements of the matrix in spiral order.",
        constraints: ["m == matrix.length", "n == matrix[i].length", "1 <= m, n <= 10"],
        examples: [{ input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[1,2,3,6,9,8,7,4,5]", explanation: "Return elements in spiral order." }],
        testCases: [
          { input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", expected: "[1,2,3,6,9,8,7,4,5]", inputData: "[[1,2,3],[4,5,6],[7,8,9]]" },
          { input: "matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]", expected: "[1,2,3,4,8,12,11,10,9,5,6,7]", inputData: "[[1,2,3,4],[5,6,7,8],[9,10,11,12]]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function spiralOrder(matrix) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def spiralOrder(matrix):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public List<Integer> spiralOrder(int[][] matrix) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
    ]
  },
  {
    id: 28,
    companyName: "Uber",
    logoSrc: "/uber.png",
    roundType: "Coding Round",
    questions: 3,
    duration: "90 min",
    successRate: "18%",
    attempts: 42567,
    description: "High-frequency problems focusing on arrays and optimization.",
    reviews: [{ name: "James Wilson", imageSrc: "https://randomuser.me/api/portraits/men/50.jpg", text: "Uber focuses on practical problem-solving skills." }],
    questionsList: [
      {
        time: 30,
        title: "Two Sum",
        difficulty: "Easy",
        description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
        constraints: ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9", "Only one valid answer exists"],
        examples: [{ input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]." }],
        testCases: [
          { input: "nums = [2,7,11,15], target = 9", expected: "[0,1]", inputData: "[2,7,11,15]\n9" },
          { input: "nums = [3,2,4], target = 6", expected: "[1,2]", inputData: "[3,2,4]\n6" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function twoSum(nums, target) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def twoSum(nums, target):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 35,
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        description: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
        constraints: ["1 <= prices.length <= 10^5", "0 <= prices[i] <= 10^4"],
        examples: [{ input: "prices = [7,1,5,3,6,4]", output: "5", explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5." }],
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
        time: 25,
        title: "Word Search",
        difficulty: "Medium",
        description: "Given an m x n grid of characters board and a string word, return true if word exists in the grid.",
        constraints: ["m == board.length", "n = board[i].length", "1 <= m, n <= 6"],
        examples: [{ input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: "true", explanation: "The word exists in the grid." }],
        testCases: [
          { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', expected: "true", inputData: '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\nABCCED' },
          { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"', expected: "true", inputData: '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\nSEE' }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function exist(board, word) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def exist(board, word):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public boolean exist(char[][] board, String word) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
    ]
  },
  {
    id: 29,
    companyName: "Uber",
    logoSrc: "/uber.png",
    roundType: "Coding Round",
    questions: 3,
    duration: "90 min",
    successRate: "16%",
    attempts: 35789,
    description: "Advanced string and matrix manipulation problems.",
    reviews: [{ name: "Maria Garcia", imageSrc: "https://randomuser.me/api/portraits/women/45.jpg", text: "Uber tests algorithmic thinking with real-world scenarios." }],
    questionsList: [
      {
        time: 40,
        title: "Text Justification",
        difficulty: "Hard",
        description: "Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.",
        constraints: ["1 <= words.length <= 300", "1 <= words[i].length <= 20", "1 <= maxWidth <= 100"],
        examples: [{ input: 'words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16', output: '["This    is    an","example  of text","justification.  "]', explanation: "Format text with proper justification." }],
        testCases: [
          { input: 'words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16', expected: '["This    is    an","example  of text","justification.  "]', inputData: '["This", "is", "an", "example", "of", "text", "justification."]\n16' },
          { input: 'words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16', expected: '["What   must   be","acknowledgment  ","shall be        "]', inputData: '["What","must","be","acknowledgment","shall","be"]\n16' }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function fullJustify(words, maxWidth) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def fullJustify(words, maxWidth):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public List<String> fullJustify(String[] words, int maxWidth) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 30,
        title: "Spiral Matrix",
        difficulty: "Medium",
        description: "Given an m x n matrix, return all elements of the matrix in spiral order.",
        constraints: ["m == matrix.length", "n == matrix[i].length", "1 <= m, n <= 10"],
        examples: [{ input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[1,2,3,6,9,8,7,4,5]", explanation: "Return elements in spiral order." }],
        testCases: [
          { input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", expected: "[1,2,3,6,9,8,7,4,5]", inputData: "[[1,2,3],[4,5,6],[7,8,9]]" },
          { input: "matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]", expected: "[1,2,3,4,8,12,11,10,9,5,6,7]", inputData: "[[1,2,3,4],[5,6,7,8],[9,10,11,12]]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function spiralOrder(matrix) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def spiralOrder(matrix):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public List<Integer> spiralOrder(int[][] matrix) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 20,
        title: "Valid Sudoku",
        difficulty: "Medium",
        description: "Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules.",
        constraints: ["board.length == 9", "board[i].length == 9", "board[i][j] is a digit 1-9 or '.'"],
        examples: [{ input: "board = valid sudoku", output: "true", explanation: "The Sudoku board is valid." }],
        testCases: [
          { input: "board = valid sudoku", expected: "true", inputData: "valid_sudoku_input" },
          { input: "board = invalid sudoku", expected: "false", inputData: "invalid_sudoku_input" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function isValidSudoku(board) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def isValidSudoku(board):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public boolean isValidSudoku(char[][] board) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
    ]
  },
  {
    id: 30,
    companyName: "Uber",
    logoSrc: "/uber.png",
    roundType: "Coding Round",
    questions: 3,
    duration: "90 min",
    successRate: "20%",
    attempts: 28945,
    description: "String and array algorithms with optimization focus.",
    reviews: [{ name: "Robert Chen", imageSrc: "https://randomuser.me/api/portraits/men/55.jpg", text: "Uber emphasizes clean solutions and edge case handling." }],
    questionsList: [
      {
        time: 35,
        title: "Group Anagrams",
        difficulty: "Medium",
        description: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
        constraints: ["1 <= strs.length <= 10^4", "0 <= strs[i].length <= 100", "strs[i] consists of lowercase English letters"],
        examples: [{ input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]', explanation: "Group anagrams together." }],
        testCases: [
          { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', expected: '[["bat"],["nat","tan"],["ate","eat","tea"]]', inputData: '["eat","tea","tan","ate","nat","bat"]' },
          { input: 'strs = [""]', expected: '[[""]]', inputData: '[""]' }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function groupAnagrams(strs) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def groupAnagrams(strs):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 30,
        title: "Roman to Integer",
        difficulty: "Easy",
        description: "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M. Given a roman numeral, convert it to an integer.",
        constraints: ["1 <= s.length <= 15", "s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M')"],
        examples: [{ input: 's = "III"', output: "3", explanation: "III = 3." }],
        testCases: [
          { input: 's = "III"', expected: "3", inputData: "III" },
          { input: 's = "LVIII"', expected: "58", inputData: "LVIII" },
          { input: 's = "MCMXC"', expected: "1990", inputData: "MCMXC" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function romanToInt(s) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def romanToInt(s):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int romanToInt(String s) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 25,
        title: "Letter Combinations of a Phone Number",
        difficulty: "Medium",
        description: "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.",
        constraints: ["0 <= digits.length <= 4", "digits[i] is a digit in the range ['2', '9']"],
        examples: [{ input: 'digits = "23"', output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]', explanation: "All possible letter combinations." }],
        testCases: [
          { input: 'digits = "23"', expected: '["ad","ae","af","bd","be","bf","cd","ce","cf"]', inputData: "23" },
          { input: 'digits = ""', expected: "[]", inputData: "" },
          { input: 'digits = "2"', expected: '["a","b","c"]', inputData: "2" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function letterCombinations(digits) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def letterCombinations(digits):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public List<String> letterCombinations(String digits) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
    ]
  },
  {
    id: 31,
    companyName: "Uber",
    logoSrc: "/uber.png",
    roundType: "Coding Round",
    questions: 3,
    duration: "90 min",
    successRate: "14%",
    attempts: 41256,
    description: "Advanced algorithms with dynamic programming and backtracking.",
    reviews: [{ name: "Jennifer Lee", imageSrc: "https://randomuser.me/api/portraits/women/50.jpg", text: "Uber challenges require strong algorithmic foundations." }],
    questionsList: [
      {
        time: 40,
        title: "Generate Parentheses",
        difficulty: "Medium",
        description: "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
        constraints: ["1 <= n <= 8"],
        examples: [{ input: "n = 3", output: '["((()))","(()())","(())()","()(())","()()()"]', explanation: "All valid combinations of 3 pairs of parentheses." }],
        testCases: [
          { input: "n = 3", expected: '["((()))","(()())","(())()","()(())","()()()"]', inputData: "3" },
          { input: "n = 1", expected: '["()"]', inputData: "1" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function generateParenthesis(n) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def generateParenthesis(n):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public List<String> generateParenthesis(int n) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 35,
        title: "Minimum Window Substring",
        difficulty: "Hard",
        description: "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window.",
        constraints: ["m == s.length", "n == t.length", "1 <= m, n <= 10^5"],
        examples: [{ input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"', explanation: 'The minimum window substring "BANC" includes all characters of t.' }],
        testCases: [
          { input: 's = "ADOBECODEBANC", t = "ABC"', expected: '"BANC"', inputData: "ADOBECODEBANC\nABC" },
          { input: 's = "a", t = "a"', expected: '"a"', inputData: "a\na" },
          { input: 's = "a", t = "aa"', expected: '""', inputData: "a\naa" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function minWindow(s, t) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def minWindow(s, t):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public String minWindow(String s, String t) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 25,
        title: "Longest Common Prefix",
        difficulty: "Easy",
        description: "Write a function to find the longest common prefix string amongst an array of strings.",
        constraints: ["1 <= strs.length <= 200", "0 <= strs[i].length <= 200", "strs[i] consists of only lowercase English letters"],
        examples: [{ input: 'strs = ["flower","flow","flight"]', output: '"fl"', explanation: 'The longest common prefix is "fl"' }],
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
    id: 32,
    companyName: "Uber",
    logoSrc: "/uber.png",
    roundType: "Coding Round",
    questions: 3,
    duration: "90 min",
    successRate: "22%",
    attempts: 33678,
    description: "Linked list and mathematical problem solving.",
    reviews: [{ name: "Kevin Brown", imageSrc: "https://randomuser.me/api/portraits/men/60.jpg", text: "Uber tests practical coding skills with real scenarios." }],
    questionsList: [
      {
        time: 35,
        title: "Add Two Numbers",
        difficulty: "Medium",
        description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit.",
        constraints: ["The number of nodes in each linked list is in the range [1, 100]", "0 <= Node.val <= 9"],
        examples: [{ input: "l1 = [2,4,3], l2 = [5,6,4]", output: "[7,0,8]", explanation: "342 + 465 = 807." }],
        testCases: [
          { input: "l1 = [2,4,3], l2 = [5,6,4]", expected: "[7,0,8]", inputData: "[2,4,3]\n[5,6,4]" },
          { input: "l1 = [0], l2 = [0]", expected: "[0]", inputData: "[0]\n[0]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function addTwoNumbers(l1, l2) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def addTwoNumbers(l1, l2):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 30,
        title: "Merge Sorted Array",
        difficulty: "Easy",
        description: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.",
        constraints: ["nums1.length == m + n", "nums2.length == n", "0 <= m, n <= 200"],
        examples: [{ input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", output: "[1,2,2,3,5,6]", explanation: "The arrays we are merging are [1,2,3] and [2,5,6]." }],
        testCases: [
          { input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", expected: "[1,2,2,3,5,6]", inputData: "[1,2,3,0,0,0]\n3\n[2,5,6]\n3" },
          { input: "nums1 = [1], m = 1, nums2 = [], n = 0", expected: "[1]", inputData: "[1]\n1\n[]\n0" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function merge(nums1, m, nums2, n) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def merge(nums1, m, nums2, n):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 25,
        title: "Word Break",
        difficulty: "Medium",
        description: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
        constraints: ["1 <= s.length <= 300", "1 <= wordDict.length <= 1000", "1 <= wordDict[i].length <= 20"],
        examples: [{ input: 's = "leetcode", wordDict = ["leet","code"]', output: "true", explanation: '"leetcode" can be segmented as "leet code"' }],
        testCases: [
          { input: 's = "leetcode", wordDict = ["leet","code"]', expected: "true", inputData: "leetcode\n[\"leet\",\"code\"]" },
          { input: 's = "applepenapple", wordDict = ["apple","pen"]', expected: "true", inputData: "applepenapple\n[\"apple\",\"pen\"]" },
          { input: 's = "catsandog", wordDict = ["cats","dog","sand","and","cat"]', expected: "false", inputData: "catsandog\n[\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function wordBreak(s, wordDict) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def wordBreak(s, wordDict):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public boolean wordBreak(String s, List<String> wordDict) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
    ]
  },
  {
    id: 33,
    companyName: "Uber",
    logoSrc: "/uber.png",
    roundType: "Coding Round",
    questions: 3,
    duration: "90 min",
    successRate: "19%",
    attempts: 37890,
    description: "Advanced data structures and optimization problems.",
    reviews: [{ name: "Amanda Davis", imageSrc: "https://randomuser.me/api/portraits/women/55.jpg", text: "Uber focuses on scalable solutions and clean code." }],
    questionsList: [
      {
        time: 40,
        title: "Trapping Rain Water",
        difficulty: "Hard",
        description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
        constraints: ["n == height.length", "1 <= n <= 2 * 10^4", "0 <= height[i] <= 3 * 10^4"],
        examples: [{ input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6", explanation: "6 units of rain water are being trapped." }],
        testCases: [
          { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", expected: "6", inputData: "[0,1,0,2,1,0,1,3,2,1,2,1]" },
          { input: "height = [4,2,0,3,2,5]", expected: "9", inputData: "[4,2,0,3,2,5]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function trap(height) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def trap(height):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int trap(int[] height) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 30,
        title: "Rotate Image",
        difficulty: "Medium",
        description: "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).",
        constraints: ["n == matrix.length == matrix[i].length", "1 <= n <= 20", "-1000 <= matrix[i][j] <= 1000"],
        examples: [{ input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[[7,4,1],[8,5,2],[9,6,3]]", explanation: "Rotate the matrix 90 degrees clockwise." }],
        testCases: [
          { input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", expected: "[[7,4,1],[8,5,2],[9,6,3]]", inputData: "[[1,2,3],[4,5,6],[7,8,9]]" },
          { input: "matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]", expected: "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]", inputData: "[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function rotate(matrix) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def rotate(matrix):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public void rotate(int[][] matrix) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 20,
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
        description: "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k.",
        constraints: ["1 <= nums.length <= 5000", "-10^4 <= nums[i] <= 10^4", "All values of nums are unique"],
        examples: [{ input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4", explanation: "The target 0 is at index 4." }],
        testCases: [
          { input: "nums = [4,5,6,7,0,1,2], target = 0", expected: "4", inputData: "[4,5,6,7,0,1,2]\n0" },
          { input: "nums = [4,5,6,7,0,1,2], target = 3", expected: "-1", inputData: "[4,5,6,7,0,1,2]\n3" },
          { input: "nums = [1], target = 0", expected: "-1", inputData: "[1]\n0" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function search(nums, target) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def search(nums, target):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int search(int[] nums, int target) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
    ]
  },
  {
    id: 34,
    companyName: "Flipkart",
    logoSrc: "/flipkart.png",
    roundType: "Coding Round",
    questions: 7,
    duration: "120 min",
    successRate: "45%",
    attempts: 15000,
    description: "Hard level algorithmic problems covering advanced data structures.",
    reviews: [{ name: "Alex Chen", imageSrc: "https://randomuser.me/api/portraits/men/32.jpg", text: "Challenging problems that test deep algorithmic knowledge." }],
    questionsList: [
      {
        time: 45,
        title: "Smallest Range Covering Elements from K Lists",
        difficulty: "Hard",
        description: "You have k lists of sorted integers in non-decreasing order. Find the smallest range that includes at least one number from each of the k lists.",
        constraints: ["nums.length == k", "1 <= k <= 3500", "1 <= nums[i].length <= 50"],
        examples: [{ input: "nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]", output: "[20,24]", explanation: "List 1: [4, 10, 15, 24,26], 24 is in range [20,24]. List 2: [0, 9, 12, 20], 20 is in range [20,24]. List 3: [5, 18, 22, 30], 22 is in range [20,24]." }],
        testCases: [
          { input: "nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]", expected: "[20,24]", inputData: "[[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]" },
          { input: "nums = [[1,2,3],[1,2,3],[1,2,3]]", expected: "[1,1]", inputData: "[[1,2,3],[1,2,3],[1,2,3]]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function smallestRange(nums) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def smallestRange(nums):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int[] smallestRange(List<List<Integer>> nums) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 35,
        title: "Shortest Bridge",
        difficulty: "Medium",
        description: "You are given an n x n binary matrix grid where 1 represents land and 0 represents water. An island is a 4-directionally connected group of 1's. There are exactly two islands in grid. Return the smallest number of 0's you must flip to connect the two islands.",
        constraints: ["n == grid.length == grid[i].length", "2 <= n <= 100", "grid[i][j] is either 0 or 1"],
        examples: [{ input: "grid = [[0,1],[1,0]]", output: "1", explanation: "We can connect the two islands by changing one 0 to 1." }],
        testCases: [
          { input: "grid = [[0,1],[1,0]]", expected: "1", inputData: "[[0,1],[1,0]]" },
          { input: "grid = [[0,1,0],[0,0,0],[0,0,1]]", expected: "2", inputData: "[[0,1,0],[0,0,0],[0,0,1]]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function shortestBridge(grid) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def shortestBridge(grid):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int shortestBridge(int[][] grid) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 30,
        title: "Maximum Points You Can Obtain from Cards",
        difficulty: "Medium",
        description: "There are several cards arranged in a row, and each card has an associated number of points. The points are given in the integer array cardPoints. In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards. Your score is the sum of the points of the cards you have taken. Given the integer array cardPoints and the integer k, return the maximum score you can obtain.",
        constraints: ["1 <= cardPoints.length <= 10^5", "1 <= cardPoints[i] <= 10^4", "1 <= k <= cardPoints.length"],
        examples: [{ input: "cardPoints = [1,2,3,4,5,6,1], k = 3", output: "12", explanation: "After the first step, your score will always be 1. However, choosing the rightmost card first will maximize your total score. The optimal strategy is to take the three cards on the right, giving a final score of 1 + 6 + 5 = 12." }],
        testCases: [
          { input: "cardPoints = [1,2,3,4,5,6,1], k = 3", expected: "12", inputData: "[1,2,3,4,5,6,1]\n3" },
          { input: "cardPoints = [2,2,2], k = 2", expected: "4", inputData: "[2,2,2]\n2" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function maxScore(cardPoints, k) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def maxScore(cardPoints, k):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int maxScore(int[] cardPoints, int k) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 25,
        title: "Two Sum",
        difficulty: "Easy",
        description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
        constraints: ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9", "-10^9 <= target <= 10^9"],
        examples: [{ input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]." }],
        testCases: [
          { input: "nums = [2,7,11,15], target = 9", expected: "[0,1]", inputData: "[2,7,11,15]\n9" },
          { input: "nums = [3,2,4], target = 6", expected: "[1,2]", inputData: "[3,2,4]\n6" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function twoSum(nums, target) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def twoSum(nums, target):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 40,
        title: "Binary Tree Maximum Path Sum",
        difficulty: "Hard",
        description: "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. The path sum of a path is the sum of the node's values in the path.",
        constraints: ["The number of nodes in the tree is in the range [1, 3 * 10^4]", "-1000 <= Node.val <= 1000"],
        examples: [{ input: "root = [1,2,3]", output: "6", explanation: "The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6." }],
        testCases: [
          { input: "root = [1,2,3]", expected: "6", inputData: "[1,2,3]" },
          { input: "root = [-10,9,20,null,null,15,7]", expected: "42", inputData: "[-10,9,20,null,null,15,7]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function maxPathSum(root) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def maxPathSum(root):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int maxPathSum(TreeNode root) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 35,
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
        constraints: ["nums1.length == m", "nums2.length == n", "0 <= m <= 1000", "0 <= n <= 1000"],
        examples: [{ input: "nums1 = [1,3], nums2 = [2]", output: "2.00000", explanation: "merged array = [1,2,3] and median is 2." }],
        testCases: [
          { input: "nums1 = [1,3], nums2 = [2]", expected: "2.00000", inputData: "[1,3]\n[2]" },
          { input: "nums1 = [1,2], nums2 = [3,4]", expected: "2.50000", inputData: "[1,2]\n[3,4]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function findMedianSortedArrays(nums1, nums2) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def findMedianSortedArrays(nums1, nums2):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
    ]
  },
  {
    id: 35,
    companyName: "flipkart",
    logoSrc: "/flipkart.png",
    roundType: "Coding Round",
    questions: 4,
    duration: "120 min",
    successRate: "45%",
    attempts: 15000,
    description: "Hard level algorithmic problems covering advanced data structures.",
    reviews: [{ name: "Alex Chen", imageSrc: "https://randomuser.me/api/portraits/men/32.jpg", text: "Challenging problems that test deep algorithmic knowledge." }],
    questionsList: [
      {
        time: 30,
        title: "Container With Most Water",
        difficulty: "Medium",
        description: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container that can hold the most water.",
        constraints: ["n == height.length", "2 <= n <= 10^5", "0 <= height[i] <= 10^4"],
        examples: [{ input: "height = [1,8,6,2,5,4,8,3,7]", output: "49", explanation: "The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49." }],
        testCases: [
          { input: "height = [1,8,6,2,5,4,8,3,7]", expected: "49", inputData: "[1,8,6,2,5,4,8,3,7]" },
          { input: "height = [1,1]", expected: "1", inputData: "[1,1]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function maxArea(height) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def maxArea(height):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int maxArea(int[] height) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 35,
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        description: "Given a string s, find the length of the longest substring without repeating characters.",
        constraints: ["0 <= s.length <= 5 * 10^4", "s consists of English letters, digits, symbols and spaces."],
        examples: [{ input: "s = 'abcabcbb'", output: "3", explanation: "The answer is 'abc', with the length of 3." }],
        testCases: [
          { input: "s = 'abcabcbb'", expected: "3", inputData: "abcabcbb" },
          { input: "s = 'bbbbb'", expected: "1", inputData: "bbbbb" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function lengthOfLongestSubstring(s) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def lengthOfLongestSubstring(s):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 30,
        title: "Number of Islands",
        difficulty: "Medium",
        description: "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
        constraints: ["m == grid.length", "n == grid[i].length", "1 <= m, n <= 300"],
        examples: [{ input: "grid = [['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']]", output: "1", explanation: "There is 1 island." }],
        testCases: [
          { input: "grid = [['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']]", expected: "1", inputData: "[['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']]" },
          { input: "grid = [['1','1','0','0','0'],['1','1','0','0','0'],['0','0','1','0','0'],['0','0','0','1','1']]", expected: "3", inputData: "[['1','1','0','0','0'],['1','1','0','0','0'],['0','0','1','0','0'],['0','0','0','1','1']]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function numIslands(grid) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def numIslands(grid):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int numIslands(char[][] grid) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 25,
        title: "Product of Array Except Self",
        difficulty: "Medium",
        description: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
        constraints: ["2 <= nums.length <= 10^5", "-30 <= nums[i] <= 30"],
        examples: [{ input: "nums = [1,2,3,4]", output: "[24,12,8,6]", explanation: "answer[0] = 2*3*4 = 24, answer[1] = 1*3*4 = 12, answer[2] = 1*2*4 = 8, answer[3] = 1*2*3 = 6" }],
        testCases: [
          { input: "nums = [1,2,3,4]", expected: "[24,12,8,6]", inputData: "[1,2,3,4]" },
          { input: "nums = [-1,1,0,-3,3]", expected: "[0,0,9,0,0]", inputData: "[-1,1,0,-3,3]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function productExceptSelf(nums) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def maxScore(cardPoints, k):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int maxScore(int[] cardPoints, int k) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 25,
        title: "Container With Most Water",
        difficulty: "Medium",
        description: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container that can hold the most water.",
        constraints: ["n == height.length", "2 <= n <= 10^5", "0 <= height[i] <= 10^4"],
        examples: [{ input: "height = [1,8,6,2,5,4,8,3,7]", output: "49", explanation: "The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49." }],
        testCases: [
          { input: "height = [1,8,6,2,5,4,8,3,7]", expected: "49", inputData: "[1,8,6,2,5,4,8,3,7]" },
          { input: "height = [1,1]", expected: "1", inputData: "[1,1]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function maxArea(height) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def maxArea(height):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int maxArea(int[] height) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
    ]
  },
  {
    id: 36,
    companyName: "Amazon",
    logoSrc: "/amazon.png",
    roundType: "Coding Round",
    questions: 4,
    duration: "90 min",
    successRate: "42%",
    attempts: 25000,
    description: "High-frequency Amazon coding problems focusing on arrays, strings, and algorithms.",
    reviews: [{ name: "Sarah Johnson", imageSrc: "https://randomuser.me/api/portraits/women/42.jpg", text: "Amazon interviews focus on practical problem-solving and clean code implementation." }],
    questionsList: [
      {
        time: 20,
        title: "Two Sum",
        difficulty: "Easy",
        description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
        constraints: ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9", "-10^9 <= target <= 10^9"],
        examples: [{ input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]." }],
        testCases: [
          { input: "nums = [2,7,11,15], target = 9", expected: "[0,1]", inputData: "[2,7,11,15]\n9" },
          { input: "nums = [3,2,4], target = 6", expected: "[1,2]", inputData: "[3,2,4]\n6" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function twoSum(nums, target) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def twoSum(nums, target):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 25,
        title: "Merge Sorted Array",
        difficulty: "Easy",
        description: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.",
        constraints: ["nums1.length == m + n", "nums2.length == n", "0 <= m, n <= 200"],
        examples: [{ input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", output: "[1,2,2,3,5,6]", explanation: "The arrays we are merging are [1,2,3] and [2,5,6]." }],
        testCases: [
          { input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", expected: "[1,2,2,3,5,6]", inputData: "[1,2,3,0,0,0]\n3\n[2,5,6]\n3" },
          { input: "nums1 = [1], m = 1, nums2 = [], n = 0", expected: "[1]", inputData: "[1]\n1\n[]\n0" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function merge(nums1, m, nums2, n) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def merge(nums1, m, nums2, n):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 25,
        title: "Valid Parentheses",
        difficulty: "Easy",
        description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
        constraints: ["1 <= s.length <= 10^4", "s consists of parentheses only '()[]{}'."],
        examples: [{ input: "s = '()'", output: "true", explanation: "The string contains valid parentheses." }],
        testCases: [
          { input: "s = '()'", expected: "true", inputData: "()" },
          { input: "s = '()[]{}'", expected: "true", inputData: "()[]{}" },
          { input: "s = '(]'", expected: "false", inputData: "(]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function isValid(s) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def isValid(s):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public boolean isValid(String s) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      },
      {
        time: 20,
        title: "Valid Sudoku",
        difficulty: "Medium",
        description: "Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules: Each row must contain the digits 1-9 without repetition, Each column must contain the digits 1-9 without repetition, Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.",
        constraints: ["board.length == 9", "board[i].length == 9", "board[i][j] is a digit 1-9 or '.'"],
        examples: [{ input: "board = [['5','3','.','.','7','.','.','.','.'],['6','.','.','1','9','5','.','.','.'],['.','9','8','.','.','.','.','6','.'],['8','.','.','.','6','.','.','.','3'],['4','.','.','8','.','3','.','.','1'],['7','.','.','.','2','.','.','.','6'],['.','6','.','.','.','.','2','8','.'],['.','.','.','4','1','9','.','.','5'],['.','.','.','.','8','.','.','7','9']]", output: "true", explanation: "The Sudoku board is valid." }],
        testCases: [
          { input: "board = [['5','3','.','.','7','.','.','.','.'],['6','.','.','1','9','5','.','.','.'],['.','9','8','.','.','.','.','6','.'],['8','.','.','.','6','.','.','.','3'],['4','.','.','8','.','3','.','.','1'],['7','.','.','.','2','.','.','.','6'],['.','6','.','.','.','.','2','8','.'],['.','.','.','4','1','9','.','.','5'],['.','.','.','.','8','.','.','7','9']]", expected: "true", inputData: "[['5','3','.','.','7','.','.','.','.'],['6','.','.','1','9','5','.','.','.'],['.','9','8','.','.','.','.','6','.'],['8','.','.','.','6','.','.','.','3'],['4','.','.','8','.','3','.','.','1'],['7','.','.','.','2','.','.','.','6'],['.','6','.','.','.','.','2','8','.'],['.','.','.','4','1','9','.','.','5'],['.','.','.','.','8','.','.','7','9']]" }
        ],
        defaultCode: [
          { language: "JavaScript", code: "function isValidSudoku(board) {\n  // Write your solution here\n  \n}" },
          { language: "Python", code: "def isValidSudoku(board):\n    # Write your solution here\n    pass" },
          { language: "Java", code: "class Solution {\n    public boolean isValidSudoku(char[][] board) {\n        // Write your solution here\n        \n    }\n}" }
        ]
      }
    ]
  },
  {
    id: 105,
    companyName: "DBMS - Part 1",
    logoSrc: "/dbms.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "DBMS basics and SQL fundamentals practice set.",
    reviews: [],
    questionsList: [
      { time: 2, topic: "DBMS", difficulty: "Easy", question: "What is the primary purpose of a Database Management System (DBMS)?", options: ["To create graphics", "To manage data in a structured way", "To connect to the internet", "To perform calculations"], correctAnswer: 1, explanation: "A DBMS stores, manages, and provides structured access to data." },
      { time: 2, topic: "DBMS", difficulty: "Easy", question: "Which of the following is a characteristic of a relational database?", options: ["Data is stored in files", "Data is stored in tables with rows and columns", "Data is stored in a hierarchy", "Data is stored in a flat format"], correctAnswer: 1, explanation: "Relational databases organize data in tables (rows and columns) with defined relationships." },
      { time: 2, topic: "SQL", difficulty: "Easy", question: "What does SQL stand for?", options: ["Structured Query Language", "Sequential Query Language", "Structured Quality Language", "Standard Query Language"], correctAnswer: 0, explanation: "SQL stands for Structured Query Language used to query and manage databases." },
      { time: 2, topic: "Keys", difficulty: "Easy", question: "What is the purpose of the primary key in a database table?", options: ["To perform calculations", "To uniquely identify each record in the table", "To store large amounts of data", "To manage user access"], correctAnswer: 1, explanation: "A primary key uniquely identifies each row in a table." },
      { time: 2, topic: "SQL", difficulty: "Easy", question: "Which of the following is used to retrieve data from a database?", options: ["UPDATE", "SELECT", "INSERT", "DELETE"], correctAnswer: 1, explanation: "SELECT is used to query and retrieve data from tables." },
      { time: 2, topic: "Keys", difficulty: "Easy", question: "What is the difference between a primary key and a foreign key?", options: ["A primary key can contain duplicates, while a foreign key cannot", "A foreign key uniquely identifies records, while a primary key does not", "A primary key uniquely identifies records in its own table, while a foreign key refers to the primary key in another table", "There is no difference"], correctAnswer: 2, explanation: "Primary keys uniquely identify rows in a table; foreign keys reference a primary key in another table to create relationships." },
      { time: 2, topic: "SQL", difficulty: "Easy", question: "Which SQL statement is used to insert a new record into a table?", options: ["INSERT INTO", "ADD RECORD", "INSERT NEW", "ADD ROW"], correctAnswer: 0, explanation: "INSERT INTO adds new rows to a table." },
      { time: 2, topic: "SQL", difficulty: "Easy", question: "What will be the result of: SELECT * FROM Customers WHERE Country = 'Germany';", options: ["It will delete records from the Customers table", "It will update records in the Customers table", "It will retrieve all records from the Customers table where the Country is 'Germany'", "It will retrieve all records from the Customers table"], correctAnswer: 2, explanation: "The WHERE clause filters rows; this select returns rows where Country equals 'Germany'." },
      { time: 2, topic: "SQL", difficulty: "Easy", question: "Consider: SELECT name, COUNT(*) FROM Employees GROUP BY name HAVING COUNT(*) > 1; What does this query do?", options: ["It retrieves names of employees and the number of times each appears, filtering only those names that appear more than once", "It deletes duplicate names from the Employees table", "It updates the count of employee names in the Employees table", "It retrieves all records from the Employees table"], correctAnswer: 0, explanation: "The query groups rows by name and returns only names with a count greater than 1." },
      { time: 2, topic: "Troubleshooting", difficulty: "Easy", question: "A user cannot retrieve specific data from a database. What is the most likely issue?", options: ["The SQL query might be incorrectly written", "The database is full", "The server is turned off", "The application is outdated"], correctAnswer: 0, explanation: "Incorrect SQL queries are a common cause of missing or unexpected results." },
      { time: 2, topic: "Performance", difficulty: "Easy", question: "A database query is taking too long to execute. Which could be the reason?", options: ["The database has too many indexes", "The query is poorly optimized", "The server has too much RAM", "The network is too fast"], correctAnswer: 1, explanation: "Poor query optimization commonly causes slow queries." },
      { time: 2, topic: "Transactions", difficulty: "Easy", question: "A database admin notices frequent deadlocks. What is a likely cause?", options: ["Improper indexing", "Concurrent transactions trying to access the same resources", "Too many indexes", "Insufficient user permissions"], correctAnswer: 1, explanation: "Deadlocks occur when concurrent transactions lock resources needed by each other." },
      { time: 2, topic: "ACID", difficulty: "Easy", question: "What do the ACID properties of a database stand for?", options: ["Atomicity, Consistency, Isolation, Durability", "Availability, Consistency, Isolation, Durability", "Atomicity, Concurrency, Integrity, Durability", "Authentication, Consistency, Isolation, Durability"], correctAnswer: 0, explanation: "ACID stands for Atomicity, Consistency, Isolation, Durability — key reliability properties of transactions." },
      { time: 2, topic: "Normalization", difficulty: "Easy", question: "What is database normalization used for?", options: ["To reduce redundancy and eliminate update anomalies", "To increase redundancy", "To make queries slower", "To store data in flat files"], correctAnswer: 0, explanation: "Normalization organizes tables to reduce redundancy and improve data integrity." },
      { time: 2, topic: "SQL", difficulty: "Easy", question: "Which SQL clause is used to combine rows from two or more tables based on a related column?", options: ["JOIN", "UNION", "WHERE", "GROUP BY"], correctAnswer: 0, explanation: "JOIN combines rows from multiple tables based on related columns." }
    ]
  },
  {
    id: 106,
    companyName: "DBMS - Part 2",
    logoSrc: "/dbms.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "SQL queries, joins, and aggregate functions.",
    reviews: [],
    questionsList: [
      { time: 2, topic: "SQL", difficulty: "Easy", question: "Which SQL clause is used to sort the result set?", options: ["ORDER BY", "GROUP BY", "SORT BY", "ARRANGE BY"], correctAnswer: 0, explanation: "ORDER BY sorts query results by one or more columns." },
      { time: 2, topic: "SQL", difficulty: "Easy", question: "Which JOIN returns all rows when there is a match in one of the tables?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"], correctAnswer: 3, explanation: "FULL OUTER JOIN returns matched and unmatched rows from both tables." },
      { time: 2, topic: "SQL", difficulty: "Easy", question: "Which aggregate function returns the average value of a numeric column?", options: ["SUM", "AVG", "COUNT", "MIN"], correctAnswer: 1, explanation: "AVG calculates the average value of a numeric column." },
      { time: 2, topic: "SQL", difficulty: "Easy", question: "What does the SQL LIKE operator do?", options: ["Performs pattern matching", "Encrypts data", "Joins tables", "Deletes rows"], correctAnswer: 0, explanation: "LIKE performs simple pattern matching with wildcards." },
      { time: 2, topic: "Views", difficulty: "Easy", question: "What is a database view?", options: ["A stored query that can be treated like a table", "A physical copy of data", "An index type", "A transaction log"], correctAnswer: 0, explanation: "A view is a virtual table defined by a query." },
      { time: 2, topic: "Indexes", difficulty: "Easy", question: "How does an index affect query performance?", options: ["Speeds up read queries, may slow down writes", "Slows down both reads and writes", "Has no effect", "Always makes writes faster"], correctAnswer: 0, explanation: "Indexes speed up reads but can slow writes due to maintenance overhead." },
      { time: 2, topic: "Transactions", difficulty: "Easy", question: "Which SQL statements are used to manage transactions?", options: ["BEGIN/END", "START/STOP", "COMMIT/ROLLBACK", "OPEN/CLOSE"], correctAnswer: 2, explanation: "COMMIT saves changes; ROLLBACK reverts changes in a transaction." },
      { time: 2, topic: "SQL", difficulty: "Easy", question: "Which command removes records from a table but keeps the table structure?", options: ["DROP", "DELETE", "TRUNCATE", "REMOVE"], correctAnswer: 1, explanation: "DELETE removes records and can be rolled back; TRUNCATE is faster but not transaction-safe in many DBMS." },
      { time: 2, topic: "SQL", difficulty: "Easy", question: "What is a stored procedure?", options: ["A compiled program outside the DB", "A reusable set of SQL statements stored in the DB", "A table index", "A backup file"], correctAnswer: 1, explanation: "Stored procedures are reusable SQL code stored in the database." },
      { time: 2, topic: "Joins", difficulty: "Easy", question: "Which JOIN returns rows that have matching values in both tables?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"], correctAnswer: 0, explanation: "INNER JOIN returns only rows with matching values in both tables." },
      { time: 2, topic: "SQL", difficulty: "Easy", question: "Which SQL command is used to change existing data in a table?", options: ["UPDATE", "MODIFY", "CHANGE", "ALTER"], correctAnswer: 0, explanation: "UPDATE modifies existing rows in a table." },
      { time: 2, topic: "Aggregate", difficulty: "Easy", question: "Which clause filters aggregated results?", options: ["WHERE", "HAVING", "FILTER", "GROUP BY"], correctAnswer: 1, explanation: "HAVING filters results after aggregation (GROUP BY)." },
      { time: 2, topic: "SQL", difficulty: "Easy", question: "Which command adds a new column to an existing table?", options: ["ALTER TABLE ADD", "ADD COLUMN", "MODIFY TABLE", "INSERT COLUMN"], correctAnswer: 0, explanation: "ALTER TABLE ... ADD COLUMN is used to add new columns." },
      { time: 2, topic: "Normalization", difficulty: "Easy", question: "Which normal form eliminates repeating groups?", options: ["1NF", "2NF", "3NF", "BCNF"], correctAnswer: 0, explanation: "First Normal Form (1NF) requires that each column contains atomic values (no repeating groups)." },
      { time: 2, topic: "SQL", difficulty: "Easy", question: "What does the UNION operator do?", options: ["Combines result sets from multiple SELECTs removing duplicates", "Joins two tables", "Creates a backup", "Indexes a column"], correctAnswer: 0, explanation: "UNION merges results from multiple SELECT queries and removes duplicates by default." }
    ]
  },
  {
    id: 107,
    companyName: "DBMS - Part 3",
    logoSrc: "/dbms.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "DBMS performance, transactions, and administration.",
    reviews: [],
    questionsList: [
      { time: 2, topic: "Performance", difficulty: "Easy", question: "What is the primary purpose of an index in a database?", options: ["To speed up data retrieval", "To encrypt data", "To back up data", "To normalize tables"], correctAnswer: 0, explanation: "Indexes speed up searches on columns but require additional storage and maintenance." },
      { time: 2, topic: "Replication", difficulty: "Easy", question: "What is database replication used for?", options: ["To copy data across multiple servers for redundancy and scalability", "To encrypt backups", "To speed up local writes", "To remove duplicates"], correctAnswer: 0, explanation: "Replication copies data to multiple servers to improve availability and fault tolerance." },
      { time: 2, topic: "Backup", difficulty: "Easy", question: "Which of the following is a common backup strategy?", options: ["Full + Incremental backups", "Only full backups every day", "No backups", "Manual copy of files"], correctAnswer: 0, explanation: "Full + incremental is a common efficient backup strategy." },
      { time: 2, topic: "Isolation", difficulty: "Easy", question: "Which transaction isolation level prevents dirty reads?", options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"], correctAnswer: 1, explanation: "Read Committed ensures a transaction cannot read data written by another uncommitted transaction." },
      { time: 2, topic: "Sharding", difficulty: "Easy", question: "What is database sharding?", options: ["Splitting a database horizontally across multiple servers", "Encrypting a database", "Merging databases", "Creating backups"], correctAnswer: 0, explanation: "Sharding partitions data across servers for scalability." },
      { time: 2, topic: "NoSQL", difficulty: "Easy", question: "Which of the following is a primary advantage of NoSQL databases?", options: ["Flexible schema and horizontal scalability", "Strict ACID compliance", "Better for small relational datasets", "Uses SQL by default"], correctAnswer: 0, explanation: "NoSQL systems often offer flexible schemas and easy horizontal scalability." },
      { time: 2, topic: "Constraints", difficulty: "Easy", question: "Which constraint ensures unique values in a column?", options: ["UNIQUE", "NOT NULL", "CHECK", "DEFAULT"], correctAnswer: 0, explanation: "UNIQUE constraint enforces unique values in a column." },
      { time: 2, topic: "Security", difficulty: "Easy", question: "Which practice improves database security?", options: ["Use least-privilege access controls", "Allow everyone full access", "Store passwords in plain text", "Disable auditing"], correctAnswer: 0, explanation: "Least-privilege access reduces attack surface and improves security." },
      { time: 2, topic: "Transactions", difficulty: "Easy", question: "What does ROLLBACK do in a transaction?", options: ["Saves changes", "Reverts changes made during the transaction", "Deletes the table", "Commits partially"], correctAnswer: 1, explanation: "ROLLBACK undoes uncommitted changes made in a transaction." },
      { time: 2, topic: "Monitoring", difficulty: "Easy", question: "Which metric is useful to detect slow queries?", options: ["Query execution time", "CPU serial number", "Disk brand", "Network cable type"], correctAnswer: 0, explanation: "Monitoring query execution times helps identify slow or expensive queries." },
      { time: 2, topic: "Optimization", difficulty: "Easy", question: "Which index type is commonly used to speed up equality searches?", options: ["B-Tree index", "Full-text index", "Bitmap index", "Hash index"], correctAnswer: 0, explanation: "B-Tree indexes are general-purpose and efficient for many lookups including equality and range queries." },
      { time: 2, topic: "Admin", difficulty: "Easy", question: "What is the purpose of a database transaction log?", options: ["Record changes to support recovery and rollback", "Store images", "Encrypt data", "Manage user passwords"], correctAnswer: 0, explanation: "Transaction logs help recover databases to a consistent state after failures." },
      { time: 2, topic: "Replication", difficulty: "Easy", question: "What is eventual consistency?", options: ["All replicas are immediately identical", "Replicas converge to the same state over time", "Data is never consistent", "Replicas are always inconsistent"], correctAnswer: 1, explanation: "Eventual consistency means replicas will converge to the same state eventually, common in distributed systems." },
      { time: 2, topic: "Scaling", difficulty: "Easy", question: "What is vertical scaling?", options: ["Adding more CPU/RAM to a single server", "Adding more servers", "Partitioning data", "Backups"], correctAnswer: 0, explanation: "Vertical scaling increases resources on a single machine (scale-up)." },
      { time: 2, topic: "Indexing", difficulty: "Easy", question: "When might you avoid creating an index on a column?", options: ["When column has very low cardinality and frequent writes", "When column is frequently searched", "When column is part of primary key", "When column is used in joins"], correctAnswer: 0, explanation: "Indexes on low-cardinality columns with frequent writes can harm performance due to maintenance overhead." }
    ]
  },
  {
    id: 108,
    companyName: "DBMS - Part 4",
    logoSrc: "/dbms.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "DBMS data modeling, indexing, and query analysis.",
    reviews: [],
    questionsList: [
      { time: 2, topic: "Data Modeling", difficulty: "Easy", question: "What is an ER diagram primarily used for?", options: ["To model entities and relationships", "To execute queries", "To create backups", "To monitor performance"], correctAnswer: 0, explanation: "ER diagrams model entities, attributes and relationships in database design." },
      { time: 2, topic: "Keys", difficulty: "Easy", question: "What is a composite key?", options: ["A key made of multiple columns that uniquely identifies a row", "A single-column primary key", "A key used for encryption", "A temporary key"], correctAnswer: 0, explanation: "A composite key combines multiple columns to uniquely identify a record." },
      { time: 2, topic: "Normalization", difficulty: "Easy", question: "Which normal form removes transitive dependencies?", options: ["1NF", "2NF", "3NF", "BCNF"], correctAnswer: 2, explanation: "Third Normal Form (3NF) removes transitive dependencies." },
      { time: 2, topic: "Indexes", difficulty: "Easy", question: "What is a covering index?", options: ["An index that contains all columns needed by a query", "An index used for backups", "An index only on primary key", "A type of full-text index"], correctAnswer: 0, explanation: "A covering index includes all columns required to satisfy a query without touching the table." },
      { time: 2, topic: "Query Plan", difficulty: "Easy", question: "Which command helps you see how a query will be executed?", options: ["EXPLAIN", "PLAN", "DESCRIBE", "SHOW PLAN"], correctAnswer: 0, explanation: "EXPLAIN (or EXPLAIN ANALYZE) shows the query execution plan used by the DBMS." },
      { time: 2, topic: "Performance", difficulty: "Easy", question: "What effect does a covering index have on a query?", options: ["May eliminate table access improving read performance", "Always slows down reads", "Removes the need for backups", "Makes writes faster"], correctAnswer: 0, explanation: "Covering indexes can speed reads by avoiding additional table lookups." },
      { time: 2, topic: "Storage", difficulty: "Easy", question: "What is the role of a storage engine like InnoDB?", options: ["Manage how data is stored and retrieved", "Translate SQL to English", "Compress backups", "Schedule jobs"], correctAnswer: 0, explanation: "Storage engines handle low-level storage, transactions and locking behavior." },
      { time: 2, topic: "Constraints", difficulty: "Easy", question: "Which constraint ensures column values are not null?", options: ["NOT NULL", "UNIQUE", "CHECK", "FOREIGN KEY"], correctAnswer: 0, explanation: "NOT NULL enforces that a column cannot contain NULL values." },
      { time: 2, topic: "Query", difficulty: "Easy", question: "What does EXPLAIN ANALYZE do?", options: ["Shows the execution plan and runs the query to give actual timings", "Deletes the query history", "Optimizes the database", "Runs a security scan"], correctAnswer: 0, explanation: "EXPLAIN ANALYZE shows the plan and actual execution metrics for a query." },
      { time: 2, topic: "Indexes", difficulty: "Easy", question: "Which index type is generally best for range queries?", options: ["B-Tree", "Hash", "Bitmap", "Full-text"], correctAnswer: 0, explanation: "B-Tree indexes efficiently handle ordered and range queries." },
      { time: 2, topic: "Partitioning", difficulty: "Easy", question: "Which partitioning strategy spreads rows based on a value range?", options: ["Range partitioning", "Hash partitioning", "List partitioning", "Round-robin partitioning"], correctAnswer: 0, explanation: "Range partitioning divides data into partitions by value ranges." },
      { time: 2, topic: "Maintenance", difficulty: "Easy", question: "What is table vacuuming or compaction used for?", options: ["Reclaim space and optimize storage", "Add new indexes", "Replicate data", "Encrypt tables"], correctAnswer: 0, explanation: "Vacuum/compaction reclaims storage space and can improve performance." },
      { time: 2, topic: "Monitoring", difficulty: "Easy", question: "Which metric helps detect long-running queries?", options: ["Query duration", "Disk brand", "Row count", "Column width"], correctAnswer: 0, explanation: "Monitoring query duration helps spot slow-running queries." },
      { time: 2, topic: "Security", difficulty: "Easy", question: "What is least-privilege access?", options: ["Granting minimum required permissions to users", "Giving everyone admin rights", "Allowing anonymous access", "Using default passwords"], correctAnswer: 0, explanation: "Least-privilege improves security by limiting access to necessary privileges only." },
      { time: 2, topic: "Backups", difficulty: "Easy", question: "What is a point-in-time recovery (PITR)?", options: ["Recovering database state to a specific time using logs", "Taking a full backup only", "Restoring schema only", "Compressing backups"], correctAnswer: 0, explanation: "PITR uses transaction logs to restore the DB to a specific time." }
    ]
  },
  {
    id: 109,
    companyName: "DBMS - Part 5",
    logoSrc: "/dbms.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "Advanced SQL: window functions, CTEs, and storage engines.",
    reviews: [],
    questionsList: [
      { time: 2, topic: "SQL", difficulty: "Easy", question: "What is a Common Table Expression (CTE)?", options: ["A named temporary result set for use within a query", "A permanent table", "An index type", "A backup"], correctAnswer: 0, explanation: "CTEs define a temporary result set that can be referenced within a SQL statement." },
      { time: 2, topic: "Window", difficulty: "Easy", question: "Which function provides a running total in SQL?", options: ["SUM() OVER (ORDER BY ...)", "SUM()", "COUNT()", "GROUP_CONCAT()"], correctAnswer: 0, explanation: "Window functions like SUM() OVER(...) compute running totals and other analytic results." },
      { time: 2, topic: "Recursive", difficulty: "Easy", question: "What is a recursive CTE used for?", options: ["Querying hierarchical data like organizational charts", "Creating backups", "Indexing", "Partitioning"], correctAnswer: 0, explanation: "Recursive CTEs iterate to process hierarchical or graph-like data." },
      { time: 2, topic: "Storage", difficulty: "Easy", question: "Which storage engine in MySQL supports transactions and row-level locking?", options: ["InnoDB", "MyISAM", "CSV", "MEMORY"], correctAnswer: 0, explanation: "InnoDB supports transactions, foreign keys and row-level locking." },
      { time: 2, topic: "JSON", difficulty: "Easy", question: "Which benefit do JSON columns provide in a relational DB?", options: ["Flexible semi-structured data storage", "Faster joins", "Automatic indexing", "No need for backups"], correctAnswer: 0, explanation: "JSON columns let you store semi-structured data alongside relational tables." },
      { time: 2, topic: "Full-text", difficulty: "Easy", question: "Which index type is used for efficient text search?", options: ["Full-text index", "B-Tree", "Hash", "Bitmap"], correctAnswer: 0, explanation: "Full-text indexes accelerate text searching and relevance ranking." },
      { time: 2, topic: "Partitioning", difficulty: "Easy", question: "What is list partitioning useful for?", options: ["Partitioning by a set of discrete values (e.g., country codes)", "Range partitioning", "Hash partitioning", "Round-robin partitioning"], correctAnswer: 0, explanation: "List partitioning assigns rows to partitions based on a list of values." },
      { time: 2, topic: "Optimization", difficulty: "Easy", question: "Which technique can help optimize complex aggregations?", options: ["Materialized views", "Dropping indexes", "Using NULLs", "Avoiding GROUP BY"], correctAnswer: 0, explanation: "Materialized views precompute and store expensive aggregation results." },
      { time: 2, topic: "Indexes", difficulty: "Easy", question: "What is a bitmap index best suited for?", options: ["Low-cardinality columns in data warehousing", "High-cardinality columns", "Transaction logs", "Primary keys"], correctAnswer: 0, explanation: "Bitmap indexes work well for low-cardinality fields often used in analytics." },
      { time: 2, topic: "SQL", difficulty: "Easy", question: "Which clause helps filter rows after aggregation?", options: ["HAVING", "WHERE", "GROUP BY", "ORDER BY"], correctAnswer: 0, explanation: "HAVING filters aggregated results after GROUP BY." },
      { time: 2, topic: "Performance", difficulty: "Easy", question: "Which approach can reduce disk I/O for large tables?", options: ["Partitioning", "Adding more indexes", "Increasing schema complexity", "Using more NULLs"], correctAnswer: 0, explanation: "Partitioning can reduce I/O by scanning only relevant partitions." },
      { time: 2, topic: "Transactions", difficulty: "Easy", question: "What is MVCC (Multi-Version Concurrency Control)?", options: ["A method to provide consistent reads without blocking writers", "A backup strategy", "A type of index", "A partitioning method"], correctAnswer: 0, explanation: "MVCC keeps multiple data versions to allow concurrent reads and writes." },
      { time: 2, topic: "SQL", difficulty: "Easy", question: "Which SQL function can rank rows within partitions?", options: ["ROW_NUMBER()", "COUNT()", "SUM()", "MIN()"], correctAnswer: 0, explanation: "ROW_NUMBER() and related window functions rank rows within partitions." },
      { time: 2, topic: "Storage", difficulty: "Easy", question: "What is a checkpoint in a DBMS?", options: ["A point where dirty pages are flushed to disk to aid recovery", "A user permission level", "A replication method", "A type of index"], correctAnswer: 0, explanation: "Checkpoints help reduce recovery time by persisting in-memory changes to disk." },
      { time: 2, topic: "Maintenance", difficulty: "Easy", question: "When should you rebuild indexes?", options: ["When fragmentation is high", "Always after every query", "Never", "Only on system startup"], correctAnswer: 0, explanation: "Rebuilding indexes reduces fragmentation and can improve query performance." }
    ]
  },
  {
    id: 110,
    companyName: "DBMS - Part 6",
    logoSrc: "/dbms.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "Distributed databases, replication, CAP, and consistency models.",
    reviews: [],
    questionsList: [
      { time: 2, topic: "Distributed", difficulty: "Easy", question: "What does the CAP theorem state?", options: ["A distributed system can provide only two out of Consistency, Availability and Partition tolerance", "It guarantees ACID properties", "It defines backup schedules", "It prescribes query optimization techniques"], correctAnswer: 0, explanation: "CAP theorem states you can choose at most two of Consistency, Availability, and Partition tolerance." },
      { time: 2, topic: "Replication", difficulty: "Easy", question: "What is leader-follower replication?", options: ["One node accepts writes (leader) and followers replicate from it", "All nodes accept writes equally", "A backup schedule", "A type of index"], correctAnswer: 0, explanation: "Leader-follower has a single write leader and read replicas that follow the leader." },
      { time: 2, topic: "Consensus", difficulty: "Easy", question: "Which consensus algorithm is commonly used for distributed coordination?", options: ["Raft", "Bubble Sort", "Dijkstra", "QuickSort"], correctAnswer: 0, explanation: "Raft (and Paxos) are consensus algorithms used to achieve agreement among distributed nodes." },
      { time: 2, topic: "Transactions", difficulty: "Easy", question: "What is two-phase commit (2PC) used for?", options: ["Coordinating a distributed transaction across multiple nodes", "Indexing columns", "Taking backups", "Partitioning"], correctAnswer: 0, explanation: "2PC coordinates commit/abort across multiple participating nodes for distributed transactions." },
      { time: 2, topic: "Consistency", difficulty: "Easy", question: "What does eventual consistency mean?", options: ["Replicas will converge to the same state over time", "All replicas are always identical", "Data is never consistent", "Immediate strong consistency"], correctAnswer: 0, explanation: "Eventual consistency implies that, given time, replicas converge to the same value." },
      { time: 2, topic: "Conflict", difficulty: "Easy", question: "Which technique helps resolve conflicts in multi-master systems?", options: ["Vector clocks or application-specific resolution", "Automatic deletion", "Random selection", "Encrypting conflicts"], correctAnswer: 0, explanation: "Vector clocks and app-level logic are used to detect and resolve conflicts in multi-master setups." },
      { time: 2, topic: "Scaling", difficulty: "Easy", question: "What is horizontal scaling?", options: ["Adding more machines to handle load", "Adding CPU/RAM to a single machine", "Compressing tables", "Adding more indexes"], correctAnswer: 0, explanation: "Horizontal scaling (scale-out) adds more servers to distribute load." },
      { time: 2, topic: "Monitoring", difficulty: "Easy", question: "Which metric indicates replication lag?", options: ["Time difference between leader and replica applied positions", "Query count", "Disk size", "Number of tables"], correctAnswer: 0, explanation: "Replication lag is measured by the time or log position gap between leader and follower." },
      { time: 2, topic: "Recovery", difficulty: "Easy", question: "What is a cold backup?", options: ["A backup taken when the DB is offline", "A backup taken online", "An incremental backup", "A compressed backup"], correctAnswer: 0, explanation: "Cold backups are taken while the database is shutdown or not accepting writes." },
      { time: 2, topic: "Durability", difficulty: "Easy", question: "Which component helps ensure durability of transactions?", options: ["Transaction log", "Indexes", "Views", "Stored procedures"], correctAnswer: 0, explanation: "Transaction logs persist changes and are used for recovery to ensure durability." },
      { time: 2, topic: "Conflict", difficulty: "Easy", question: "What is last-write-wins (LWW)?", options: ["A conflict resolution policy where the latest timestamped write wins", "A backup method", "An index type", "A storage engine"], correctAnswer: 0, explanation: "LWW resolves conflicts by preferring the write with the latest timestamp." },
      { time: 2, topic: "Consistency", difficulty: "Easy", question: "Why might you choose eventual consistency over strong consistency?", options: ["To gain availability and partition tolerance for better scalability", "Because it's easier to implement locally", "To avoid backups", "To speed up writes on a single node"], correctAnswer: 0, explanation: "Eventual consistency favors availability and partition tolerance, useful for large distributed systems." },
      { time: 2, topic: "Administration", difficulty: "Easy", question: "What is a read replica used for?", options: ["Offloading read traffic and improving scalability", "Handling writes", "Encrypting data", "Taking backups"], correctAnswer: 0, explanation: "Read replicas copy data and are typically used to scale read-heavy workloads." },
      { time: 2, topic: "Testing", difficulty: "Easy", question: "Which test helps validate failover behavior?", options: ["Chaos or fault injection testing", "Unit tests", "Linting", "CSS tests"], correctAnswer: 0, explanation: "Chaos testing injects failures to verify system resilience and failover correctness." }
    ]
  },
  {
    id: 111,
    companyName: "OOP - Part 1",
    logoSrc: "/oop.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "Fundamentals of Object-Oriented Programming (OOP).",
    reviews: [],
    mcqQuestions: [
      { id: 1, question: "Which of the following is not a pillar of Object-Oriented Programming (OOP)?", options: ["Inheritance", "Polymorphism", "Abstraction", "Integration"], correctAnswer: 3, explanation: "Integration is not considered one of the four core OOP pillars." },
      { id: 2, question: "In OOP, what concept allows a class to inherit properties and methods from another class?", options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"], correctAnswer: 1, explanation: "Inheritance enables a class to reuse properties and methods from another class." },
      { id: 3, question: "What is the process of bundling data (variables) and the methods that operate on the data into a single unit called?", options: ["Abstraction", "Polymorphism", "Encapsulation", "Inheritance"], correctAnswer: 2, explanation: "Encapsulation groups data and its related operations together." },
      { id: 4, question: "Which of the following terms describes the ability of a single function or method to behave in multiple ways?", options: ["Overloading", "Overriding", "Polymorphism", "Encapsulation"], correctAnswer: 2, explanation: "Polymorphism allows methods to behave differently based on context." },
      { id: 5, question: "A blueprint for creating objects is called a:", options: ["Method", "Class", "Function", "Object"], correctAnswer: 1, explanation: "A class is the template used to create object instances." },
      { id: 6, question: "The act of hiding the internal implementation details and showing only the essential features is known as:", options: ["Inheritance", "Abstraction", "Encapsulation", "Polymorphism"], correctAnswer: 1, explanation: "Abstraction exposes only necessary details and hides complexity." },
      { id: 7, question: "What is the term for a specific instance of a class, created at runtime?", options: ["Object", "Blueprint", "Method", "Variable"], correctAnswer: 0, explanation: "An object is an instance of a class." },
      { id: 8, question: "In C++ and Java, which keyword is used to access the methods and properties of the base class from a derived class?", options: ["this", "super", "parent", "base"], correctAnswer: 1, explanation: "In Java (and many languages) 'super' refers to the immediate parent class; C++ uses scope resolution but 'super' is common in OOP quizzes." },
      { id: 9, question: "Method Overloading is an example of which type of polymorphism?", options: ["Compile-time polymorphism", "Runtime polymorphism", "Static polymorphism", "Both A and C"], correctAnswer: 3, explanation: "Method overloading is resolved at compile time and is also called static polymorphism." },
      { id: 10, question: "What is the primary purpose of a constructor in a class?", options: ["To destroy objects when they are no longer needed", "To initialize the state of an object", "To define the methods of a class", "To call the parent class’s destructor"], correctAnswer: 1, explanation: "Constructors initialize object state when an instance is created." },
      { id: 11, question: "What is an object in C++?", options: ["A class", "An instance of the class", "A method", "A variable"], correctAnswer: 1, explanation: "An object is a concrete instance of a class." },
      { id: 12, question: "In which of the following is memory allocated for the objects?", options: ["RAM", "ROM", "Disk", "Cache"], correctAnswer: 0, explanation: "Objects are allocated in RAM at runtime (heap or stack depending on allocation)." },
      { id: 13, question: "On what basis is it determined when a variable comes into existence in memory?", options: ["Scope", "Storage class", "Compilation flag", "File system"], correctAnswer: 1, explanation: "Storage class (and scope/lifetime) determines when variables are allocated and freed." },
      { id: 14, question: "Select the following which shows the correct constructor syntax in C++:", options: ["void class_name()", "class class_name()", "class_name()", "Class::class_name()"], correctAnswer: 2, explanation: "A constructor has the same name as the class and no return type, e.g., class_name()." },
      { id: 15, question: "To access data members of a class, which of the following is used?", options: ["Pointers only", "References only", "Dot or arrow operator as required", "Friend functions only"], correctAnswer: 2, explanation: "Use '.' for objects and '->' for pointers to access members." }
    ]
  },
  {
    id: 112,
    companyName: "OOP - Part 2",
    logoSrc: "/oop.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "Access control, constructors, polymorphism, and related OOP concepts.",
    reviews: [],
    mcqQuestions: [
      { id: 1, question: "Total access specifiers in OOPS for C++ are?", options: ["2", "4", "3", "1"], correctAnswer: 2, explanation: "C++ has three access specifiers: private, public, and protected." },
      { id: 2, question: "Total instances of an abstract class that can be created?", options: ["None", "One", "Many", "Depends on compiler"], correctAnswer: 0, explanation: "You cannot instantiate an abstract class directly." },
      { id: 3, question: "Total types of constructors in C++ are?", options: ["Two", "Three", "Four", "One"], correctAnswer: 1, explanation: "Commonly: default, parameterized, and copy constructors." },
      { id: 4, question: "Total types of polymorphism in C++ are?", options: ["One", "Two", "Three", "Four"], correctAnswer: 1, explanation: "Polymorphism is often categorized as compile-time and runtime (two types)." },
      { id: 5, question: "Under which pillar of OOPS do base class and derived class relationships come?", options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"], correctAnswer: 1, explanation: "Inheritance defines base/derived relationships." },
      { id: 6, question: "Virtual function should be ________.", options: ["Public", "Private", "Protected", "Static"], correctAnswer: 0, explanation: "Virtual functions are typically public to allow polymorphic use; they can be other access levels but commonly public." },
      { id: 7, question: "Virtual functions should be defined in?", options: ["Derived class", "Base class", "Friend function", "Global scope"], correctAnswer: 1, explanation: "You usually declare virtual functions in base classes to allow overriding in derived classes." },
      { id: 8, question: "What are the total catch blocks that can be used with a single try block?", options: ["One", "Two", "As many as required", "Zero"], correctAnswer: 2, explanation: "You can use multiple catch blocks to handle different exception types." },
      { id: 9, question: "Identify the scope resolution operator in C++.", options: [".", "::", "->", ":"], correctAnswer: 1, explanation: "'::' is the scope resolution operator used for namespace and class scope access." },
      { id: 10, question: "What is cout?", options: ["A function", "An object", "A macro", "A variable"], correctAnswer: 1, explanation: "In C++ iostream, 'cout' is an object used to print to standard output." },
      { id: 11, question: "What is the implicit return type of a constructor?", options: ["void", "Class object", "int", "None"], correctAnswer: 1, explanation: "Constructors do not have a return type; conceptually they initialize and act on the class object." },
      { id: 12, question: "What is the number of parameters that a default constructor requires?", options: ["0", "1", "2", "Depends"], correctAnswer: 0, explanation: "A default constructor requires no parameters by definition." },
      { id: 13, question: "What type of inheritance does single-level inheritance support?", options: ["Runtime inheritance", "Compile-time inheritance", "Multiple inheritance", "Hybrid inheritance"], correctAnswer: 0, explanation: "Single-level inheritance is a simple base-derived relationship; quiz answers sometimes phrase it as supporting runtime behavior." },
      { id: 14, question: "When is the object created with a 'new' keyword?", options: ["During run-time", "During compile-time", "During link-time", "During install-time"], correctAnswer: 0, explanation: "Objects allocated with 'new' are created at runtime on the heap." },
      { id: 15, question: "Which of the following functions can be inherited from the base class?", options: ["Constructors", "Destructors", "Friend functions", "None of the functions"], correctAnswer: 3, explanation: "Constructors are not inherited; typical phrasing in the provided data listed 'None' as the expected option." }
    ]
  },
  {
    id: 113,
    companyName: "OOP - Part 3",
    logoSrc: "/oop.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "OOP advanced concepts, operator/function overloading, memory, and design basics.",
    reviews: [],
    mcqQuestions: [
      { id: 1, question: "Which of the following is not a type of inheritance?", options: ["Single", "Multiple", "Multilevel", "Distributed"], correctAnswer: 3, explanation: "'Distributed' is not a standard inheritance type in OOP nomenclature." },
      { id: 2, question: "Which of the following is not an OOPS concept?", options: ["Encapsulation", "Compilation", "Polymorphism", "Abstraction"], correctAnswer: 1, explanation: "Compilation is a build process, not an OOP concept." },
      { id: 3, question: "Who developed object-oriented programming?", options: ["Bjarne Stroustrup", "Dennis Ritchie", "Alan Kay", "James Gosling"], correctAnswer: 2, explanation: "Alan Kay is often credited with pioneering the OOP paradigm (Smalltalk)." },
      { id: 4, question: "Why is a virtual function mainly used to achieve?", options: ["Compile-time polymorphism", "Data hiding", "Encapsulation", "Runtime polymorphism"], correctAnswer: 3, explanation: "Virtual functions enable runtime (dynamic) polymorphism via overriding." },
      { id: 5, question: "Why is reusability a desirable feature?", options: ["It increases code size", "It decreases testing time", "It decreases readability", "It slows development"], correctAnswer: 1, explanation: "Reusing code reduces duplication and testing effort." },
      { id: 6, question: "Choose whether True or False: The constructor function can be constant.", options: ["True", "False"], correctAnswer: 1, explanation: "Constructors cannot be declared const; they initialize objects." },
      { id: 7, question: "Another name for a generic class is?", options: ["Template class", "Friend class", "Static class", "Virtual class"], correctAnswer: 0, explanation: "Generic classes are implemented using templates in C++." },
      { id: 8, question: "By default, fields in a structure of a C program are?", options: ["Public", "Private", "Protected", "Virtual"], correctAnswer: 0, explanation: "Struct members are public by default in C/C++." },
      { id: 9, question: "Choose the incorrect option which is not a type of constructor.", options: ["Default constructor", "Friend constructor", "Copy constructor", "Parameterized constructor"], correctAnswer: 1, explanation: "'Friend constructor' is not a recognized constructor type." },
      { id: 10, question: "Choose the option for which an instance of the class cannot be created.", options: ["Concrete class", "Final class", "Static class", "Abstract class"], correctAnswer: 3, explanation: "Abstract classes (with pure virtual functions) cannot be instantiated." },
      { id: 11, question: "Choose the option which can show polymorphism.", options: ["Inheritance", "Overloading", "Encapsulation", "Abstraction"], correctAnswer: 1, explanation: "Overloading is an example of polymorphism (ad-hoc / compile-time)." },
      { id: 12, question: "Choose the option which correctly describes function overloading.", options: ["Ad-hoc polymorphism", "Subtype polymorphism", "Parametric polymorphism", "None of the above"], correctAnswer: 0, explanation: "Function overloading is an example of ad-hoc polymorphism." },
      { id: 13, question: "Choose the option which is not a member of the class.", options: ["Friend function", "Public member", "Private member", "Protected member"], correctAnswer: 0, explanation: "Friend functions are not members of the class even though they can access private members." },
      { id: 14, question: "Which of the following is used to free the memory allocated for an object in C++?", options: ["free", "release", "delete", "dispose"], correctAnswer: 2, explanation: "'delete' frees memory allocated with 'new' in C++." },
      { id: 15, question: "Which feature is used to implement late binding?", options: ["Inline functions", "Templates", "Virtual functions", "Macros"], correctAnswer: 2, explanation: "Virtual functions enable late (dynamic) binding at runtime." }
    ]
  },
  {
    id: 114,
    companyName: "OOP - Part 4",
    logoSrc: "/oop.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "Design principles, interfaces, and OOP best practices.",
    reviews: [],
    mcqQuestions: [
      { id: 1, question: "Which SOLID principle is about substitutability of subtypes?", options: ["Single Responsibility", "Open/Closed", "Liskov Substitution", "Dependency Inversion"], correctAnswer: 2, explanation: "Liskov Substitution Principle ensures derived classes can substitute base classes." },
      { id: 2, question: "What does an interface define?", options: ["Implementation details", "A contract of method signatures", "Memory layout", "A constructor"], correctAnswer: 1, explanation: "Interfaces define method signatures (a contract) without implementation." },
      { id: 3, question: "Which keyword in Java prevents a class from being subclassed?", options: ["static", "sealed", "final", "private"], correctAnswer: 2, explanation: "'final' prevents further subclassing in Java." },
      { id: 4, question: "Which of the following best defines coupling?", options: ["Degree of interdependence between modules", "Amount of inheritance used", "Number of methods in a class", "Number of classes in a package"], correctAnswer: 0, explanation: "Coupling measures how interdependent modules or classes are." },
      { id: 5, question: "Which pattern encapsulates object creation logic?", options: ["Strategy", "Factory", "Observer", "Decorator"], correctAnswer: 1, explanation: "Factory pattern centralizes and encapsulates object creation." },
      { id: 6, question: "What is interface segregation principle (ISP) about?", options: ["Use one big interface for all clients", "Split large interfaces into smaller ones", "Avoid interfaces", "Use inheritance only"], correctAnswer: 1, explanation: "ISP suggests using small, client-specific interfaces." },
      { id: 7, question: "In Java, multiple inheritance of implementation is prevented; how is multiple inheritance achieved?", options: ["Using interfaces", "Using multiple classes", "Using pointers", "Using macros"], correctAnswer: 0, explanation: "Interfaces allow multiple inheritance of type without implementation conflicts." },
      { id: 8, question: "Which OOP concept helps hide internal state and expose behavior?", options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"], correctAnswer: 1, explanation: "Encapsulation bundles state and behavior and hides internal details." },
      { id: 9, question: "What is method overriding?", options: ["Changing method signature", "Providing a new implementation in derived class", "Deleting a method", "Overloading with different params"], correctAnswer: 1, explanation: "Overriding supplies a derived class implementation for a base method." },
      { id: 10, question: "Which design choice improves testability by inverting dependencies?", options: ["Hard-coded dependencies", "Dependency Injection", "Global variables", "Tight coupling"], correctAnswer: 1, explanation: "Dependency Injection reduces coupling and improves testability." },
      { id: 11, question: "Which is NOT a benefit of good encapsulation?", options: ["Reduced coupling", "Improved maintainability", "Increased visibility of internals", "Clearer interfaces"], correctAnswer: 2, explanation: "Encapsulation reduces visibility of internals rather than increases it." },
      { id: 12, question: "Which pattern lets you change an object's behavior at runtime by wrapping it?", options: ["Decorator", "Singleton", "Adapter", "Facade"], correctAnswer: 0, explanation: "Decorator wraps objects to add/modify behavior at runtime." },
      { id: 13, question: "Which statement about abstract classes is true?", options: ["They cannot have implemented methods", "They can contain both abstract and concrete methods", "They can be instantiated", "They are the same as interfaces"], correctAnswer: 1, explanation: "Abstract classes can include implemented methods and abstract declarations." },
      { id: 14, question: "What does 'tight coupling' imply?", options: ["Modules are loosely connected", "Modules heavily depend on each other", "Modules are well-tested", "Modules are independent"], correctAnswer: 1, explanation: "Tight coupling means modules depend heavily on each other, reducing flexibility." },
      { id: 15, question: "Which practice helps achieve low coupling and high cohesion?", options: ["Monolithic classes", "Single Responsibility Principle", "Global state", "Many public fields"], correctAnswer: 1, explanation: "Single Responsibility Principle encourages focused classes (high cohesion) and lower coupling." }
    ]
  },
  {
    id: 115,
    companyName: "OOP - Part 5",
    logoSrc: "/oop.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "Language specifics, memory, operator overloading, and class mechanics.",
    reviews: [],
    mcqQuestions: [
      { id: 1, question: "Which operator cannot be overloaded in C++?", options: ["+", "=", "::", "<<"], correctAnswer: 2, explanation: "The scope resolution operator '::' cannot be overloaded." },
      { id: 2, question: "What does RAII (Resource Acquisition Is Initialization) help manage?", options: ["Memory leaks using garbage collection", "Resource lifetime via constructors/destructors", "Network connections only", "User input"], correctAnswer: 1, explanation: "RAII ties resources to object lifetime using constructors/destructors for deterministic cleanup." },
      { id: 3, question: "Which is true about static members of a class?", options: ["Each instance has its own copy", "Shared among all instances", "Cannot be accessed outside class", "Always private"], correctAnswer: 1, explanation: "Static members are shared across all instances of a class." },
      { id: 4, question: "Which of the following causes a memory leak?", options: ["Using RAII correctly", "Forgetting to delete memory allocated with new", "Using smart pointers", "Automatic variables on stack"], correctAnswer: 1, explanation: "Not freeing heap-allocated memory causes leaks; smart pointers or RAII prevent this." },
      { id: 5, question: "What is operator overloading used for?", options: ["Changing language syntax", "Defining custom behavior for operators on user types", "Preventing polymorphism", "Managing memory"], correctAnswer: 1, explanation: "Operator overloading lets types define operator behavior (e.g., + for complex numbers)." },
      { id: 6, question: "Which statement about copy constructors is true?", options: ["They are used for assignment", "They initialize a new object as a copy of another", "They free resources", "They cannot be user-defined"], correctAnswer: 1, explanation: "Copy constructors initialize new objects using another object's state." },
      { id: 7, question: "Which mechanism helps avoid slicing when copying polymorphic objects?", options: ["Using pointers or references to base type", "Copying by value", "Using static casts", "Declaring classes final"], correctAnswer: 0, explanation: "Pointers/references preserve actual derived types and avoid slicing." },
      { id: 8, question: "In Java, what handles unused heap objects automatically?", options: ["Garbage collector", "Destructor", "delete operator", "RAII"], correctAnswer: 0, explanation: "Java uses garbage collection to reclaim unused heap objects." },
      { id: 9, question: "What is the effect of declaring a method final in Java?", options: ["Allows overriding", "Prevents overriding", "Makes it static", "Exports it"], correctAnswer: 1, explanation: "final methods cannot be overridden by subclasses." },
      { id: 10, question: "Which is a sign of low cohesion in a class?", options: ["Single responsibility", "Many unrelated methods", "Focused behavior", "Clear interface"], correctAnswer: 1, explanation: "Low cohesion means a class does many unrelated things." },
      { id: 11, question: "Which mechanism allows runtime identification of an object's type in C++?", options: ["typeid / RTTI", "Templates", "Inline functions", "Macros"], correctAnswer: 0, explanation: "RTTI (typeid/dynamic_cast) allows runtime type checks in C++." },
      { id: 12, question: "Which qualifier ensures a method does not modify the object in C++?", options: ["const", "volatile", "static", "mutable"], correctAnswer: 0, explanation: "'const' member functions promise not to modify the object." },
      { id: 13, question: "Which of the following is true about destructors?", options: ["They are called automatically when an object goes out of scope", "They must be called manually", "They create objects", "They return values"], correctAnswer: 0, explanation: "Destructors are automatically invoked to release resources when objects end their lifetime." },
      { id: 14, question: "Which practice reduces risk of slicing and preserves polymorphic behavior when storing heterogeneous objects?", options: ["Store by value", "Store pointers/references to base type", "Use static_cast", "Avoid inheritance"], correctAnswer: 1, explanation: "Using pointers/references keeps full object identity and polymorphism." },
      { id: 15, question: "Which tool helps detect memory leaks in native applications?", options: ["Valgrind", "ESLint", "Prettier", "Jest"], correctAnswer: 0, explanation: "Valgrind (or similar) helps detect memory leaks in native code." }
    ]
  },
  {
    id: 116,
    companyName: "Computer Networks - Part 1",
    logoSrc: "/networks.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "Networking fundamentals: purpose, topologies, basic protocols.",
    reviews: [],
    mcqQuestions: [
      { id: 1, question: "What is the fundamental purpose of a computer network?", options: ["Sharing resources", "Storing data", "Performing calculations", "Enhancing security"], correctAnswer: 0, explanation: "Computer networks enable sharing of resources like files, printers, and services." },
      { id: 2, question: "Which topology does the Internet resemble?", options: ["Ring", "Bus", "Star", "Mesh"], correctAnswer: 3, explanation: "The Internet is best described as a mesh of interconnected networks." },
      { id: 3, question: "What type of network covers a large geographical area, like a city, country, or the world?", options: ["LAN", "MAN", "WAN", "PAN"], correctAnswer: 2, explanation: "WAN (Wide Area Network) covers large geographic areas such as countries or the world." },
      { id: 4, question: "Which device is used to connect different network segments in a computer network?", options: ["Repeater", "Router", "Bridge", "Modem"], correctAnswer: 1, explanation: "Routers forward packets between different networks or segments based on IP routing." },
      { id: 5, question: "What protocol is commonly used for transmitting web pages over the internet?", options: ["SMTP", "FTP", "HTTP", "SNMP"], correctAnswer: 2, explanation: "HTTP is the standard protocol for transferring web pages." },
      { id: 6, question: "Which layer of the OSI model ensures the error-free transmission of data?", options: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"], correctAnswer: 1, explanation: "The Data Link layer provides framing and basic error detection/correction on a link." },
      { id: 7, question: "In a computer network, what is the main function of the application layer?", options: ["To provide network services to the applications", "To transmit data between network devices", "To package data for transfer", "To route data between networks"], correctAnswer: 0, explanation: "The Application layer offers network services directly to end-user applications." },
      { id: 8, question: "Which command can be used to view the current IP configuration of a device?", options: ["ipconfig", "ifconfig", "Both ipconfig and ifconfig", "netstat"], correctAnswer: 2, explanation: "On Windows 'ipconfig', on Unix/Linux 'ifconfig' (or 'ip') — both view IP configuration." },
      { id: 9, question: "What is the result of executing the ping localhost command?", options: ["It sends ICMP echo requests to the local machine", "It configures the local machine's IP address", "It displays the routing table", "It clears the DNS cache"], correctAnswer: 0, explanation: "'ping localhost' sends ICMP echo requests to the local host (loopback)." },
      { id: 10, question: "If a computer is unable to access the Internet, but can communicate with local network devices, what should be checked first?", options: ["Router configuration", "Cable connections", "Local firewall settings", "DNS settings"], correctAnswer: 3, explanation: "If local connectivity works, DNS or gateway settings are common causes; DNS is often checked first." },
      { id: 11, question: "A computer can ping IP addresses but not domain names. What is likely the issue?", options: ["IP conflict", "Router failure", "DNS misconfiguration", "Faulty Ethernet cable"], correctAnswer: 2, explanation: "If IP connectivity works but domain names don't resolve, DNS configuration is likely wrong." },
      { id: 12, question: "Which layer of the OSI model is responsible for establishing, managing, and terminating sessions between applications?", options: ["Session Layer", "Transport Layer", "Application Layer", "Presentation Layer"], correctAnswer: 0, explanation: "The Session layer handles session establishment, maintenance, and termination." },
      { id: 13, question: "What is the primary function of the Network Layer in the OSI model?", options: ["To provide data routing paths for network communication", "To format data", "To establish connections", "To encode and decode data"], correctAnswer: 0, explanation: "The Network layer provides routing and logical addressing (e.g., IP)." },
      { id: 14, question: "In the TCP/IP model, which layer corresponds to the OSI model's Physical and Data Link layers?", options: ["Application", "Transport", "Internet", "Network Interface"], correctAnswer: 3, explanation: "The Network Interface layer (link layer) maps to OSI Physical + Data Link." },
      { id: 15, question: "The process of encapsulation involves data moving from which layer to which layer?", options: ["Application to Physical", "Physical to Application", "Transport to Network", "Network to Transport"], correctAnswer: 0, explanation: "Encapsulation wraps data as it moves down the stack (Application→Physical)." }
    ]
  },
  {
    id: 117,
    companyName: "Computer Networks - Part 2",
    logoSrc: "/networks.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "Commands, OSI/TCP-IP layers, and basic troubleshooting.",
    reviews: [],
    mcqQuestions: [
      { id: 1, question: "Which OSI layer is responsible for error detection and correction at the destination?", options: ["Transport", "Network", "Data Link", "Physical"], correctAnswer: 0, explanation: "Transport protocols (like TCP) provide end-to-end error detection and recovery at the destination." },
      { id: 2, question: "What does the TCP/IP model's Internet layer do?", options: ["Manages end-to-end data communication sessions", "Routes packets across networks", "Formats data packets", "Encodes and decodes data"], correctAnswer: 1, explanation: "The Internet layer (IP) routes packets across different networks." },
      { id: 3, question: "Which protocol operates at the Transport Layer of the OSI model to ensure reliable communication?", options: ["ICMP", "IP", "TCP", "UDP"], correctAnswer: 2, explanation: "TCP is a transport-layer protocol that provides reliable, connection-oriented communication." },
      { id: 4, question: "How does the Presentation Layer of the OSI model differ from the Application Layer?", options: ["It is responsible for session management", "It deals with syntax and semantics of the information exchanged", "It provides encryption and compression", "It is not implemented in the TCP/IP model"], correctAnswer: 1, explanation: "The Presentation layer handles data representation (syntax/semantics); it may also provide encryption/compression." },
      { id: 5, question: "What feature distinguishes TCP from UDP at the Transport Layer?", options: ["TCP is faster than UDP", "TCP and UDP use different port numbers", "TCP is connection-oriented while UDP is not", "TCP uses IP but UDP does not"], correctAnswer: 2, explanation: "TCP is connection-oriented (reliable), UDP is connectionless (unreliable)." },
      { id: 6, question: "Which command can be used to display the current TCP/IP network configuration?", options: ["ipconfig /all", "netstat -r", "arp -a", "tracert"], correctAnswer: 0, explanation: "'ipconfig /all' shows detailed TCP/IP config on Windows." },
      { id: 7, question: "What does the netstat command do?", options: ["Displays network connections, routing tables, and statistics", "Configures network interfaces", "Tests connectivity to a host", "Manages firewall settings"], correctAnswer: 0, explanation: "netstat displays active connections and network-related statistics." },
      { id: 8, question: "Which command is used to test connectivity to a specific IP address and trace the path the packets take?", options: ["ping", "arp", "tracert", "nslookup"], correctAnswer: 2, explanation: "'tracert' (Windows) or 'traceroute' (Unix) traces route path to a destination." },
      { id: 9, question: "A device is unable to connect to any network. Which OSI layer should be investigated first?", options: ["Application", "Presentation", "Network", "Physical"], correctAnswer: 3, explanation: "If no network connectivity exists, start with the Physical layer (cabling, NIC power)." },
      { id: 10, question: "If a computer can connect to local devices but not to the Internet, what might be misconfigured?", options: ["IP address", "Subnet mask", "Default gateway", "MAC address"], correctAnswer: 2, explanation: "A wrong default gateway prevents reaching remote networks (Internet)." },
      { id: 11, question: "A web application can send data but cannot receive. What layer could be malfunctioning?", options: ["Application", "Session", "Transport", "Presentation"], correctAnswer: 2, explanation: "Transport-layer problems (e.g., TCP issues) can affect reliable bidirectional data transfer." },
      { id: 12, question: "What is the primary function of the MAC (Media Access Control) sublayer?", options: ["Frame delimiting", "Error detection", "Controlling access to the physical medium", "Physical addressing"], correctAnswer: 2, explanation: "MAC controls how devices access the physical medium and handles addressing at link layer." },
      { id: 13, question: "What is the standard Ethernet frame size for most networks?", options: ["64 bytes to 1518 bytes", "128 bytes to 1024 bytes", "1500 bytes to 2000 bytes", "100 bytes to 1500 bytes"], correctAnswer: 0, explanation: "Standard Ethernet frames range from 64 to 1518 bytes (excluding jumbo frames)." },
      { id: 14, question: "In Ethernet networks, what is the purpose of the collision detection mechanism?", options: ["To encrypt data", "To compress data", "To detect and manage when two devices try to send data simultaneously", "To prioritize data"], correctAnswer: 2, explanation: "Collision detection identifies simultaneous transmissions so devices can retransmit safely." },
      { id: 15, question: "Which Ethernet standard provides a speed of 1 Gbps?", options: ["10BaseT", "100BaseTX", "1000BaseT", "10GBaseT"], correctAnswer: 2, explanation: "1000BaseT (Gigabit Ethernet) supports 1 Gbps over twisted-pair cabling." }
    ]
  },
  {
    id: 118,
    companyName: "Computer Networks - Part 3",
    logoSrc: "/networks.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "Ethernet, switching, MACs, and duplex/ports troubleshooting.",
    reviews: [],
    mcqQuestions: [
      { id: 1, question: "What type of cable is used for most modern Ethernet networks?", options: ["Coaxial cable", "Fiber optic cable", "Twisted pair cable", "None of the above"], correctAnswer: 2, explanation: "Twisted pair (e.g., Cat5e/Cat6) is commonly used for Ethernet." },
      { id: 2, question: "What does the term 'full-duplex' mean in the context of Ethernet networking?", options: ["Data can be transmitted in one direction only", "Data can be transmitted in both directions, but not simultaneously", "Data can be transmitted in both directions simultaneously", "None of the above"], correctAnswer: 2, explanation: "Full-duplex allows simultaneous two-way communication." },
      { id: 3, question: "How does a switch determine the destination of an Ethernet frame?", options: ["By using the source IP address", "By using the destination MAC address", "By using the source MAC address", "By broadcasting to all ports except the source"], correctAnswer: 1, explanation: "Switches forward frames based on destination MAC addresses learned in the CAM table." },
      { id: 4, question: "What mechanism do Ethernet switches use to avoid collisions?", options: ["Collision detection", "Collision prevention", "Collision avoidance", "Collision management"], correctAnswer: 2, explanation: "Switches (and full-duplex links) avoid collisions by creating separate collision domains (effectively collision avoidance)." },
      { id: 5, question: "Which feature distinguishes managed switches from unmanaged switches in an Ethernet network?", options: ["The ability to encrypt data", "The ability to be configured and monitored", "The use of optical fibers", "The support for multiple protocols"], correctAnswer: 1, explanation: "Managed switches offer configuration and monitoring capabilities (VLANs, SNMP, etc.)." },
      { id: 6, question: "Which command can be used to display the MAC address of a network interface on a Windows machine?", options: ["ipconfig /all", "ifconfig", "arp -a", "netstat -e"], correctAnswer: 0, explanation: "'ipconfig /all' shows MAC (physical) addresses on Windows." },
      { id: 7, question: "On a Linux system, which command shows the MAC address of all network interfaces?", options: ["ip addr", "ifconfig -a", "route", "netstat -i"], correctAnswer: 0, explanation: "'ip addr' displays addresses including MACs; 'ifconfig -a' also shows them on older systems." },
      { id: 8, question: "How can you change the MAC address of a network interface on Linux?", options: ["Modifying the network configuration file", "Using the ifconfig command", "Using the macchanger tool", "All of the above"], correctAnswer: 3, explanation: "MAC can be updated via config, ifconfig/ip commands, or tools like macchanger." },
      { id: 9, question: "If a device is not receiving an IP address via DHCP over Ethernet, what layer should be investigated?", options: ["Application", "Presentation", "Network", "Data Link"], correctAnswer: 3, explanation: "DHCP uses link-layer broadcasts; Data Link issues (cabling, switch) can prevent DHCP." },
      { id: 10, question: "A computer can access local network devices but not the internet. What should be checked on the switch?", options: ["VLAN configurations", "Port speed settings", "Power settings", "Firmware updates"], correctAnswer: 0, explanation: "VLAN misconfiguration can isolate traffic and prevent internet access." },
      { id: 11, question: "What could be a reason for slow data transfer rates over an Ethernet network?", options: ["Faulty NIC", "Cable length exceeds standards", "Incorrect duplex settings", "All of the above"], correctAnswer: 3, explanation: "Any of these issues can degrade throughput." },
      { id: 12, question: "What is the primary purpose of the Internet Protocol (IP)?", options: ["To provide error checking and correction", "To ensure reliable data delivery", "To route packets across networks", "To format data packets"], correctAnswer: 2, explanation: "IP provides logical addressing and routing across networks." },
      { id: 13, question: "What type of messages are used by ICMP to inform senders of network issues?", options: ["Query messages", "Error-reporting messages", "Routing-update messages", "Service-quality messages"], correctAnswer: 1, explanation: "ICMP sends error and informational messages (e.g., destination unreachable)." },
      { id: 14, question: "Which IP protocol version uses 128-bit addresses?", options: ["IPv4", "IPv6", "ARP", "RARP"], correctAnswer: 1, explanation: "IPv6 uses 128-bit addresses." },
      { id: 15, question: "How do routers utilize ICMP messages within the IP framework?", options: ["To encrypt data packets", "To prioritize packets", "To diagnose routing issues", "To compress data packets"], correctAnswer: 2, explanation: "Routers use ICMP for diagnostics and error reporting (e.g., TTL exceeded)." }
    ]
  },
  {
    id: 119,
    companyName: "Computer Networks - Part 4",
    logoSrc: "/networks.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "IPv4/IPv6, routing, BGP/OSPF basics and troubleshooting.",
    reviews: [],
    mcqQuestions: [
      { id: 1, question: "What is the main difference between IPv4 and IPv6?", options: ["Address size", "Error detection mechanisms", "Encryption capabilities", "Transport layer integration"], correctAnswer: 0, explanation: "IPv6 uses larger (128-bit) addresses vs IPv4's 32-bit addresses." },
      { id: 2, question: "Which feature of IPv6 eliminates the need for NAT (Network Address Translation)?", options: ["Auto-configuration", "Built-in encryption", "The vast address space", "Multicast"], correctAnswer: 2, explanation: "IPv6's huge address space reduces the need for NAT." },
      { id: 3, question: "What is the function of an IP subnet mask?", options: ["To separate the network address from the host address", "To encrypt IP addresses", "To detect IP conflicts", "To assign IP addresses automatically"], correctAnswer: 0, explanation: "Subnet masks split an IP address into network and host portions." },
      { id: 4, question: "In IPv6, what is the equivalent of ARP (Address Resolution Protocol) used in IPv4?", options: ["DHCPv6", "ICMPv6", "Neighbor Discovery Protocol (NDP)", "IGMPv6"], correctAnswer: 2, explanation: "NDP replaces ARP in IPv6 for neighbor discovery and address resolution." },
      { id: 5, question: "What mechanism does IPv6 use to ensure data integrity and authentication?", options: ["ESP (Encapsulating Security Payload)", "AH (Authentication Header)", "ICMPv6", "RARP"], correctAnswer: 1, explanation: "AH provides authentication and integrity as part of IPsec; ESP can provide encryption plus optional authentication." },
      { id: 6, question: "How can you display the current IP configuration on a Unix/Linux system?", options: ["ipconfig", "ifconfig", "netstat -i", "arp -a"], correctAnswer: 1, explanation: "Traditionally 'ifconfig' (or modern 'ip addr') shows IP info on Unix/Linux." },
      { id: 7, question: "Which command can you use to test IPv6 connectivity to an address?", options: ["ping6", "tracert6", "arp -6", "ifconfig -6"], correctAnswer: 0, explanation: "'ping6' (or 'ping -6') tests IPv6 connectivity." },
      { id: 8, question: "What command provides detailed information about routes to an IPv6 address and discovers MTU along the path?", options: ["mtr", "tracepath6", "ip -6 route", "netstat -r6"], correctAnswer: 1, explanation: "tracepath6 can reveal path MTU and route details for IPv6." },
      { id: 9, question: "A computer can access IPv4 websites but not IPv6 websites. What should be checked first?", options: ["IPv6 configuration on the computer", "Router's IPv6 support", "IPv6 DNS settings", "Firewall settings for IPv6"], correctAnswer: 0, explanation: "Start by checking the host's IPv6 configuration and addressing." },
      { id: 10, question: "You're unable to ping an IPv6 address from your machine. What could be the issue?", options: ["Incorrect subnet mask", "Firewall blocking ICMPv6 packets", "Incorrect gateway", "All of the above"], correctAnswer: 3, explanation: "Any of these issues can prevent IPv6 connectivity." },
      { id: 11, question: "How to resolve intermittent connectivity issues with an IPv6 network?", options: ["Replacing the router", "Updating network drivers and firmware", "Checking for IPv6 prefix delegation issues", "All of the above"], correctAnswer: 3, explanation: "Troubleshooting can include firmware/drivers, configuration and sometimes hardware replacement." },
      { id: 12, question: "What is the primary purpose of routing protocols in a network?", options: ["To encrypt data", "To compress data", "To determine optimal data paths", "To manage user permissions"], correctAnswer: 2, explanation: "Routing protocols compute paths to deliver packets efficiently." },
      { id: 13, question: "Which type of routing algorithm does OSPF use?", options: ["Distance-vector", "Link-state", "Path-vector", "Hybrid"], correctAnswer: 1, explanation: "OSPF is a link-state routing protocol." },
      { id: 14, question: "What differentiates dynamic routing from static routing?", options: ["Dynamic routing is less secure", "Static routing automatically updates", "Dynamic routing automatically updates routes", "Static routing is faster"], correctAnswer: 2, explanation: "Dynamic routing protocols automatically share and update route information." },
      { id: 15, question: "In BGP (Border Gateway Protocol), what is the main factor in selecting the best path?", options: ["Path length", "Bandwidth", "Lowest cost", "Number of AS hops"], correctAnswer: 0, explanation: "AS_PATH length (a form of path length) is important in BGP path selection among many attributes." }
    ]
  },
  {
    id: 120,
    companyName: "Computer Networks - Part 5",
    logoSrc: "/networks.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "Routing algorithms, protocols, TCP/UDP behavior and troubleshooting.",
    reviews: [],
    mcqQuestions: [
      { id: 1, question: "How does a distance-vector routing protocol determine the best route?", options: ["By counting hops", "By measuring latency", "By bandwidth", "By using a cost metric"], correctAnswer: 0, explanation: "Classic distance-vector protocols (e.g., RIP) use hop count as a metric." },
      { id: 2, question: "What is the primary benefit of using a routing protocol like EIGRP compared to RIP?", options: ["Faster convergence", "Higher security", "Simpler configuration", "Less bandwidth usage"], correctAnswer: 0, explanation: "EIGRP converges faster and has more advanced metrics than RIP." },
      { id: 3, question: "Which routing protocol is classified as an Exterior Gateway Protocol (EGP)?", options: ["OSPF", "EIGRP", "BGP", "RIP"], correctAnswer: 2, explanation: "BGP is an Exterior Gateway Protocol used between autonomous systems." },
      { id: 4, question: "What mechanism does OSPF use to prevent routing loops?", options: ["Split horizon", "Route poisoning", "Link-state advertisement", "Area designations"], correctAnswer: 2, explanation: "Link-state advertisements and topology awareness help OSPF avoid loops." },
      { id: 5, question: "In BGP, what is the purpose of the AS_PATH attribute?", options: ["To encrypt data packets", "To specify the priority of routes", "To record the path of ASes", "To specify the route source"], correctAnswer: 2, explanation: "AS_PATH records the sequence of autonomous systems a route has traversed." },
      { id: 6, question: "Which command can display the routing table on a Cisco router?", options: ["show ip route", "display ip routing-table", "route print", "netstat -r"], correctAnswer: 0, explanation: "'show ip route' is the Cisco IOS command to view the routing table." },
      { id: 7, question: "How can you manually add a static route to the routing table in Linux?", options: ["Using the route add command", "Using the ifconfig command", "Editing the /etc/hosts file", "Using the ip route add command"], correctAnswer: 3, explanation: "On modern Linux, 'ip route add' is used to add static routes." },
      { id: 8, question: "In Cisco IOS, how can you redistribute OSPF routes into EIGRP?", options: ["By configuring redistribution in the OSPF process", "By configuring redistribution in the EIGRP process", "By using access lists", "By using route maps"], correctAnswer: 1, explanation: "You typically configure redistribution in the receiving process (EIGRP) and optionally use route-maps to filter/modify." },
      { id: 9, question: "If a newly added network is not appearing in the routing tables, what should be checked first?", options: ["Physical connections", "Route summarization settings", "Access control lists", "Network advertisements"], correctAnswer: 0, explanation: "Physical connectivity issues are often the simplest cause to rule out first." },
      { id: 10, question: "A router is not choosing the expected path for traffic, what might be misconfigured?", options: ["Interface bandwidth settings", "Routing protocol priorities", "Next-hop IP addresses", "All of the above"], correctAnswer: 3, explanation: "Any of these can influence path selection and should be investigated." },
      { id: 11, question: "How can you resolve a persistent routing loop between two routers?", options: ["Increasing the hop count limit", "Implementing hold-down timers", "Correcting mismatched subnet masks", "Configuring route filtering"], correctAnswer: 3, explanation: "Route filtering or correct advertisement policies can prevent loops; timers help but proper filtering is key." },
      { id: 12, question: "What is the main difference between TCP and UDP?", options: ["TCP is connectionless, while UDP is connection-oriented", "TCP is connection-oriented, while UDP is connectionless", "TCP is faster than UDP", "UDP is more secure than TCP"], correctAnswer: 1, explanation: "TCP is connection-oriented and reliable; UDP is connectionless and lightweight." },
      { id: 13, question: "Which protocol is typically used for streaming media?", options: ["TCP", "UDP", "SCTP", "RTP"], correctAnswer: 3, explanation: "RTP over UDP is commonly used for real-time streaming to reduce latency." },
      { id: 14, question: "How does TCP ensure data is delivered reliably and in the correct order?", options: ["By using error detection codes", "By using sequence numbers and acknowledgments", "By compressing data packets", "By encrypting data packets"], correctAnswer: 1, explanation: "TCP uses sequence numbers and ACKs to provide ordered, reliable delivery." },
      { id: 15, question: "In TCP, what mechanism is used to control the rate of data transmission to prevent network congestion?", options: ["Error correction", "Flow control", "Data encryption", "Data compression"], correctAnswer: 1, explanation: "TCP uses flow control (windowing) and congestion control algorithms to manage throughput." }
    ]
  },
  {
    id: 121,
    companyName: "Operating Systems - Part 1",
    logoSrc: "/operating-systems.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "Process scheduling basics and algorithms (FCFS, Round Robin).",
    reviews: [],
    mcqQuestions: [
      { id: 1, question: "Which scheduling algorithm assigns CPU to the process that arrives first?", options: ["Round Robin", "Shortest Job First", "First-Come, First-Served", "Priority Scheduling"], correctAnswer: 2, explanation: "FCFS schedules processes in the order they arrive." },
      { id: 2, question: "Which scheduling algorithm gives each process a fixed time slice called quantum?", options: ["Round Robin", "FCFS", "SJF", "Priority"], correctAnswer: 0, explanation: "Round Robin assigns a time quantum to each ready process in a cyclic order." },
      { id: 3, question: "What is a disadvantage of FCFS scheduling?", options: ["Starvation of short jobs", "High context switching", "Requires preemption", "Complex implementation"], correctAnswer: 0, explanation: "FCFS can cause long waiting times for short jobs (convoy effect)." },
      { id: 4, question: "Which metric measures average time a process waits in ready queue?", options: ["Turnaround time", "Waiting time", "Response time", "Throughput"], correctAnswer: 1, explanation: "Waiting time is the average time a process spends waiting in the ready queue." },
      { id: 5, question: "Increasing quantum in Round Robin tends to:", options: ["Decrease context switches and approach FCFS", "Increase context switches", "Cause starvation", "Make it real-time"], correctAnswer: 0, explanation: "Larger quantum reduces context switches; behavior approaches FCFS." },
      { id: 6, question: "What is preemptive scheduling?", options: ["Scheduler only runs at boot", "The CPU can be taken away from a running process", "Processes run without interruption", "Only one process exists"], correctAnswer: 1, explanation: "Preemption allows the OS to interrupt a running process to schedule another." },
      { id: 7, question: "Which scheduling algorithm minimizes average waiting time if job lengths are known?", options: ["Round Robin", "SJF (Shortest Job First)", "FCFS", "Priority"], correctAnswer: 1, explanation: "SJF minimizes average waiting time when accurate job lengths are known." },
      { id: 8, question: "What does throughput measure in scheduling?", options: ["Number of processes completed per unit time", "Time taken by a single process", "Memory utilization", "Number of context switches"], correctAnswer: 0, explanation: "Throughput is the rate of completed processes per time unit." },
      { id: 9, question: "Which scheduling policy is best for interactive systems requiring good response time?", options: ["SJF", "Round Robin", "FCFS", "Batch scheduling"], correctAnswer: 1, explanation: "Round Robin offers better response time for interactive tasks." },
      { id: 10, question: "What is the impact of very small time quantum in Round Robin?", options: ["Fewer context switches", "High context switching overhead", "Starvation", "Improved throughput always"], correctAnswer: 1, explanation: "Very small quantum increases context switching and decreases efficiency." },
      { id: 11, question: "Which metric represents time from submission to completion of a process?", options: ["Waiting time", "Turnaround time", "Response time", "Latency"], correctAnswer: 1, explanation: "Turnaround time is the total time between submission and completion." },
      { id: 12, question: "Which scheduling algorithm may cause starvation for long-running processes?", options: ["SJF (non-preemptive)", "FCFS", "Round Robin", "None"], correctAnswer: 0, explanation: "SJF favors short jobs and can starve long jobs if preemption occurs." },
      { id: 13, question: "Priority scheduling can be improved to avoid starvation by using:", options: ["Aging", "Smaller quantum", "FCFS", "Increasing priority only"], correctAnswer: 0, explanation: "Aging gradually increases priority of waiting processes to prevent starvation." },
      { id: 14, question: "What causes context switch overhead?", options: ["Saving/restoring CPU registers and state", "Disk IO", "Memory allocation", "Process creation only"], correctAnswer: 0, explanation: "Context switch requires saving and restoring process state which costs time." },
      { id: 15, question: "Which scheduling is non-preemptive by default?", options: ["Round Robin", "FCFS", "Preemptive SJF", "Multilevel feedback"], correctAnswer: 1, explanation: "FCFS is non-preemptive unless explicitly designed otherwise." }
    ]
  },
  {
    id: 122,
    companyName: "Operating Systems - Part 2",
    logoSrc: "/operating-systems.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "Deadlocks: conditions, detection, prevention and avoidance.",
    reviews: [],
    mcqQuestions: [
      { id: 1, question: "Which of the following is NOT one of the necessary conditions for a deadlock?", options: ["Mutual exclusion", "Hold and wait", "Preemption", "Circular wait"], correctAnswer: 2, explanation: "No preemption is a required condition; 'Preemption' being present would prevent deadlock." },
      { id: 2, question: "What is the circular wait condition?", options: ["Processes waiting for I/O", "A ring of processes each waiting for a resource held by the next", "A dead network loop", "Priority inversion"], correctAnswer: 1, explanation: "Circular wait is when processes form a cycle each waiting for a resource held by another in the cycle." },
      { id: 3, question: "Which algorithm is used to detect a deadlock in resource allocation graphs?", options: ["Banker's algorithm", "Cycle detection", "Dijkstra's algorithm", "Bellman-Ford"], correctAnswer: 1, explanation: "Cycle detection in the resource-allocation graph can reveal possible deadlocks." },
      { id: 4, question: "Banker's algorithm is mainly used for:", options: ["Preventing deadlocks by safe-state checks", "Detecting deadlocks at runtime", "Killing processes", "Managing memory"], correctAnswer: 0, explanation: "Banker's algorithm checks if resource allocation keeps the system in a safe state, preventing deadlock." },
      { id: 5, question: "One prevention strategy for deadlocks is to eliminate which condition?", options: ["Mutual exclusion", "Hold and wait", "No preemption", "Circular wait"], correctAnswer: 1, explanation: "Preventing hold-and-wait by requiring processes to request all resources at once avoids deadlock." },
      { id: 6, question: "What is 'preemption' in the context of deadlock handling?", options: ["Forcing a process to release resources", "Removing processes", "Scheduling algorithm name", "Process creation"], correctAnswer: 0, explanation: "Preemption allows forcibly taking resources from a process to break deadlocks." },
      { id: 7, question: "Which strategy avoids deadlocks by resource ordering?", options: ["Request-all-at-once", "Resource hierarchy (ordering)", "Banker's algorithm", "Aging"], correctAnswer: 1, explanation: "Imposing a global ordering on resources and requiring acquisition in order prevents circular wait." },
      { id: 8, question: "Detecting deadlock and then recovering typically involves:", options: ["Ignoring it", "Killing or rolling back processes", "Rebooting the machine", "Increasing memory"], correctAnswer: 1, explanation: "Recovery often requires terminating or rolling back processes to free resources." },
      { id: 9, question: "Which is a trade-off of deadlock prevention techniques?", options: ["Increased resource utilization", "Reduced concurrency or resource utilization", "Faster performance", "No trade-offs"], correctAnswer: 1, explanation: "Preventing deadlocks can reduce concurrency by restricting resource usage patterns." },
      { id: 10, question: "What does 'deadlock recovery' mean?", options: ["Restarting OS", "Detecting deadlock and taking action to make progress", "Preventing deadlocks ahead of time", "Allocating more resources"], correctAnswer: 1, explanation: "Recovery means detecting deadlocks then killing or rolling back processes to resolve it." },
      { id: 11, question: "Which of the following can help avoid deadlock without preemption?", options: ["Banker's algorithm", "Random allocation", "Increasing CPU speed", "Using more RAM"], correctAnswer: 0, explanation: "Banker's algorithm simulates allocation and avoids entering unsafe states." },
      { id: 12, question: "Which condition would allow using preemption to handle potential deadlocks?", options: ["Resources are sharable", "Resources can be forcibly taken back", "Resources are infinite", "Processes are stateless"], correctAnswer: 1, explanation: "If resources support safe preemption, the system can recover by taking resources back." },
      { id: 13, question: "What is 'starvation' and how is it related to deadlocks?", options: ["Starvation is same as deadlock", "Starvation is indefinite postponement and different from deadlock", "Starvation occurs only in single-threaded apps", "Starvation is caused by preemption"], correctAnswer: 1, explanation: "Starvation is indefinite delay of a process; it is distinct from deadlock though prevention strategies sometimes trade off with starvation." },
      { id: 14, question: "Which of the following is NOT a safe recovery action for deadlock?", options: ["Killing processes", "Preempting resources", "Rolling back processes", "Automatically granting extra resources permanently"], correctAnswer: 3, explanation: "Permanently granting extra resources is not a safe general recovery strategy." },
      { id: 15, question: "How does resource ordering prevent circular wait?", options: ["By randomizing requests", "By enforcing that resources are always requested in an increasing order", "By allowing simultaneous requests", "By using priorities only"], correctAnswer: 1, explanation: "A strict global order on resources prevents cycles in resource allocation graphs." }
    ]
  },
  {
    id: 123,
    companyName: "Operating Systems - Part 3",
    logoSrc: "/operating-systems.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "Memory management: paging, segmentation, virtual memory, TLB and page replacement.",
    reviews: [],
    mcqQuestions: [
      { id: 1, question: "What is paging in memory management?", options: ["Dividing memory into fixed-size frames and processes into pages", "Dividing programs by function", "Allocating continuous memory blocks", "A type of file system"], correctAnswer: 0, explanation: "Paging divides physical memory into fixed-size frames and logical memory into pages." },
      { id: 2, question: "What problem does segmentation primarily address?", options: ["Fragmentation only", "Providing logical view of memory (modules/segments)", "Disk scheduling", "Process scheduling"], correctAnswer: 1, explanation: "Segmentation lets programs be organized into logically meaningful segments (code, stack, heap)." },
      { id: 3, question: "What is virtual memory?", options: ["Physical RAM only", "Disk storage used as extra RAM and an illusion of larger memory", "A type of CPU register", "A backup technique"], correctAnswer: 1, explanation: "Virtual memory allows processes to use more memory than physical RAM by paging to disk." },
      { id: 4, question: "What is the role of the TLB (Translation Lookaside Buffer)?", options: ["Store recent page table translations to speed up address translation", "Manage disk I/O", "Schedule processes", "Encrypt memory"], correctAnswer: 0, explanation: "TLB caches recent virtual-to-physical page translations to accelerate address translation." },
      { id: 5, question: "Which page replacement algorithm replaces the page that will not be used for the longest time?", options: ["FIFO", "LRU (Least Recently Used)", "Optimal (Belady's)", "Clock"], correctAnswer: 2, explanation: "Optimal replacement (Belady's) replaces the page not used for the longest future time (theoretical best)." },
      { id: 6, question: "What is external fragmentation?", options: ["Wasted memory within allocated blocks", "Wasted memory between allocated blocks", "Swap file overflow", "Disk fragmentation"], correctAnswer: 1, explanation: "External fragmentation is unusable free memory scattered between allocated regions." },
      { id: 7, question: "Which technique reduces internal fragmentation by using variable-sized segments?", options: ["Paging", "Segmentation", "Fixed partitioning", "Swapping"], correctAnswer: 1, explanation: "Segmentation uses variable-sized segments matching logical program regions." },
      { id: 8, question: "What does demand paging do?", options: ["Loads all program pages at start", "Loads pages only when referenced", "Removes pages periodically", "Preloads pages"], correctAnswer: 1, explanation: "Demand paging loads pages into memory only when they are accessed." },
      { id: 9, question: "What is thrashing?", options: ["Excessive paging activity causing low CPU utilization and slowdown", "Proper memory management", "A scheduling algorithm", "A file system error"], correctAnswer: 0, explanation: "Thrashing occurs when the system spends most time swapping pages rather than executing processes." },
      { id: 10, question: "Which data structure maps virtual page numbers to physical frames?", options: ["Page table", "TLB", "Stack", "Heap"], correctAnswer: 0, explanation: "Page table stores the mapping from virtual page numbers to physical frame numbers." },
      { id: 11, question: "Which page replacement algorithm approximates LRU with less overhead?", options: ["First-In-First-Out", "Clock (second chance)", "Random", "Optimal"], correctAnswer: 1, explanation: "Clock algorithm provides a practical approximation of LRU using a circular buffer and reference bits." },
      { id: 12, question: "What is a page fault?", options: ["A successful memory access", "An access to a page not currently in physical memory", "A disk failure", "A CPU exception unrelated to memory"], correctAnswer: 1, explanation: "Page fault occurs when a referenced page is not present in physical memory and must be loaded." },
      { id: 13, question: "Which approach is used to reduce page table size for processes with sparse address spaces?", options: ["Inverted page table", "Contiguous allocation", "Fixed partitions", "Multiprogramming"], correctAnswer: 0, explanation: "Inverted page tables store one entry per physical frame and can reduce memory for page tables." },
      { id: 14, question: "What is the main benefit of using virtual memory?", options: ["Eliminates need for OS", "Allows larger address space than physical RAM and simplifies programming", "Increases CPU clock speed", "Prevents all crashes"], correctAnswer: 1, explanation: "Virtual memory provides illusion of larger memory and isolates processes." },
      { id: 15, question: "Which metric is important to monitor to detect thrashing?", options: ["CPU utilization falls while paging rate rises", "High disk capacity", "Small page size", "Low number of processes"], correctAnswer: 0, explanation: "Thrashing shows low CPU utilization and high paging activity." }
    ]
  },
  {
    id: 124,
    companyName: "Operating Systems - Part 4",
    logoSrc: "/operating-systems.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "Processes vs threads, multithreading, synchronization, context switching.",
    reviews: [],
    mcqQuestions: [
      { id: 1, question: "Which statement is true about threads and processes?", options: ["Threads have separate memory spaces, processes share memory", "Threads are lighter weight and share the same process memory space", "Threads cannot run concurrently", "Processes are lighter than threads"], correctAnswer: 1, explanation: "Threads are lightweight and share process memory; processes have separate address spaces." },
      { id: 2, question: "What is the main benefit of multithreading?", options: ["Simpler code", "Better utilization of CPU and responsiveness", "Eliminates race conditions", "Removes need for synchronization"], correctAnswer: 1, explanation: "Multithreading improves CPU utilization and responsiveness but requires synchronization." },
      { id: 3, question: "What is context switching?", options: ["Switching CPU from user to kernel mode", "Saving/restoring CPU state to switch between processes or threads", "Copying files", "Allocating memory"], correctAnswer: 1, explanation: "Context switch saves and restores CPU state to switch execution between tasks." },
      { id: 4, question: "Which problem arises when multiple threads access shared data without synchronization?", options: ["Deadlock", "Race condition", "Thrashing", "Paging"], correctAnswer: 1, explanation: "Race conditions occur when threads concurrently access and modify shared data improperly." },
      { id: 5, question: "Which primitive can be used to ensure mutual exclusion?", options: ["Semaphore/Mutex", "Signal handler", "Page table", "Scheduler"], correctAnswer: 0, explanation: "Semaphores and mutexes are synchronization primitives providing mutual exclusion." },
      { id: 6, question: "What is the difference between user-level threads and kernel-level threads?", options: ["User threads are scheduled by kernel", "Kernel threads are managed by kernel and visible to OS scheduler", "User threads require system calls for context switches always", "No difference"], correctAnswer: 1, explanation: "Kernel threads are scheduled by the OS; user threads are managed in user space and may be invisible to the kernel." },
      { id: 7, question: "Which synchronization primitive allows a thread to wait until some condition is true?", options: ["Mutex", "Condition variable", "Semaphore only", "Critical section"], correctAnswer: 1, explanation: "Condition variables allow threads to wait and be signaled when conditions change." },
      { id: 8, question: "Why are fine-grained locks preferred over coarse-grained locks?", options: ["Simpler code", "Better concurrency and less contention", "Fewer bugs", "They eliminate deadlocks"], correctAnswer: 1, explanation: "Fine-grained locks increase concurrency by reducing contention between threads." },
      { id: 9, question: "What is priority inversion?", options: ["High priority tasks always run", "A lower-priority task holds a resource needed by a higher-priority task", "A type of scheduling algorithm", "A memory management issue"], correctAnswer: 1, explanation: "Priority inversion occurs when a low-priority task blocks progress of a higher-priority task by holding resources." },
      { id: 10, question: "Which technique can be used to mitigate priority inversion?", options: ["Priority inheritance", "Increase quantum", "Disable preemption", "Use larger page size"], correctAnswer: 0, explanation: "Priority inheritance temporarily raises the priority of the resource-holder to reduce inversion effects." },
      { id: 11, question: "Which is an advantage of multi-core processors for multithreading?", options: ["Allows true parallel execution of threads", "Reduces need for locks", "Eliminates context switches", "Removes race conditions"], correctAnswer: 0, explanation: "Multi-core CPUs can execute multiple threads truly in parallel on different cores." },
      { id: 12, question: "Which system call is typically used to create a new process in Unix-like systems?", options: ["fork()", "pthread_create()", "exec()", "spawn()"], correctAnswer: 0, explanation: "fork() creates a new process by duplicating the calling process." },
      { id: 13, question: "Which function is commonly used to create threads in POSIX?", options: ["fork()", "pthread_create()", "clone()", "spawn_thread()"], correctAnswer: 1, explanation: "pthread_create() is the POSIX API to create threads in C." },
      { id: 14, question: "What cost is associated with context switching between processes compared to threads?", options: ["Processes have lower cost", "Processes have higher context switch cost than threads", "Both are identical", "Threads cannot be context switched"], correctAnswer: 1, explanation: "Process context switches are heavier because of separate address space changes; thread switches are lighter." },
      { id: 15, question: "Which debugging issue is specific to multithreaded programs?", options: ["Memory leaks only", "Race conditions and nondeterministic bugs", "Syntax errors", "File system corruption"], correctAnswer: 1, explanation: "Multithreaded programs can exhibit nondeterministic race conditions that are hard to reproduce and debug." }
    ]
  },
  {
    id: 125,
    companyName: "Operating Systems - Part 5",
    logoSrc: "/operating-systems.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "File systems, I/O, MMU, system calls and file attributes.",
    reviews: [],
    mcqQuestions: [
      { id: 1, question: "Which component of an OS is primarily responsible for managing files?", options: ["File System Manager", "Memory Manager", "Process Manager", "Device Driver"], correctAnswer: 0, explanation: "The file system manager organizes and handles file operations on storage media." },
      { id: 2, question: "What is an inode in Unix-like file systems?", options: ["A network node", "A data structure storing file metadata", "A file name entry", "A protocol"], correctAnswer: 1, explanation: "An inode stores metadata like permissions, owner, timestamps and pointers to data blocks." },
      { id: 3, question: "Which technique improves file system reliability by recording intentions before applying changes?", options: ["Defragmentation", "Journaling", "Copy-on-write", "Caching"], correctAnswer: 1, explanation: "Journaling records changes in a log to help recover from crashes without corrupting file system." },
      { id: 4, question: "What is the role of the Memory Management Unit (MMU)?", options: ["Translate virtual to physical addresses", "Load device drivers", "Schedule processes", "Manage network"], correctAnswer: 0, explanation: "The MMU performs address translation from virtual addresses to physical frames." },
      { id: 5, question: "Which system call in Unix is used to open a file?", options: ["open()", "read()", "write()", "close()"], correctAnswer: 0, explanation: "open() is used to obtain a file descriptor for subsequent I/O operations." },
      { id: 6, question: "Which file system operation reduces fragmentation and improves contiguity?", options: ["Formatting", "Defragmentation", "Mounting", "Journaling"], correctAnswer: 1, explanation: "Defragmentation reorganizes files to reduce fragmentation and speed access." },
      { id: 7, question: "What is the primary purpose of DMA (Direct Memory Access)?", options: ["Increase CPU usage", "Allow devices to read/write memory without CPU involvement", "Encrypt I/O", "Manage processes"], correctAnswer: 1, explanation: "DMA lets peripherals transfer data directly to memory, reducing CPU load." },
      { id: 8, question: "Which file system feature helps quickly recover from crashes?", options: ["Journaling", "Large block size", "No metadata", "Read-only mode"], correctAnswer: 0, explanation: "Journaling or copy-on-write systems improve crash recovery." },
      { id: 9, question: "Which attribute is commonly stored in a file's metadata?", options: ["Color", "Owner and permissions", "Execution time", "Network address"], correctAnswer: 1, explanation: "Metadata includes owner, permissions, timestamps, and size." },
      { id: 10, question: "What is a mount point?", options: ["A disk scheduling algorithm", "A directory in which a filesystem is attached", "A device driver", "A kernel module"], correctAnswer: 1, explanation: "Mount points attach file system hierarchies at directories in the OS namespace." },
      { id: 11, question: "Which ioctl-like interface is used to interact with device-specific features?", options: ["read()", "write()", "ioctl()", "open()"], correctAnswer: 2, explanation: "ioctl() provides device-specific control operations beyond regular I/O." },
      { id: 12, question: "What does 'seek' do in file I/O?", options: ["Moves file pointer to a specified location", "Deletes the file", "Locks the file", "Copies file contents"], correctAnswer: 0, explanation: "seek changes the current file offset for subsequent read/write operations." },
      { id: 13, question: "Which policy can improve file read performance by keeping frequently accessed data in memory?", options: ["Caching", "Compression", "Encryption", "Journaling"], correctAnswer: 0, explanation: "Caching keeps hot data in RAM to reduce disk I/O latency." },
      { id: 14, question: "Which is a common strategy for securing file access?", options: ["Open permissions for all", "Use least-privilege access and proper permission bits", "Disable authentication", "Allow root-only access to everything"], correctAnswer: 1, explanation: "Least-privilege and correct permission models reduce security risks." },
      { id: 15, question: "Which tool helps find disk usage by directory in Unix?", options: ["df", "du", "ls", "mount"], correctAnswer: 1, explanation: "'du' reports disk usage for directories and files." }
    ]
  },
  {
    id: 126,
    companyName: "C Programming - Part 1",
    logoSrc: "/c.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "Basics of C: compilation, syntax, data types, and Hello World.",
    reviews: [],
    mcqQuestions: [
      { id: 1, question: "Why is learning programming important in today's world?", options: ["For academic purposes only", "To automate and solve complex problems", "Only for software development", "For entertainment purposes only"], correctAnswer: 1, explanation: "Programming helps automate tasks and solve complex problems across domains." },
      { id: 2, question: "What is the main function of a compiler in programming?", options: ["To write code", "To interpret code", "To convert code into machine language", "To debug code"], correctAnswer: 2, explanation: "A compiler translates source code into machine language executable by the CPU." },
      { id: 3, question: "Which of the following is true about interpreters?", options: ["They execute programs faster than compilers", "They translate the entire program at once", "They translate and execute code line by line", "They are not used in modern programming"], correctAnswer: 2, explanation: "Interpreters translate and run code line-by-line at runtime." },
      { id: 4, question: "How does a compiler differ from an interpreter?", options: ["A compiler executes code, while an interpreter does not", "A compiler debugs code, while an interpreter does not", "A compiler translates the entire program at once, while an interpreter translates it line by line", "A compiler is used only in C programming, while an interpreter is not"], correctAnswer: 2, explanation: "Compilers perform a whole-program translation; interpreters translate/exeute line-by-line." },
      { id: 5, question: "What is the primary purpose of writing a 'Hello World' program when learning a new programming language?", options: ["To test if the language supports string operations", "To learn complex programming concepts", "To demonstrate basic syntax and output", "To introduce advanced programming features"], correctAnswer: 2, explanation: "'Hello World' verifies environment setup and demonstrates basic syntax and output." },
      { id: 6, question: "What will be the output of the following C program?\n#include <stdio.h>\nint main() {\nprintf(\"Hello, World!\");\nreturn 0;\n}", options: ["Hello, World!", "Syntax Error", "0", "Nothing"], correctAnswer: 0, explanation: "The program prints the string 'Hello, World!'." },
      { id: 7, question: "Identify the error in this C program:\n#include <stdio.h>\nint main() {\nprint(\"Hello, World!\");\nreturn 0;\n}", options: ["Missing #include statement", "Incorrect function name", "Syntax error in return statement", "No error"], correctAnswer: 1, explanation: "C uses printf(), not print(): the function name is incorrect." },
      { id: 8, question: "Which of the following is not a keyword in C?", options: ["int", "char", "include", "float"], correctAnswer: 2, explanation: "'include' is a preprocessor directive, not a C keyword." },
      { id: 9, question: "What data type would you use to store a character in C?", options: ["int", "float", "char", "double"], correctAnswer: 2, explanation: "'char' stores single characters in C." },
      { id: 10, question: "Which of the following is a valid identifier in C?", options: ["2ndName", "_name", "#name", "none of these"], correctAnswer: 1, explanation: "Identifiers cannot start with a digit or contain '#'; '_name' is valid." },
      { id: 11, question: "What is the size of 'int' data type in C?", options: ["Depends on the system", "4 bytes", "8 bytes", "2 bytes"], correctAnswer: 0, explanation: "Size of 'int' depends on the platform and compiler (commonly 4 bytes on modern systems)." },
      { id: 12, question: "What is the difference between 'float' and 'double' data types in C?", options: ["Syntax only", "Precision", "Usage", "No difference"], correctAnswer: 1, explanation: "'double' typically has greater precision than 'float'." },
      { id: 13, question: "What will be the output of the following C code?\nint main() {\nchar c = 'A';\nprintf(\"%d\", c);\nreturn 0;\n}", options: ["65", "A", "Syntax Error", "None of these"], correctAnswer: 0, explanation: "Printing a char with %d outputs its ASCII value (65 for 'A')." },
      { id: 14, question: "Identify the error in this C code:\nint main() {\nint number = 100.5;\nprintf(\"%d\", number);\nreturn 0;\n}", options: ["Assigning float to int", "Syntax error", "No error", "Wrong printf format"], correctAnswer: 0, explanation: "Assigning a floating value to an int causes implicit truncation and is typically incorrect." },
      { id: 15, question: "Spot the error in this code snippet:\n#include <stdio.h>\nint main() {\nconst int age; age = 30;\nprintf(\"%d\", age);\nreturn 0;\n}", options: ["Uninitialized constant", "Missing return statement", "Syntax error in printf statement", "No error"], correctAnswer: 0, explanation: "A const variable must be initialized at declaration; assigning later is invalid." }
    ]
  },
  {
    id: 127,
    companyName: "C Programming - Part 2",
    logoSrc: "/c.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "Input/output, operators, precedence, and basic expressions in C.",
    reviews: [],
    mcqQuestions: [
      { id: 1, question: "What is the purpose of the printf function in C?", options: ["To read input", "To print output", "To perform calculations", "To control program flow"], correctAnswer: 1, explanation: "printf() is used to write formatted output to stdout." },
      { id: 2, question: "What does %d signify in the printf or scanf function?", options: ["Double data type", "Decimal integer", "Dynamic allocation", "Directory path"], correctAnswer: 1, explanation: "%d is the format specifier for signed decimal integers." },
      { id: 3, question: "What will be the output of the following C code?\nint main() {\nprintf(\"%d\", 500);\nreturn 0;\n}", options: ["500", "%d", "Syntax Error", "None of these"], correctAnswer: 0, explanation: "Printing an integer literal with %d displays that integer." },
      { id: 4, question: "What will the following C code output?\nint main() {\nint num;\nscanf(\"%d\", &num);\nprintf(\"%d\", num);\nreturn 0;\n}", options: ["The inputted number", "%d", "Syntax Error", "Nothing"], correctAnswer: 0, explanation: "scanf reads into num and printf prints the value entered." },
      { id: 5, question: "Pseudocode:\nREAD number PRINT \"The number is \", number\nWhat does this pseudocode do?", options: ["Reads and prints a number", "Prints a fixed number", "Generates a random number", "None of these"], correctAnswer: 0, explanation: "It reads a number from input and prints it." },
      { id: 6, question: "Identify the error in this C code:\nint main() {\nint x;\nscanf(\"%d\", x);\nprintf(\"%d\", x);\nreturn 0;\n}", options: ["Missing & in scanf", "Wrong format specifier", "No error", "Syntax error"], correctAnswer: 0, explanation: "scanf needs the address of the variable (&x) to store the input." },
      { id: 7, question: "Find the mistake in this code:\nint main() {\nfloat num;\nprintf(\"Enter a number: \" );\nscanf(\"%f\", &num);\nprintf(\"You entered: %f\", num);\nreturn 0;\n}", options: ["Missing & in scanf", "Incorrect format specifier in printf", "No error", "Syntax error"], correctAnswer: 0, explanation: "scanf requires &num when reading into a variable." },
      { id: 8, question: "Which operator is used for division in C?", options: ["-", "*", "/", "=+"], correctAnswer: 2, explanation: "'/' is the division operator in C." },
      { id: 9, question: "What does the '==' operator check?", options: ["Assignment", "Equality", "Greater than", "Less than"], correctAnswer: 1, explanation: "'==' checks for equality between two values." },
      { id: 10, question: "What is the result of the logical expression (1 && 0)?", options: ["1", "0", "True", "False"], correctAnswer: 1, explanation: "Logical AND of 1 and 0 yields 0 (false)." },
      { id: 11, question: "What does the '+' operator do in C?", options: ["Addition", "Subtraction", "Multiplication", "Division"], correctAnswer: 0, explanation: "'+' performs arithmetic addition." },
      { id: 12, question: "Which operator has higher precedence, '+' or '*'?", options: ["*", "Both are same", "=+", "None"], correctAnswer: 0, explanation: "'*' (multiplication) has higher precedence than '+' (addition)." },
      { id: 13, question: "What does the '!' operator do in C?", options: ["Negation", "Addition", "Multiplication", "None"], correctAnswer: 0, explanation: "'!' is the logical NOT operator (negation)." },
      { id: 14, question: "What is the output of the expression 2<3?", options: ["0", "1", "2", "3"], correctAnswer: 1, explanation: "Relational expressions evaluate to 1 (true) or 0 (false); 2<3 yields 1." },
      { id: 15, question: "What will be the output of the following C code?\nint main() {\nint a = 10, b = 5;\nprintf(\"%d\", a / b);\nreturn 0;\n}", options: ["2", "5", "0", "10"], correctAnswer: 0, explanation: "Integer division 10 / 5 gives 2." }
    ]
  },
  {
    id: 128,
    companyName: "C Programming - Part 3",
    logoSrc: "/c.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "Control flow, loops, functions, recursion, and common C constructs.",
    reviews: [],
    mcqQuestions: [
      { id: 1, question: "What will the following C code print?\nint main() {\nfor(int i = 0; i < 3; i++)\n{ printf(\"%d \", i); }\nreturn 0;\n}", options: ["0 1 2", "1 2 3", "0 1 2 3", "1 2 3 4"], correctAnswer: 0, explanation: "Loop prints 0,1,2 then exits." },
      { id: 2, question: "What does this C code do?\nint main()\n{ int i = 0;\nwhile(i < 5) { if(i == 2) break;\nprintf(\"%d \", i); i++; }\nreturn 0;\n}", options: ["Prints 0 1 2", "Prints 0 1", "Prints all numbers less than 5", "Prints nothing"], correctAnswer: 1, explanation: "When i==2, break exits the loop; output is 0 1." },
      { id: 3, question: "What is the output of the following C code?\nint main() {\nint x = 0; do {\nprintf(\"%d \", x);\nx++;\n} while(x < 3);\nreturn 0;\n}", options: ["0 1 2", "0 1", "1 2 3", "No output"], correctAnswer: 0, explanation: "do-while executes body then checks condition; outputs 0 1 2." },
      { id: 4, question: "Pseudocode:\nSET x TO 5 IF x GREATER THAN 0 AND x LESS THAN 10 THEN PRINT \"x is between 0 and 10\"\nWhat does it do?", options: ["Prints \"x is between 0 and 10\"", "Prints nothing", "Syntax error", "Prints \"x is not between 0 and 10\""], correctAnswer: 0, explanation: "x=5 satisfies the condition, so message is printed." },
      { id: 5, question: "Spot the error:\nint main() {\nint a = 10, b = 0;\nprintf(\"%d\", a / b);\nreturn 0;\n}", options: ["Division by zero", "Syntax error", "No error", "Wrong format specifier"], correctAnswer: 0, explanation: "Division by zero is undefined and an error at runtime." },
      { id: 6, question: "Identify the mistake:\nint main() {\nint x = 10, y; y = x == 10 ? x : 0;\nprintf(\"%d\", y);\nreturn 0;\n}", options: ["Incorrect use of ternary operator", "Syntax error", "No error", "Wrong variable used"], correctAnswer: 2, explanation: "Expression is correct; y will be assigned 10." },
      { id: 7, question: "What does the break statement do in a loop?", options: ["Exits the loop", "Skips the current iteration", "Repeats the loop", "Does nothing"], correctAnswer: 0, explanation: "break immediately exits the nearest loop." },
      { id: 8, question: "What is the difference between for and while loops?", options: ["Syntax", "Execution speed", "Functionality", "No difference"], correctAnswer: 0, explanation: "Main difference is syntactic; both can implement the same logic." },
      { id: 9, question: "In a switch statement, what happens if a break statement is omitted from a case?", options: ["The program exits", "The case is skipped", "Fall-through to the next case", "Syntax error"], correctAnswer: 2, explanation: "Omitting break causes execution to continue into the next case (fall-through)." },
      { id: 10, question: "What is the purpose of the continue statement in loops?", options: ["Terminates the loop", "Skips to the next iteration", "Does nothing", "Exits the program"], correctAnswer: 1, explanation: "continue skips the current iteration and proceeds with the next one." },
      { id: 11, question: "When is a do-while loop preferred over a while loop?", options: ["When the condition is complex", "When the loop must execute at least once", "When the loop should not execute", "When the loop is infinite"], correctAnswer: 1, explanation: "do-while guarantees the body runs at least once before checking the condition." },
      { id: 12, question: "Spot the mistake:\nint main() {\nfor(int i = 0; i < 5; i++) {\nif(i == 2)\ncontinue;\nprintf(\"%d \", i);\n} return 0;\n}", options: ["Infinite loop", "Skips printing 2", "Syntax error", "No error"], correctAnswer: 1, explanation: "continue causes the loop to skip printing when i==2." },
      { id: 13, question: "What is the primary purpose of a function in C?", options: ["Code reuse and modularity", "Error handling", "Memory management", "User interface creation"], correctAnswer: 0, explanation: "Functions enable reuse and modular organization of code." },
      { id: 14, question: "What does 'pass by value' mean in C?", options: ["Passing a copy of the argument", "Passing the argument directly", "Passing the memory address", "Passing the variable type"], correctAnswer: 0, explanation: "In pass-by-value, a copy of the argument is passed to the function." },
      { id: 15, question: "What is recursion in C?", options: ["A function calling another function", "A function that has no return type", "A function calling itself", "A loop within a function"], correctAnswer: 2, explanation: "Recursion is when a function calls itself, often with different parameters." }
    ]
  },
  {
    id: 129,
    companyName: "C++ - Part 1",
    logoSrc: "/cpp.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "OOP basics: objects, classes, encapsulation, polymorphism and related concepts.",
    reviews: [],
    mcqQuestions: [
      { id: 1, question: "What is an object in object-oriented programming?", options: ["A code snippet", "A variable", "An instance of a class", "A function"], correctAnswer: 2, explanation: "An object is a concrete instance created from a class blueprint." },
      { id: 2, question: "Which of the following is a feature of procedure-oriented programming?", options: ["Class-based", "Focus on functions", "Inheritance", "Polymorphism"], correctAnswer: 1, explanation: "Procedure-oriented programming emphasizes procedures or functions to operate on data." },
      { id: 3, question: "In OOP, what does encapsulation refer to?", options: ["Storing data in arrays", "The process of inheritance", "Combining data and methods", "A type of loop"], correctAnswer: 2, explanation: "Encapsulation bundles data and the methods that operate on that data together and hides internal state." },
      { id: 4, question: "Which principle of OOP is illustrated by defining different methods with the same name but different parameters?", options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"], correctAnswer: 1, explanation: "Method overloading is a form of polymorphism (same name, different signatures)." },
      { id: 5, question: "What distinguishes a class from an object in OOP?", options: ["A class is a blueprint, while an object is an instance of a class", "A class cannot contain methods, while an object can", "Objects are templates, while classes are real entities", "There is no difference"], correctAnswer: 0, explanation: "Classes define structure and behavior; objects are instances of classes." },
      { id: 6, question: "Which concept in OOP allows for the same function to be used in different ways based on the object it is associated with?", options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"], correctAnswer: 3, explanation: "Polymorphism enables methods to behave differently based on the object type." },
      { id: 7, question: "Consider the following code snippet: class Animal { public: void eat() { cout << \"Eating...\"; } }; What is demonstrated in this code?", options: ["Inheritance", "Encapsulation", "Class definition", "Polymorphism"], correctAnswer: 2, explanation: "This snippet shows a class definition with a public method." },
      { id: 8, question: "Identify the issue in this C++ code snippet: class Car { public: int speed; void Car() { speed = 0; } };", options: ["Incorrect class constructor syntax", "Missing data encapsulation", "No error", "Inheritance misuse"], correctAnswer: 0, explanation: "Writing 'void Car()' defines a method, not a constructor; constructors have no return type." },
      { id: 9, question: "What is the role of comments in a C++ program?", options: ["To optimize code execution", "To define variables", "To provide documentation and explanation", "To declare constants"], correctAnswer: 2, explanation: "Comments document code for readers and do not affect execution." },
      { id: 10, question: "Which of these is not a fundamental data type in C++?", options: ["int", "float", "string", "char"], correctAnswer: 2, explanation: "In the core language, 'string' is a standard library type (std::string), not a built-in primitive." },
      { id: 11, question: "What is a variable in C++?", options: ["A constant value", "A data type", "A storage location with a name", "A keyword"], correctAnswer: 2, explanation: "A variable names a storage location that can hold values of a specified type." },
      { id: 12, question: "Which data type would be best to store a person's age?", options: ["int", "double", "bool", "char"], correctAnswer: 0, explanation: "An integer type (int) is most suitable for whole-number ages." },
      { id: 13, question: "What is a constant in C++?", options: ["A variable whose value can change", "A fixed value that cannot be altered during execution", "A type of operator", "A special function"], correctAnswer: 1, explanation: "Constants hold values that cannot be changed after initialization." },
      { id: 14, question: "What is the output of this C++ code?\nint main() {\nint x = 5;\ncout << x;\nreturn 0;\n}", options: ["0", "5", "x", "Error"], correctAnswer: 1, explanation: "The program prints the value of x which is 5." },
      { id: 15, question: "Identify the error in this C++ code: int main() { int 123number; return 0; }", options: ["Variable name starting with a digit", "Incorrect data type", "Syntax error in return statement", "No error"], correctAnswer: 0, explanation: "Identifiers cannot begin with a digit; '123number' is invalid." }
    ]
  },
  {
    id: 130,
    companyName: "C++ - Part 2",
    logoSrc: "/cpp.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "Operators, expressions, I/O, and basic syntax rules in C++.",
    reviews: [],
    mcqQuestions: [
      { id: 1, question: "Spot the error in this C++ code: const int num; num = 10; cout << num;", options: ["Missing variable initialization", "Incorrect use of const", "Syntax error in cout statement", "No error"], correctAnswer: 0, explanation: "A const variable must be initialized at declaration time; assigning later is invalid." },
      { id: 2, question: "What is the output of the expression 5 + 3 * 2 in C++?", options: ["16", "11", "10", "8"], correctAnswer: 1, explanation: "Multiplication has higher precedence: 3*2=6; 5+6=11." },
      { id: 3, question: "Which operator is used for logical AND in C++?", options: ["&&", "&", "||", "=="], correctAnswer: 0, explanation: "'&&' is the logical AND operator; '&' is bitwise AND." },
      { id: 4, question: "What does the ++ operator do in C++?", options: ["Divides the value by two", "Decreases the value by one", "Increases the value by one", "Squares the value"], correctAnswer: 2, explanation: "'++' increments a variable by one (pre- or post-increment forms exist)." },
      { id: 5, question: "In C++, what is the difference between == and =?", options: ["== is used for assignment, while = is used for comparison", "== is used for comparison, while = is used for assignment", "Both are used for assignment", "Both are used for comparison"], correctAnswer: 1, explanation: "'==' compares values; '=' assigns a value to a variable." },
      { id: 6, question: "What is the result of the expression !true && false in C++?", options: ["true", "false", "Syntax error", "None of the above"], correctAnswer: 1, explanation: "!true is false; false && false is false." },
      { id: 7, question: "What is the output of the following code?\nint a = 1;\nint b = 2;\ncout << (a++ + b);", options: ["3", "4", "Syntax error", "2"], correctAnswer: 0, explanation: "a++ yields 1 (post-increment), so 1 + 2 = 3; a becomes 2 afterward." },
      { id: 8, question: "What is the result of int x = 10; x *= 3; in C++?", options: ["30", "13", "33", "10"], correctAnswer: 0, explanation: "x *= 3 multiplies x by 3, giving 30." },
      { id: 9, question: "Pseudocode: SET a TO 5 IF a > 3 THEN PRINT \"Yes\" ELSE PRINT \"No\" What is the output?", options: ["Yes", "No", "Error", "None"], correctAnswer: 0, explanation: "Since 5 > 3, it prints 'Yes'." },
      { id: 10, question: "Pseudocode: SET x TO 10 SET y TO x MOD 4 PRINT y What does this print?", options: ["2", "4", "10", "0"], correctAnswer: 0, explanation: "10 mod 4 equals 2." },
      { id: 11, question: "Pseudocode: SET val TO 7 IF val < 10 AND val > 5 THEN PRINT \"In range\" ELSE PRINT \"Out of range\" What is the output?", options: ["In range", "Out of range", "Error", "None"], correctAnswer: 0, explanation: "7 is between 5 and 10, so it prints 'In range'." },
      { id: 12, question: "Pseudocode: SET num TO 15 SET result TO num DIV 2 PRINT result What does this print?", options: ["7.5", "7", "15", "Error"], correctAnswer: 1, explanation: "Integer division yields 7 (if DIV is integer division)." },
      { id: 13, question: "Pseudocode: IF (5 > 3) OR (8 < 6) THEN PRINT \"True\" ELSE PRINT \"False\" What is the output?", options: ["True", "False", "Error", "None"], correctAnswer: 0, explanation: "At least one condition is true so overall is True." },
      { id: 14, question: "Find the mistake: int num; num == 5; cout << num;", options: ["Misuse of equality operator", "Undeclared variable", "No error", "Syntax error in cout statement"], correctAnswer: 0, explanation: "'num == 5' is a comparison, not an assignment; it should be 'num = 5'." },
      { id: 15, question: "Identify the error: int x = 10; int y = ++x + 2; cout << x << \" \" << y;", options: ["Incorrect use of increment operator", "No error", "Syntax error in cout statement", "Misuse of assignment operator"], correctAnswer: 1, explanation: "This is valid; ++x pre-increments x to 11, y becomes 13; print shows '11 13'." }
    ]
  },
  {
    id: 131,
    companyName: "C++ - Part 3",
    logoSrc: "/cpp.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "N/A",
    attempts: 0,
    description: "Control flow, loops, functions, recursion, prototypes, and arrays in C++.",
    reviews: [],
    mcqQuestions: [
      { id: 1, question: "What is the purpose of the if statement in C++?", options: ["To execute a block of code multiple times", "To stop the execution of the program", "To make a decision", "To declare a variable"], correctAnswer: 2, explanation: "if evaluates a condition and executes code selectively." },
      { id: 2, question: "Which control flow statement is used for executing a block of code repeatedly based on a condition?", options: ["if", "else", "for", "switch"], correctAnswer: 2, explanation: "for (and while) loops execute blocks repeatedly based on conditions." },
      { id: 3, question: "What is the function of the break statement in a loop?", options: ["To pause the loop", "To skip an iteration of the loop", "To terminate the loop", "To continue to the next iteration of the loop"], correctAnswer: 2, explanation: "break exits the nearest loop immediately." },
      { id: 4, question: "In C++, the do-while loop is unique because it...", options: ["executes its block of code at least once", "is faster than other loops", "does not check a condition", "can only run a fixed number of times"], correctAnswer: 0, explanation: "do-while executes the body at least once before checking the condition." },
      { id: 5, question: "What is the primary difference between a for loop and a while loop in C++?", options: ["Syntax only", "While loop can run infinitely, for loop cannot", "For loop is used for arrays, while loop is not", "Initialization, condition checking, and increment/decrement are part of the for loop statement"], correctAnswer: 3, explanation: "for bundles init/condition/update in one statement; while separates them." },
      { id: 6, question: "What happens if the condition in an if statement is false?", options: ["The program terminates", "The else part is executed", "The program skips to the next loop", "None of the above"], correctAnswer: 1, explanation: "If present, the else branch runs when the if condition is false." },
      { id: 7, question: "What is the output of this code?\nint i = 0;\nwhile(i < 3) {\ncout << i; i++;\n}", options: ["012", "123", "Infinite loop", "Syntax error"], correctAnswer: 0, explanation: "Loop prints 0,1,2 as i increments from 0 to 2." },
      { id: 8, question: "Consider the code: for(int i = 0; i <= 2; i++) { cout << i; } What does it print?", options: ["012", "123", "Nothing", "Error"], correctAnswer: 0, explanation: "i runs 0..2 inclusive and prints 0 1 2." },
      { id: 9, question: "What is the output of the following code?\nint x = 10;\ndo { cout << x; x--; } while (x > 10);", options: ["Prints 10 once", "Prints 10 and then 9", "Prints numbers from 10 to 1", "No output"], correctAnswer: 0, explanation: "do-while executes body once; since x becomes 9, loop condition false afterward." },
      { id: 10, question: "Pseudocode: IF x > 10 THEN PRINT \"Greater\" ELSE PRINT \"Smaller or Equal\" If x is 8, what is printed?", options: ["Greater", "Smaller or Equal", "Error", "Nothing"], correctAnswer: 1, explanation: "8 is not greater than 10 so it prints 'Smaller or Equal'." },
      { id: 11, question: "Pseudocode: SET i TO 0 WHILE i < 3 DO PRINT i INCREMENT i What does this print?", options: ["012", "123", "Infinite loop", "Nothing"], correctAnswer: 0, explanation: "Prints 0 1 2 as loop increments i from 0 to 2." },
      { id: 12, question: "What is a function prototype in C++?", options: ["A function that always returns an integer", "The first call to a function in a program", "A declaration of a function before its definition", "A function without arguments"], correctAnswer: 2, explanation: "A prototype declares the function's signature so it can be referenced before definition." },
      { id: 13, question: "What is function overloading in C++?", options: ["Calling a function multiple times", "Defining multiple functions with the same name but different parameters", "Defining a function inside another function", "Using default arguments in a function"], correctAnswer: 1, explanation: "Overloading lets functions share a name with differing parameter lists." },
      { id: 14, question: "What is the purpose of default arguments in function definitions?", options: ["To specify what value a function returns", "To give a default value to a parameter if no argument is passed", "To make a parameter optional", "To overload a function"], correctAnswer: 1, explanation: "Default args supply a value when the caller omits that parameter." },
      { id: 15, question: "In C++, what is recursion?", options: ["A function calling another function", "A function that calls itself", "Repeatedly executing a loop", "A type of data structure"], correctAnswer: 1, explanation: "Recursion is when a function calls itself, typically with a base case to stop." }
    ]
  },
  {
    id: 38,
    companyName: "Computer Fundamentals - Part 2",
    logoSrc: "/number-systems.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "65%",
    attempts: 22000,
    description: "Number systems and binary arithmetic MCQs for technical rounds.",
    reviews: [{ name: "CS Student", imageSrc: "https://randomuser.me/api/portraits/women/15.jpg", text: "Great for number system concepts." }],
    mcqQuestions: [
      {
        id: 1,
        question: "What is the base of the binary number system?",
        options: ["2", "8", "10", "16"],
        correctAnswer: 0,
        explanation: "Binary number system uses base 2, with only digits 0 and 1."
      },
      {
        id: 2,
        question: "Which of the following number systems is commonly used in digital electronics and computing?",
        options: ["Decimal", "Binary", "Octal", "Hexadecimal"],
        correctAnswer: 1,
        explanation: "Binary is the fundamental number system used in digital electronics and computing."
      },
      {
        id: 3,
        question: "In the hexadecimal number system, which digit follows 9?",
        options: ["A", "B", "C", "D"],
        correctAnswer: 0,
        explanation: "In hexadecimal, after 9 comes A (representing 10 in decimal)."
      },
      {
        id: 4,
        question: "What is the binary equivalent of the decimal number 5?",
        options: ["0010", "0101", "1001", "1101"],
        correctAnswer: 1,
        explanation: "5 in decimal = 4 + 1 = 2² + 2⁰ = 101 in binary (or 0101 with leading zero)."
      },
      {
        id: 5,
        question: "Which of the following best describes the octal number system?",
        options: ["Base-2", "Base-8", "Base-10", "Base-16"],
        correctAnswer: 1,
        explanation: "Octal number system uses base 8, with digits 0-7."
      },
      {
        id: 6,
        question: "Convert the binary number 1101 to its decimal equivalent.",
        options: ["10", "11", "12", "13"],
        correctAnswer: 3,
        explanation: "1101₂ = 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8 + 4 + 0 + 1 = 13₁₀"
      },
      {
        id: 7,
        question: "What is the hexadecimal representation of the binary number 1111?",
        options: ["9", "A", "B", "F"],
        correctAnswer: 3,
        explanation: "1111₂ = 15₁₀ = F₁₆ in hexadecimal notation."
      },
      {
        id: 8,
        question: "How many unique values can be represented by 4 bits in binary?",
        options: ["8", "12", "16", "32"],
        correctAnswer: 2,
        explanation: "4 bits can represent 2⁴ = 16 unique values (0000 to 1111)."
      },
      {
        id: 9,
        question: "Which of the following is the correct binary representation of the decimal number 20?",
        options: ["10100", "10010", "11010", "11100"],
        correctAnswer: 0,
        explanation: "20₁₀ = 16 + 4 = 2⁴ + 2² = 10100₂"
      },
      {
        id: 10,
        question: "Convert the decimal number 7 to its binary equivalent.",
        options: ["0010", "0100", "0111", "1000"],
        correctAnswer: 2,
        explanation: "7₁₀ = 4 + 2 + 1 = 2² + 2¹ + 2⁰ = 111₂ (or 0111 with leading zero)"
      },
      {
        id: 11,
        question: "Convert the hexadecimal number A3 to its binary equivalent.",
        options: ["10100011", "11010011", "10011100", "10110101"],
        correctAnswer: 0,
        explanation: "A₁₆ = 1010₂ and 3₁₆ = 0011₂, so A3₁₆ = 10100011₂"
      },
      {
        id: 12,
        question: "A student converts a binary number 101010 to decimal but gets the result as 41. What is the correct result?",
        options: ["34", "40", "42", "44"],
        correctAnswer: 2,
        explanation: "101010₂ = 32 + 8 + 2 = 42₁₀"
      },
      {
        id: 13,
        question: "What is the binary equivalent of the IP address 192.168.0.1?",
        options: [
          "11000000.10101000.00000000.00000001",
          "11111111.11111111.11111111.11111111",
          "10101010.01010101.10101010.01010101",
          "00000000.00000000.00000000.00000000"
        ],
        correctAnswer: 0,
        explanation: "192=11000000, 168=10101000, 0=00000000, 1=00000001 in binary."
      },
      {
        id: 14,
        question: "Which of the following is the correct binary representation of the decimal number 10?",
        options: ["1010", "1001", "1100", "1110"],
        correctAnswer: 0,
        explanation: "10₁₀ = 8 + 2 = 2³ + 2¹ = 1010₂"
      },
      {
        id: 15,
        question: "What is the decimal equivalent of the octal number 17?",
        options: ["15", "17", "23", "25"],
        correctAnswer: 0,
        explanation: "17₈ = 1×8¹ + 7×8⁰ = 8 + 7 = 15₁₀"
      }
    ]
  },
  {
    id: 39,
    companyName: "Computer Fundamentals - Part 3",
    logoSrc: "/operating-systems.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "60%",
    attempts: 28000,
    description: "Operating systems and software concepts MCQs for technical interviews.",
    reviews: [{ name: "Placement Prep", imageSrc: "https://randomuser.me/api/portraits/men/25.jpg", text: "Essential OS concepts covered well." }],
    mcqQuestions: [
      {
        id: 1,
        question: "What is the main purpose of an operating system?",
        options: [
          "To perform calculations",
          "To manage computer hardware and software resources",
          "To display graphics",
          "To store data"
        ],
        correctAnswer: 1,
        explanation: "An operating system manages and coordinates hardware and software resources of a computer system."
      },
      {
        id: 2,
        question: "Which of the following is a function of the kernel in an operating system?",
        options: [
          "User interface design",
          "File management",
          "Memory management",
          "Hardware design"
        ],
        correctAnswer: 2,
        explanation: "The kernel manages core system resources including memory, processes, and hardware communication."
      },
      {
        id: 3,
        question: "What does the term 'multitasking' refer to in operating systems?",
        options: [
          "Running multiple operating systems simultaneously",
          "Running multiple processes simultaneously",
          "Using multiple monitors",
          "Using multiple user accounts"
        ],
        correctAnswer: 1,
        explanation: "Multitasking allows an operating system to execute multiple processes concurrently."
      },
      {
        id: 4,
        question: "Which of the following operating systems is designed for mobile devices?",
        options: ["Windows", "Linux", "Android", "macOS"],
        correctAnswer: 2,
        explanation: "Android is specifically designed as a mobile operating system for smartphones and tablets."
      },
      {
        id: 5,
        question: "What is the purpose of the bootloader in an operating system?",
        options: [
          "To run applications",
          "To manage files",
          "To load the operating system into memory",
          "To connect to the internet"
        ],
        correctAnswer: 2,
        explanation: "The bootloader is responsible for loading the operating system kernel into memory during startup."
      },
      {
        id: 6,
        question: "Which of the following best describes the difference between a process and a thread?",
        options: [
          "A process is a single task, while a thread is a group of tasks",
          "A process is a program in execution, while a thread is the smallest unit of execution within a process",
          "A thread is a program in execution, while a process is the smallest unit of execution within a thread",
          "A thread and a process are the same"
        ],
        correctAnswer: 1,
        explanation: "A process is an executing program, while threads are lightweight execution units within a process."
      },
      {
        id: 7,
        question: "Which command is used in Windows to view the list of running processes?",
        options: ["tasklist", "ps", "ls", "jobs"],
        correctAnswer: 0,
        explanation: "'tasklist' command in Windows displays all currently running processes."
      },
      {
        id: 8,
        question: "Which Linux command is used to display the current working directory?",
        options: ["pwd", "ls", "cd", "ps"],
        correctAnswer: 0,
        explanation: "'pwd' (print working directory) shows the current directory path in Linux."
      },
      {
        id: 9,
        question: "A user reports that their computer takes a long time to boot. Which operating system feature could be causing this issue?",
        options: ["Fast Startup", "Automatic Updates", "Virtual Memory", "System Restore"],
        correctAnswer: 1,
        explanation: "Automatic updates during boot can significantly slow down the startup process."
      },
      {
        id: 10,
        question: "A program is running slowly on a computer with sufficient RAM. Which operating system feature might be causing this issue?",
        options: ["Virtual Memory", "Task Scheduling", "Device Drivers", "Disk Cleanup"],
        correctAnswer: 1,
        explanation: "Poor task scheduling can cause programs to run slowly even with adequate resources."
      },
      {
        id: 11,
        question: "Which of the following is an example of system software?",
        options: ["Microsoft Word", "Adobe Photoshop", "Windows 10", "Google Chrome"],
        correctAnswer: 2,
        explanation: "Windows 10 is system software (operating system) that manages computer resources."
      },
      {
        id: 12,
        question: "What is the role of application software?",
        options: [
          "To manage hardware",
          "To perform specific tasks for users",
          "To control system resources",
          "To execute system commands"
        ],
        correctAnswer: 1,
        explanation: "Application software is designed to help users perform specific tasks like word processing or web browsing."
      },
      {
        id: 13,
        question: "Which software is used to browse the internet?",
        options: ["Antivirus", "Web Browser", "Operating System", "Text Editor"],
        correctAnswer: 1,
        explanation: "Web browsers like Chrome, Firefox, or Safari are used to access and navigate websites."
      },
      {
        id: 14,
        question: "What is the difference between system software and application software?",
        options: [
          "System software is optional, while application software is mandatory",
          "System software is used to perform specific tasks, while application software manages resources",
          "System software manages computer resources, while application software performs specific tasks for users",
          "There is no difference"
        ],
        correctAnswer: 2,
        explanation: "System software manages computer resources, while application software helps users accomplish specific tasks."
      },
      {
        id: 15,
        question: "Which of the following best describes the function of a driver in a computer system?",
        options: [
          "Stores data",
          "Translates commands between the operating system and hardware",
          "Protects against malware",
          "Manages internet connections"
        ],
        correctAnswer: 1,
        explanation: "Device drivers act as translators between the operating system and hardware components."
      }
    ]
  },
  {
    id: 40,
    companyName: "Computer Fundamentals - Part 4",
    logoSrc: "/networks.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "55%",
    attempts: 31000,
    description: "Computer networks and web technologies MCQs for technical rounds.",
    reviews: [{ name: "Network Student", imageSrc: "https://randomuser.me/api/portraits/women/22.jpg", text: "Good coverage of networking basics." }],
    mcqQuestions: [
      {
        id: 1,
        question: "What is the primary function of a router in a network?",
        options: [
          "To store data",
          "To manage network traffic",
          "To provide security",
          "To display web pages"
        ],
        correctAnswer: 1,
        explanation: "Routers direct data packets between different networks and manage network traffic flow."
      },
      {
        id: 2,
        question: "Which protocol is used for secure data transmission over the internet?",
        options: ["HTTP", "FTP", "SSH", "HTTPS"],
        correctAnswer: 3,
        explanation: "HTTPS (HTTP Secure) uses SSL/TLS encryption for secure web communication."
      },
      {
        id: 3,
        question: "What is the main difference between a LAN and a WAN?",
        options: [
          "LAN covers a larger geographical area than WAN",
          "WAN covers a larger geographical area than LAN",
          "LAN uses wireless connections, while WAN uses wired",
          "There is no difference"
        ],
        correctAnswer: 1,
        explanation: "WAN (Wide Area Network) covers larger geographical areas than LAN (Local Area Network)."
      },
      {
        id: 4,
        question: "Which device is used to convert digital signals to analog signals and vice versa?",
        options: ["Router", "Switch", "Modem", "Firewall"],
        correctAnswer: 2,
        explanation: "A modem modulates and demodulates signals for data transmission over analog lines."
      },
      {
        id: 5,
        question: "What does the term 'bandwidth' refer to in networking?",
        options: [
          "The speed of data transmission",
          "The amount of data that can be transmitted in a fixed amount of time",
          "The distance data can travel",
          "The type of data being transmitted"
        ],
        correctAnswer: 1,
        explanation: "Bandwidth refers to the maximum amount of data that can be transmitted over a network connection in a given time period."
      },
      {
        id: 6,
        question: "What is the primary purpose of the TCP protocol in the TCP/IP suite?",
        options: [
          "To route data",
          "To provide error checking and ensure data is delivered accurately",
          "To manage hardware",
          "To encrypt data"
        ],
        correctAnswer: 1,
        explanation: "TCP provides reliable, connection-oriented communication with error checking and data integrity."
      },
      {
        id: 7,
        question: "What is a subnet mask used for in a network?",
        options: [
          "To connect to the internet",
          "To divide an IP address into network and host portions",
          "To encrypt data",
          "To monitor traffic"
        ],
        correctAnswer: 1,
        explanation: "Subnet masks determine which part of an IP address represents the network and which part represents the host."
      },
      {
        id: 8,
        question: "Which of the following is a valid IPv4 address?",
        options: ["192.168.1.1", "256.256.256.256", "192.168.256.1", "123.456.78.90"],
        correctAnswer: 0,
        explanation: "IPv4 addresses consist of four octets (0-255). 192.168.1.1 is a valid private IP address."
      },
      {
        id: 9,
        question: "A user is unable to connect to the internet. Which of the following is the first step in troubleshooting the issue?",
        options: [
          "Check the network cables",
          "Replace the computer",
          "Uninstall the operating system",
          "Format the hard drive"
        ],
        correctAnswer: 0,
        explanation: "Checking physical connections like network cables is the first logical troubleshooting step."
      },
      {
        id: 10,
        question: "A network administrator notices that the network is experiencing high latency. What could be a possible cause?",
        options: [
          "Heavy network traffic",
          "Incorrect IP configuration",
          "Hardware failure",
          "Malware infection"
        ],
        correctAnswer: 0,
        explanation: "Heavy network traffic is a common cause of high latency in network communications."
      },
      {
        id: 11,
        question: "What does URL stand for?",
        options: [
          "Uniform Resource Locator",
          "Universal Resource Locator",
          "Uniform Routing Locator",
          "Universal Routing Locator"
        ],
        correctAnswer: 0,
        explanation: "URL stands for Uniform Resource Locator, which specifies the location of web resources."
      },
      {
        id: 12,
        question: "What does the term 'HTTP' stand for in web technologies?",
        options: [
          "HyperText Transfer Protocol",
          "Hyperlink Text Transfer Protocol",
          "Hyperlink Transfer Protocol",
          "HyperText Transfer Port"
        ],
        correctAnswer: 0,
        explanation: "HTTP stands for HyperText Transfer Protocol, used for web communication."
      },
      {
        id: 13,
        question: "What is the role of a DNS (Domain Name System) server?",
        options: [
          "To store website data",
          "To host websites",
          "To translate domain names into IP addresses",
          "To manage internet connections"
        ],
        correctAnswer: 2,
        explanation: "DNS servers translate human-readable domain names into IP addresses that computers can understand."
      },
      {
        id: 14,
        question: "A company's internal network is experiencing frequent security breaches. Which of the following measures is most effective in securing the network?",
        options: [
          "Install antivirus software",
          "Use strong firewalls and encryption",
          "Limit employee internet usage",
          "Disable all network access"
        ],
        correctAnswer: 1,
        explanation: "Strong firewalls and encryption provide comprehensive network security against breaches."
      },
      {
        id: 15,
        question: "Which of the following is a common use of HTML?",
        options: [
          "To create websites",
          "To manage databases",
          "To program operating systems",
          "To design graphics"
        ],
        correctAnswer: 0,
        explanation: "HTML (HyperText Markup Language) is primarily used to create and structure web pages."
      }
    ]
  },
  {
    id: 41,
    companyName: "Computer Fundamentals - Part 5",
    logoSrc: "/programming.png",
    roundType: "Technical MCQ",
    questions: 15,
    duration: "20 min",
    successRate: "68%",
    attempts: 19000,
    description: "Programming concepts and security fundamentals MCQs for technical interviews.",
    reviews: [{ name: "Coding Enthusiast", imageSrc: "https://randomuser.me/api/portraits/men/30.jpg", text: "Perfect mix of programming and security topics." }],
    mcqQuestions: [
      {
        id: 1,
        question: "Which of the following is the correct syntax for a basic print command in Python?",
        options: [
          "print\"Hello, World!\"",
          "echo \"Hello, World!\"",
          "printf(\"Hello, World!\")",
          "print(\"Hello, World!\")"
        ],
        correctAnswer: 3,
        explanation: "In Python 3, the correct syntax for printing is print() with parentheses."
      },
      {
        id: 2,
        question: "Which command is used to create a new directory in Linux?",
        options: ["mkdir", "rmdir", "cp", "mv"],
        correctAnswer: 0,
        explanation: "'mkdir' (make directory) command is used to create new directories in Linux."
      },
      {
        id: 3,
        question: "What is the primary purpose of a firewall in a computer network?",
        options: [
          "To store data",
          "To block unauthorized access",
          "To increase processing speed",
          "To display graphics"
        ],
        correctAnswer: 1,
        explanation: "Firewalls monitor and control network traffic to prevent unauthorized access to systems."
      },
      {
        id: 4,
        question: "Which of the following is considered a strong password?",
        options: ["password123", "JohnDoe", "ABCDEF", "5f^#2kG!vD"],
        correctAnswer: 3,
        explanation: "Strong passwords contain a mix of uppercase, lowercase, numbers, and special characters."
      },
      {
        id: 5,
        question: "What is the purpose of encryption in computer security?",
        options: [
          "To delete files",
          "To hide the user interface",
          "To protect data by converting it into a code",
          "To increase the size of files"
        ],
        correctAnswer: 2,
        explanation: "Encryption converts readable data into coded form to protect it from unauthorized access."
      },
      {
        id: 6,
        question: "What does the term 'phishing' refer to in the context of cybersecurity?",
        options: [
          "A type of malware",
          "A hacking technique involving fake websites or emails",
          "A method of protecting data",
          "A tool for software development"
        ],
        correctAnswer: 1,
        explanation: "Phishing uses deceptive emails or websites to trick users into revealing sensitive information."
      },
      {
        id: 7,
        question: "Which of the following is a characteristic of ransomware?",
        options: [
          "It protects your data",
          "It encrypts your data and demands payment for decryption",
          "It speeds up your computer",
          "It is used to create backups"
        ],
        correctAnswer: 1,
        explanation: "Ransomware encrypts victim's files and demands payment for the decryption key."
      },
      {
        id: 8,
        question: "Which of the following commands can be used in Linux to change the permissions of a file?",
        options: ["chmod", "ps", "grep", "ls"],
        correctAnswer: 0,
        explanation: "'chmod' (change mode) command modifies file and directory permissions in Linux."
      },
      {
        id: 9,
        question: "A user reports that their antivirus software has detected a virus, but it cannot remove it. What should they do next?",
        options: [
          "Ignore the warning",
          "Turn off the antivirus",
          "Update the antivirus software and run a full scan",
          "Delete all files"
        ],
        correctAnswer: 2,
        explanation: "Updating antivirus definitions and running a full scan often resolves detection and removal issues."
      },
      {
        id: 10,
        question: "An employee receives an email asking for their login credentials. What should they do?",
        options: [
          "Reply with the information",
          "Click the link provided",
          "Forward the email to IT support",
          "Delete the email immediately"
        ],
        correctAnswer: 2,
        explanation: "Suspicious emails requesting credentials should be reported to IT security for investigation."
      },
      {
        id: 11,
        question: "What is the primary purpose of a programming language?",
        options: [
          "To design hardware",
          "To create programs that perform specific tasks",
          "To browse the internet",
          "To store large amounts of data"
        ],
        correctAnswer: 1,
        explanation: "Programming languages are used to write instructions that tell computers how to perform specific tasks."
      },
      {
        id: 12,
        question: "Which of the following is an example of a high-level programming language?",
        options: ["Assembly", "C++", "Binary", "Machine Language"],
        correctAnswer: 1,
        explanation: "C++ is a high-level programming language that is closer to human language than machine code."
      },
      {
        id: 13,
        question: "What does the term 'algorithm' refer to in programming?",
        options: [
          "A step-by-step procedure to solve a problem",
          "A programming language",
          "A type of hardware",
          "A network protocol"
        ],
        correctAnswer: 0,
        explanation: "An algorithm is a well-defined sequence of steps to solve a problem or complete a task."
      },
      {
        id: 14,
        question: "What is the main difference between a compiled language and an interpreted language?",
        options: [
          "Compiled languages are faster",
          "Interpreted languages are more efficient",
          "Compiled languages are converted into machine code before execution, while interpreted languages are executed line by line",
          "There is no difference"
        ],
        correctAnswer: 2,
        explanation: "Compiled languages are translated to machine code before execution, while interpreted languages are executed line by line at runtime."
      },
      {
        id: 15,
        question: "Which of the following describes a variable in programming?",
        options: [
          "A fixed value",
          "A placeholder for storing data that can change",
          "A type of error",
          "A programming language"
        ],
        correctAnswer: 1,
        explanation: "A variable is a named storage location that can hold different values during program execution."
      }
    ]
  },
];

export default interviewDatabase;

export const optionsData = {
  companyOptions: [
    { id: 1, value: 'google', label: 'Google' },
    { id: 2, value: 'amazon', label: 'Amazon' },
    { id: 3, value: 'microsoft', label: 'Microsoft' },
    { id: 4, value: 'meta', label: 'Meta' },
    { id: 5, value: 'apple', label: 'Apple' },
    { id: 6, value: 'uber', label: 'Uber' },
    { id: 7, value: 'flipkart', label: 'Flipkart' },
    { id: 8, value: 'leetcode', label: 'LeetCode' }
  ],
  roundTypeOptions: [
    { id: 1, value: 'coding', label: 'Coding Round' },
    { id: 2, value: 'technical_mcq', label: 'Technical MCQ' },
    { id: 3, value: 'system_design', label: 'System Design' },
    { id: 4, value: 'behavioral', label: 'Behavioral Round' }
  ],
  durationOptions: [
    { id: 1, value: 'less30', label: '<30 min' },
    { id: 2, value: '30to60', label: '30-60 min' },
    { id: 3, value: 'more60', label: '>60 min' }
  ]
};

export const practiceCards = [
  {
    id: 1,
    name: 'Practice Set 1',
    problems: [
      { title: 'Two Sum', difficulty: 'Easy', company: 'Google' },
      { title: 'Valid Parentheses', difficulty: 'Easy', company: 'Google' },
      { title: 'Trapping Rain Water', difficulty: 'Hard', company: 'Google' }
    ]
  },
  {
    id: 2,
    name: 'Practice Set 2',
    problems: [
      { title: 'Merge Sorted Array', difficulty: 'Easy', company: 'Meta' },
      { title: 'Valid Sudoku', difficulty: 'Medium', company: 'Google' },
      { title: 'Design URL Shortener', difficulty: 'Medium', company: 'Google' }
    ]
  },
  {
    id: 3,
    name: 'Practice Set 3',
    problems: [
      { title: 'Two Sum', difficulty: 'Easy', company: 'Google' },
      { title: 'Merge Sorted Array', difficulty: 'Easy', company: 'Meta' },
      { title: 'Trapping Rain Water', difficulty: 'Hard', company: 'Google' }
    ]
  },
  {
    id: 4,
    name: 'Practice Set 4',
    problems: [
      { title: 'Valid Parentheses', difficulty: 'Easy', company: 'Google' },
      { title: 'Valid Sudoku', difficulty: 'Medium', company: 'Google' },
      { title: 'Design URL Shortener', difficulty: 'Medium', company: 'Google' }
    ]
  },
  {
    id: 5,
    name: 'Practice Set 5',
    problems: [
      { title: 'Two Sum', difficulty: 'Easy', company: 'Google' },
      { title: 'Merge Sorted Array', difficulty: 'Easy', company: 'Meta' },
      { title: 'Valid Sudoku', difficulty: 'Medium', company: 'Google' }
    ]
  },
  {
    id: 6,
    name: 'Practice Set 6',
    problems: [
      { title: 'Trapping Rain Water', difficulty: 'Hard', company: 'Google' },
      { title: 'Design URL Shortener', difficulty: 'Medium', company: 'Google' },
      { title: 'Valid Parentheses', difficulty: 'Easy', company: 'Google' }
    ]
  }
];

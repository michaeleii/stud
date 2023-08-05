import Course from "@/types/Course";

export const courses: Course[] = [
  {
    id: crypto.randomUUID(),
    name: "Introduction to Programming",
    tasks: [
      {
        name: "Variables and Data Types",
        description:
          "Learn about variables and different data types in programming.",
        done: false,
      },
      {
        name: "Control Flow",
        description:
          "Explore if-else statements and loops for program control.",
        done: true,
      },
      {
        name: "Functions",
        description: "Learn how to create and use functions in programming.",
        done: false,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Web Development Fundamentals",
    tasks: [
      {
        name: "HTML",
        description: "Study the basics of HTML for web page structure.",
        done: true,
      },
      {
        name: "CSS",
        description: "Learn how to style web pages using CSS.",
        done: false,
      },
      {
        name: "JavaScript",
        description:
          "Explore the fundamentals of JavaScript programming language.",
        done: false,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Data Structures and Algorithms",
    tasks: [
      {
        name: "Arrays",
        description: "Understand arrays and their operations.",
        done: true,
      },
      {
        name: "Linked Lists",
        description: "Learn about linked lists and their applications.",
        done: true,
      },
      {
        name: "Recursion",
        description: "Study recursion and its use in problem-solving.",
        done: false,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Object-Oriented Programming",
    tasks: [
      {
        name: "Classes and Objects",
        description: "Understand the concept of classes and objects.",
        done: true,
      },
      {
        name: "Inheritance",
        description: "Learn about inheritance and its benefits.",
        done: true,
      },
      {
        name: "Polymorphism",
        description: "Explore polymorphism and its implementation.",
        done: false,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Database Design and Management",
    tasks: [
      {
        name: "Relational Databases",
        description: "Study the fundamentals of relational databases.",
        done: true,
      },
      {
        name: "SQL Queries",
        description:
          "Learn how to write SQL queries to interact with databases.",
        done: true,
      },
      {
        name: "Normalization",
        description: "Understand the process of database normalization.",
        done: false,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Frontend Frameworks",
    tasks: [
      {
        name: "React",
        description: "Learn how to build interactive UIs with React.",
        done: true,
      },
      {
        name: "Angular",
        description: "Explore the features of the Angular framework.",
        done: true,
      },
      {
        name: "Vue.js",
        description:
          "Study the fundamentals of Vue.js for frontend development.",
        done: false,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Backend Development",
    tasks: [
      {
        name: "Node.js",
        description:
          "Learn how to build server-side applications with Node.js.",
        done: true,
      },
      {
        name: "Express",
        description: "Explore the features of the Express.js framework.",
        done: true,
      },
      {
        name: "RESTful APIs",
        description: "Understand the principles of designing RESTful APIs.",
        done: false,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Mobile App Development",
    tasks: [
      {
        name: "Android Development",
        description: "Learn how to build Android apps using Java/Kotlin.",
        done: true,
      },
      {
        name: "iOS Development",
        description: "Explore app development for iOS using Swift.",
        done: true,
      },
      {
        name: "Cross-platform Development",
        description:
          "Study frameworks like React Native for cross-platform app development.",
        done: false,
      },
    ],
  },
];

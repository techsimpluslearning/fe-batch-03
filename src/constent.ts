let todoList = [
    { title: "Complete JavaScript project", description: "Finish the to-do list application using JavaScript", dueDate: "2025-04-05", priority: "High", status: "Pending" },
    { title: "Study for exams", description: "Revise computer fundamentals and algorithms", dueDate: "2025-04-10", priority: "Medium", status: "In Progress" },
    { title: "Grocery Shopping", description: "Buy vegetables, fruits, and essentials", dueDate: "2025-03-30", priority: "Low", status: "Pending" },
    { title: "Workout", description: "Exercise for at least 30 minutes", dueDate: "2025-04-01", priority: "Medium", status: "Completed" },
    { title: "Fix website bugs", description: "Debug and fix issues in the web application", dueDate: "2025-04-06", priority: "High", status: "Pending" },
    { title: "Read a book", description: "Complete reading 'Atomic Habits'", dueDate: "2025-04-08", priority: "Low", status: "Completed" },
    { title: "Attend team meeting", description: "Weekly sync-up with the development team", dueDate: "2025-04-09", priority: "Medium", status: "In Progress" },
    { title: "Write a blog post", description: "Write an article on JavaScript best practices", dueDate: "2025-04-12", priority: "High", status: "Pending" },
    { title: "Pay electricity bill", description: "Due date approaching for electricity bill payment", dueDate: "2025-04-15", priority: "High", status: "Pending" },
    { title: "Plan weekend trip", description: "Decide location and book tickets for a short trip", dueDate: "2025-04-17", priority: "Medium", status: "Pending" },
    { title: "Buy groceries", description: "Restock essential household items", dueDate: "2025-04-18", priority: "Low", status: "Completed" },
    { title: "Practice DSA", description: "Solve 5 coding problems daily", dueDate: "2025-04-19", priority: "High", status: "In Progress" },
    { title: "Prepare slides for presentation", description: "Work on project presentation slides", dueDate: "2025-04-20", priority: "High", status: "Pending" },
    { title: "Check emails", description: "Go through unread emails and respond", dueDate: "2025-04-21", priority: "Medium", status: "Completed" },
    { title: "Refactor code", description: "Improve code readability and efficiency", dueDate: "2025-04-22", priority: "High", status: "In Progress" },
    { title: "Schedule dentist appointment", description: "Book an appointment for a dental checkup", dueDate: "2025-04-24", priority: "Medium", status: "Pending" },
    { title: "Organize workspace", description: "Declutter and clean the desk", dueDate: "2025-04-25", priority: "Low", status: "Completed" },
    { title: "Update resume", description: "Add recent projects and experiences to resume", dueDate: "2025-04-26", priority: "High", status: "Pending" },
    { title: "Watch tech webinar", description: "Attend a webinar on AI advancements", dueDate: "2025-04-27", priority: "Medium", status: "Pending" },
    { title: "Call a friend", description: "Catch up with an old friend over the phone", dueDate: "2025-04-28", priority: "Low", status: "Completed" },
    { title: "Fix database issue", description: "Optimize and debug database queries", dueDate: "2025-04-29", priority: "High", status: "In Progress" },
    { title: "Cook dinner", description: "Try a new recipe for dinner", dueDate: "2025-04-30", priority: "Low", status: "Completed" },
    { title: "Backup files", description: "Save important files to cloud storage", dueDate: "2025-05-01", priority: "High", status: "Pending" },
    { title: "Write unit tests", description: "Improve code coverage with tests", dueDate: "2025-05-02", priority: "High", status: "In Progress" },
    { title: "Attend networking event", description: "Connect with industry professionals", dueDate: "2025-05-03", priority: "Medium", status: "Pending" },
    { title: "Meditate", description: "Practice 10 minutes of mindfulness", dueDate: "2025-05-04", priority: "Low", status: "Completed" },
    { title: "Optimize website speed", description: "Improve page load performance", dueDate: "2025-05-05", priority: "High", status: "In Progress" },
    { title: "Plan weekly schedule", description: "Create a task plan for the upcoming week", dueDate: "2025-05-06", priority: "Medium", status: "Pending" },
    { title: "Review pull requests", description: "Check and approve PRs on GitHub", dueDate: "2025-05-07", priority: "High", status: "Pending" },
    { title: "Set fitness goals", description: "Decide on a workout and diet plan", dueDate: "2025-05-08", priority: "Medium", status: "Pending" },
    { title: "Check bank statements", description: "Review recent transactions", dueDate: "2025-05-09", priority: "Medium", status: "Completed" },
    { title: "Prepare for a job interview", description: "Mock interview practice and research", dueDate: "2025-05-10", priority: "High", status: "Pending" },
    { title: "Buy a birthday gift", description: "Find a thoughtful present", dueDate: "2025-05-11", priority: "Medium", status: "Pending" },
    { title: "Clean the house", description: "Vacuum and dust all rooms", dueDate: "2025-05-12", priority: "Low", status: "Completed" },
    { title: "Research new trends", description: "Read about emerging technologies", dueDate: "2025-05-13", priority: "Medium", status: "Pending" },
    { title: "Write a short story", description: "Create a fictional story draft", dueDate: "2025-05-14", priority: "Medium", status: "In Progress" },
    { title: "Test new software", description: "Explore a new productivity tool", dueDate: "2025-05-15", priority: "High", status: "In Progress" },
    { title: "Update LinkedIn profile", description: "Add latest skills and experiences", dueDate: "2025-05-16", priority: "Medium", status: "Pending" },
    { title: "Plan family dinner", description: "Organize a get-together with family", dueDate: "2025-05-17", priority: "Low", status: "Completed" },
    { title: "Improve UX design", description: "Enhance UI/UX of the website", dueDate: "2025-05-18", priority: "High", status: "Pending" },
    { title: "Declutter inbox", description: "Organize and delete unnecessary emails", dueDate: "2025-05-19", priority: "Low", status: "Pending" },
    { title: "Create a social media plan", description: "Schedule posts for the next month", dueDate: "2025-05-20", priority: "Medium", status: "In Progress" },
    { title: "Brainstorm new ideas", description: "Generate ideas for upcoming projects", dueDate: "2025-05-21", priority: "High", status: "In Progress" }
  ];
  

  const priorityColors = {
    High: "text-red-500",   
    Medium: "text-yellow-500", 
    Low: "text-green-500"   
  };
  
  
  export {todoList,priorityColors}
  
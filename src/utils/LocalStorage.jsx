//!<==Employees==>
  const employees = [
    {
      id: 1,
      firstName: "Aarav",
      email: "e1@e.com",
      password: "123",
      tasks: [
        {
          active: true,
          new_task: true,
          task_completed: false,
          task_failed: false,
          title: "Update Inventory",
          description: "Update inventory records for Q4.",
          category: "Inventory",
          date: "2024-11-08",
        },
        {
          active: false,
          new_task: false,
          task_completed: true,
          task_failed: false,
          title: "Weekly Sales Report",
          description: "Compile and submit the weekly sales report.",
          category: "Reports",
          date: "2024-11-05",
        },
      ],
      taskCounts: {
        active: 1,
        failed: 0,
        newTask: 1,
        completed: 1,
      },
    },
    {
      id: 2,
      firstName: "Vivaan",
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          new_task: true,
          task_completed: false,
          task_failed: false,
          title: "Customer Follow-up",
          description: "Reach out to new clients for feedback.",
          category: "Customer Service",
          date: "2024-11-10",
        },
        {
          active: false,
          new_task: false,
          task_completed: true,
          task_failed: false,
          title: "Team Meeting",
          description: "Prepare slides for team meeting.",
          category: "Meetings",
          date: "2024-11-06",
        },
      ],
      taskCounts: {
        active: 1,
        failed: 0,
        newTask: 1,
        completed: 1,
      },
    },
    {
      id: 3,
      firstName: "Vihaan",
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          new_task: true,
          task_completed: false,
          task_failed: false,
          title: "Website Maintenance",
          description: "Fix bugs on the company website.",
          category: "IT",
          date: "2024-11-09",
        },
        {
          active: false,
          new_task: false,
          task_completed: true,
          task_failed: false,
          title: "Security Update",
          description: "Apply recent security patches.",
          category: "IT",
          date: "2024-11-03",
        },
      ],
      taskCounts: {
        active: 1,
        failed: 0,
        newTask: 1,
        completed: 1,
      },
    },
    {
      id: 4,
      firstName: "Ayaan",
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          active: false,
          new_task: true,
          task_completed: false,
          task_failed: true,
          title: "Prepare Training Materials",
          description: "Develop materials for new employee training.",
          category: "Training",
          date: "2024-11-07",
        },
        {
          active: true,
          new_task: false,
          task_completed: true,
          task_failed: false,
          title: "Training Session",
          description: "Conduct training for new employees.",
          category: "Training",
          date: "2024-11-05",
        },
      ],
      taskCounts: {
        active: 1,
        failed: 1,
        newTask: 1,
        completed: 1,
      },
    },
    {
      id: 5,
      firstName: "Krish",
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          new_task: true,
          task_completed: false,
          task_failed: false,
          title: "Product Launch Preparation",
          description: "Finalize details for the new product launch.",
          category: "Marketing",
          date: "2024-11-08",
        },
        {
          active: false,
          new_task: false,
          task_completed: true,
          task_failed: false,
          title: "Social Media Review",
          description: "Analyze performance of recent posts.",
          category: "Marketing",
          date: "2024-11-02",
        },
      ],
      taskCounts: {
        active: 1,
        failed: 0,
        newTask: 1,
        completed: 1,
      },
    },
  ];
  

//!<==Admin==>
const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return {employees, admin}
};

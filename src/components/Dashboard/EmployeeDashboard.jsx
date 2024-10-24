import React from "react";
import Header from "../Other/Header";
import TaskListNumbers from "../Other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard() {
  return (
    <div className="p-20 bg-[#1c1c1c] h-screen">
      <Header />
      <TaskListNumbers/>
      <TaskList/>
    </div>
  );
}

export default EmployeeDashboard;

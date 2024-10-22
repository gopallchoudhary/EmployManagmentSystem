import React from "react";
import Header from "../Other/Header";
import TaskListNumbers from "../Other/TaskListNumbers";

function EmployeeDashboard() {
  return (
    <div className="p-20 bg-[#1c1c1c] h-screen">
      <Header />
      <TaskListNumbers/>
    </div>
  );
}

export default EmployeeDashboard;

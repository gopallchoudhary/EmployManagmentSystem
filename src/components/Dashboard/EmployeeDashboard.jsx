import React from "react";
import Header from "../Other/Header";
import TaskListNumbers from "../Other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard({ data, logout }) {
  return (
    <div className="p-20 bg-[#1c1c1c] h-screen">
      <Header data={data} logout={logout}/>
      <TaskListNumbers data={data}/>
      <TaskList data={data}/>
    </div>
  );
}

export default EmployeeDashboard;

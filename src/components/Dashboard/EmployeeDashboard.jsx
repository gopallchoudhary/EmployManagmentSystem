import React from "react";
import Header from "../Other/Header";
import TaskListNumbers from "../Other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard({ data, changeUser }) {
  return (
    <div className="p-20 bg-[#1c1c1c] h-screen">
      <Header data={data} changeUser={changeUser} />
      <TaskListNumbers data={data} changeUser={changeUser} />
      <TaskList data={data} changeUser={changeUser} />
    </div>
  );
}

export default EmployeeDashboard;

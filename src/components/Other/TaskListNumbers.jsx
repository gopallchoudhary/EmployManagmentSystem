import React from "react";

const TaskListNumbers = () => {
  return (
    <div className="flex justify-between gap-8 mt-10 screen">
      <div className="bg-red-400 w-[45%] px-9 py-6 rounded-lg">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="bg-blue-400 w-[45%] px-9 py-6  rounded-lg">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="bg-green-400 w-[45%] px-9 py-6  rounded-lg">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="bg-yellow-400 w-[45%] px-9 py-6  rounded-lg">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;

import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="w-full rounded-md overflow-x-auto  flex items-center justify-start flex-nowrap gap-5 h-[64%]  mt-6  py-10"
    >
      
      {data.tasks.map((elem, index) => {
        if (elem.active) {
          return <AcceptTask key={index} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={index} data={elem} />;
        }
        if (elem.taskCompleted) {
          return <CompleteTask key={index} data={elem} />;
        }
        if (elem.taskFailed) {
          return <FailedTask key={index} data={elem} />;
        }
      })}

      {/* <AcceptTask />
      <NewTask />
      <CompleteTask />
      <FailedTask /> */}
    </div>
  );
};

export default TaskList;

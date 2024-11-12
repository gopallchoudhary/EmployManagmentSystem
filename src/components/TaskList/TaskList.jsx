import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="w-full rounded-md overflow-x-auto  flex items-center justify-start gap-5 h-[64%]  mt-6  py-10"
    >
      {data.tasks.map((elem) => {
        if (elem.active) {
          return <AcceptTask />;
        }
        if (elem.newTask) {
          return <NewTask />;
        }
        if (elem.taskCompleted) {
          return <CompleteTask />;
        }
        if (elem.taskFailed) {
          <FailedTask />;
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

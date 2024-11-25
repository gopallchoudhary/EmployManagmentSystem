import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div id="allTask" className="bg-[#1c1c1c] mt-5 rounded p-5">
      <div className="flex text-lg font-medium justify-between bg-red-400   rounded px-4 py-2 mb-2">
        <h2 className="w-1/5">Employee Name</h2>
        <h2 className="w-1/5">New Task</h2>
        <h2 className="w-1/5">Active Task</h2>
        <h2 className="w-1/5">Completed</h2>
        <h2 className="w-1/5">Failed</h2>
      </div>
      <div id="allTask" className="">
        {userData.employees.map(
          (empl, idx) => (
            (
              <div
                key={idx}
                className="bg-black text-lg font-medium border-emerald-500 border mt-4 py-2 mb-3 px-4 flex justify-between rounded "
              >
                <h2 className="w-1/5  ">{empl.firstName}</h2>
                <h2 className="w-1/5 ml-16 text-blue-500">
                  {empl.taskCounts.newTask}
                </h2>
                <h3 className="w-1/5 ml-3 text-yellow-400">
                  {empl.taskCounts.active}
                </h3>
                <h2 className="w-1/5 ml-8 text-green-500">
                  {empl.taskCounts.completed}
                </h2>
                <h5 className="w-1/5 ml-1 text-red-500">
                  {empl.taskCounts.failed}
                </h5>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default AllTask;

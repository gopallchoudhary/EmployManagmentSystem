import React from "react";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="w-full rounded-md overflow-x-auto  flex items-center justify-start gap-5 h-[64%]  mt-6  py-10"
    >
      {data.tasks.map((taskList) => {
        const clrArr = [
          "bg-red-400",
          "bg-green-400",
          "bg-yellow-400",
          "bg-blue-400",
          "bg-violet-400",
        ];
        const clrNo = Math.floor(Math.random() * clrArr.length + 1);
        const clr = clrArr[clrNo];
        console.log(clr);

        return (
          <div
            key={clrNo}
            className={`"w-[300px] flex-shrink-0 h-full  rounded-lg p-4 ${clr}`}
          >
            <div className="flex items-center justify-between">
              <h3 className="py-1 px-3 text-md font-semibold rounded-md bg-red-600">
                High
              </h3>
              <h4 className="font-semibold text-md">23 Oct 2024</h4>
            </div>
            <h3 className="text-2xl font-semibold mt-3">{taskList.title}</h3>
            <p className="text-sm mt-2">{taskList.description}</p>
          </div>
        );
      })}

      {/* <div className="w-[300px] flex-shrink-0 h-full bg-yellow-400 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <h3 className="bg-red-600 py-1 px-3 text-md font-semibold rounded-md">
            High
          </h3>
          <h4 className="font-semibold text-md">23 Oct 2024</h4>
        </div>
        <h3 className="text-2xl font-semibold mt-3">Make a video youtube</h3>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
          nesciunt Lorem ipsum dolor sit, amet .
        </p>
      </div>

      <div className="w-[300px] flex-shrink-0 h-full bg-pink-400 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <h3 className="bg-red-600 py-1 px-3 text-md font-semibold rounded-md">
            High
          </h3>
          <h4 className="font-semibold text-md">23 Oct 2024</h4>
        </div>
        <h3 className="text-2xl font-semibold mt-3">Make a video youtube</h3>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
          nesciunt Lorem ipsum dolor sit, amet .
        </p>
      </div>

      <div className="w-[300px] flex-shrink-0 h-full bg-green-400 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <h3 className="bg-red-600 py-1 px-3 text-md font-semibold rounded-md">
            High
          </h3>
          <h4 className="font-semibold text-md">23 Oct 2024</h4>
        </div>
        <h3 className="text-2xl font-semibold mt-3">Make a video youtube</h3>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
          nesciunt Lorem ipsum dolor sit, amet .
        </p>
      </div>

      <div className="w-[300px] flex-shrink-0 h-full bg-blue-400 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <h3 className="bg-red-600 py-1 px-3 text-md font-semibold rounded-md">
            High
          </h3>
          <h4 className="font-semibold text-md">23 Oct 2024</h4>
        </div>
        <h3 className="text-2xl font-semibold mt-3">Make a video youtube</h3>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
          nesciunt Lorem ipsum dolor sit, amet .
        </p>
      </div> */}
    </div>
  );
};

export default TaskList;

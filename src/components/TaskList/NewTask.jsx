import React from "react";

const NewTask = ({data}) => {
  return (
    <div className="w-[300px] flex-shrink-0 h-full bg-pink-400 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <h3 className="bg-red-600 py-1 px-3 text-md font-semibold rounded-md">
          {data.category}
        </h3>
        <h4 className="font-semibold text-md">{data.date}</h4>
      </div>
      <h3 className="text-2xl font-semibold mt-3">{data.title}</h3>
      <p className="text-sm mt-2">
        {data.description}
      </p>
      <div className="mt-6">
        <button className="w-full py-1 px-4 bg-blue-600 rounded">Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;

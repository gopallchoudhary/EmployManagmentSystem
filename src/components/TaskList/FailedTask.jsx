import React from "react";

const FailedTask = () => {
  return (
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
      <div className="mt-6">
        <button className="w-full py-1 px-4 bg-red-600 rounded">Failed</button>
      </div>
    </div>
  );
};

export default FailedTask;

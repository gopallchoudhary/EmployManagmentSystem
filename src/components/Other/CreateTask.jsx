import React from "react";

const CreateTask = () => {
  return (
    <div>
      <form className="flex flex-wrap w-full bg-[#1c1c1c] px-4 py-6 mt-4 rounded-md  items-start justify-between">
        <div className="w-1/2  ml-8">
          <div className="p-2">
            <h3 className="text-gray-300 text-sm mb-0.5">Task title</h3>
            <input
              className="w-4/5 rounded-sm p-2 outline-none  bg-transparent border border-white mt-1"
              type="text"
              placeholder="create task"
            />
          </div>

          <div className="p-2">
            <h3 className="text-gray-300 text-sm mb-0.5">Date</h3>
            <input
              className="w-4/5 rounded-sm p-2 bg-transparent border border-white mt-1"
              placeholder="Enter date"
              type="date"
            />
          </div>
          <div className="p-2">
            <h3 className="text-gray-300 text-sm mb-0.5">Assign To</h3>
            <input
              className="w-4/5 rounded-sm p-2 bg-transparent border border-white mt-1"
              type="text"
              placeholder="employee name"
            />
          </div>
          <div className="p-2">
            <h3 className="text-gray-300 text-sm mb-0.5">Category</h3>
            <input
              className="w-4/5 rounded-sm p-2 bg-transparent border border-white mt-1"
              type="text"
              placeholder="design, dev etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex-col items-start mt-4 mr-20">
          <h3 className="text-gray-300 text-sm mb-0.5">Description</h3>
          <textarea
            className="rounded-sm bg-transparent border p-4 h-55 w-full mt-2"
            name=""
            cols="30"
            rows="8"
          ></textarea>{" "}
          <br />
          <button className=" bg-emerald-500 hover:bg-emerald-600 px-4 py-2 font-semibold rounded  w-full mt-3">
            New Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;

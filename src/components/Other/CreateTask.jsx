import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [newtask, setNewTask] = useState({});

  const [userData, setUserData] = useContext(AuthContext);

  //.<==Submit-Handler==>
  const sumbitHandler = (e) => {
    e.preventDefault();

    //! set-Task
    setNewTask({
      active: false,
      category,
      date,
      description,
      newTask: true,
      taskCompleted: false,
      taskFailed: false,
      title,
    });
    

    const data = userData.employees;

    data.map((elem) => {
      if (elem.firstName == assignTo) {
        elem.tasks.push(newtask);
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
      }
      
    });
    console.log(data);
    
  };

  return (
    <div>
      <form
        onSubmit={(e) => sumbitHandler(e)}
        className="flex flex-nowrap w-full bg-[#1c1c1c] px-4 py-6 mt-4 rounded-md  items-start justify-between"
      >
        <div className="w-1/2  ml-8">
          <div className="p-2">
            <h3 className="text-gray-300 text-sm mb-0.5">Task title</h3>
            <input
              className="w-4/5 rounded-sm p-2 outline-none  bg-transparent border border-white mt-1"
              type="text"
              placeholder="create task"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="p-2">
            <h3 className="text-gray-300 text-sm mb-0.5">Date</h3>
            <input
              className="w-4/5 rounded-sm p-2 bg-transparent border border-white mt-1"
              placeholder="Enter date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="p-2">
            <h3 className="text-gray-300 text-sm mb-0.5">Assign To</h3>
            <input
              className="w-4/5 rounded-sm p-2 bg-transparent border border-white mt-1"
              type="text"
              placeholder="assignTo name"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
            />
          </div>
          <div className="p-2">
            <h3 className="text-gray-300 text-sm mb-0.5">Category</h3>
            <input
              className="w-4/5 rounded-sm p-2 bg-transparent border border-white mt-1"
              type="text"
              placeholder="design, dev etc"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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

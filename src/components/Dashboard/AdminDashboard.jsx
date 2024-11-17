import React from "react";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";
import AllTask from "../Other/AllTask";

function AdminDashboard({data, logout}) {
  return (
    <div className="h-screen w-full p-7">
      <Header data={data} /*logout={logout}*/ />
      <CreateTask />
      <AllTask />
    </div>
  );
}

export default AdminDashboard;

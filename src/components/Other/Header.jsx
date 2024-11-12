import React from "react";

const Header = ({data, logout}) => {
  return (
    <div className="flex items-start justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">{data.firstName}😎</span>
      </h1>
      <button onClick={logout} className="bg-red-600 px-5 py-2  rounded-sm text-xl font-medium">
        Log Out
      </button>
    </div>
  );
};

export default Header;

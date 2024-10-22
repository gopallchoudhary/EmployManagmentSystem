import React from "react";

const Header = () => {
  return (
    <div className="flex items-start justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">Gopal😎</span>
      </h1>
      <button className="bg-red-600 px-5 py-2  rounded-sm text-xl font-medium">
        Log Out
      </button>
    </div>
  );
};

export default Header;

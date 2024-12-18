import React from "react";

const Header = ({ data, changeUser }) => {
  const logoutUser = () => {
    localStorage.setItem("loggedInUser", null);
    changeUser('')
    //window.location.reload();
  };

  return (
    <div className="flex items-start justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">{data.firstName}😎</span>
      </h1>
      <button
        onClick={logoutUser}
        className="bg-red-600 px-5 py-2  rounded-sm text-xl font-medium"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;

import { useContext, useEffect, useState } from "react";
import "./App.css";
import { AdminDashboard, EmployeeDashboard, Login } from "./components";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  //?<==Local-Storage==>
  // useEffect(() => {
  //   setLocalStorage();
  // }, [authData]);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [authData]);

  //. <==Login-Functionality==>
  const handleLogin = (email, password) => {
    //!<==Admin-Data==>
    const admin = authData.admin.find(
      (e) => e.email === email && e.password === password
    );

    if (authData && admin) {
      setUser("admin");
      setLoggedInUserData(admin);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: admin })
      );
    } else if (authData) {
      //!<==Employee-Data==>
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  //. <==Logout-Functionality==>
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard data={loggedInUserData} logout={handleLogout} />
      ) : user == "employee" ? (
        <EmployeeDashboard data={loggedInUserData} logout={handleLogout} />
      ) : (
        " "
      )}
      {/* {user == "employee" ? <EmployeeDashboard data={loggedInUserData}/> : ""} */}
    </>
  );
}

export default App;

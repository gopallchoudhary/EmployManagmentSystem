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
    setLocalStorage()
  }, [authData])
  

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.admin.find((e) => e.email === email && e.password === password)
    ) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
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
          JSON.stringify({ role: "employee" })
        );
        
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ""}
      {user == "admin" ? <AdminDashboard data={loggedInUserData}/> : (user == "employee" ? <EmployeeDashboard data={loggedInUserData}/> : " ")}
      {/* {user == "employee" ? <EmployeeDashboard data={loggedInUserData}/> : ""} */}
    </>
  );
}

export default App;

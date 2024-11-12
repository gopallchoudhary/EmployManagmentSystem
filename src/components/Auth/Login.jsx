import React, { useState } from "react";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex items-center justify-center flex-col"
        >
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2  border-emerald-500 px-5 py-4 rounded-full bg-transparent placeholder:text-gray-400 outline-none"
            type="email"
            placeholder="Enter your email"
          />
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 mt-4 border-emerald-500 px-5 py-4 rounded-full bg-transparent placeholder:text-gray-400 outline-none"
            type="password"
            placeholder="Enter your password"
          />
          <button className="border-2 mt-4 w-full border-emerald-500 px-5 py-4 rounded-full bg-emerald-500 placeholder:text-gray-400 outline-none">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

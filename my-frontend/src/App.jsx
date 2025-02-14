import React, { useEffect, useState } from "react";
import "./App.css";
import myaxios from "./myaxios";

const App = () => {
  const [mybackendData, setmybackendData] = useState({});
  const [users, setusers] = useState([]);

  const fetchBackend = async () => {
    try {
      const res = await myaxios.get("/");
      console.log(res.data);
      setmybackendData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await myaxios.get("/users");
      setusers(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchBackend();
    fetchUsers();
  }, []);

  return (
    <div>
      App 1{import.meta.env.VITE_API_URL}
      <h1>{mybackendData?.msg}</h1>
      <div>
        {users.map((user) => (
          <div key={user._id}>
            <h1>{user.name}</h1>
            <h2>{user.age}</h2>
            <h3>{user.email}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

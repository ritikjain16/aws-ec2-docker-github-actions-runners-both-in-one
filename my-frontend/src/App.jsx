import React, { useEffect, useState } from "react";
import "./App.css";
import myaxios from "./myaxios";

const App = () => {
  const [mybackendData, setmybackendData] = useState({});
  
  const fetchBackend = async () => {
    try {
      const res = await myaxios.get("/");
      console.log(res.data);
      setmybackendData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(()=>{
    fetchBackend()
  },[])

  return (
    <div>
      App {import.meta.env.VITE_API_URL}
      <h1>{mybackendData?.msg}</h1>
    </div>
  );
};

export default App;

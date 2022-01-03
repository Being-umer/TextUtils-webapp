import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/navbar";
import TextForm from "./components/TextForm";
function App() {
  const [mode, setMode] = useState("light");
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <div className="App">
      <NavBar Nav={"TextUtils"} mode={mode} toggle={toggleMode} />
      <TextForm mode={mode} />
    </div>
  );
}

export default App;

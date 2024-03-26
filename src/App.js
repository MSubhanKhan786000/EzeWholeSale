import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Layouts/Header";
import Sidebar from "./Layouts/Sidebar";
import PhoneList from "./Layouts/PhoneList";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <Sidebar className="Sidebar" />
        <PhoneList className="PhoneList" />
      </div>
    </div>
  );
}

export default App;

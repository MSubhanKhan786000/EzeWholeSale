import React from "react";
import img from "../assets/img.png";
import { FiArrowRight } from "react-icons/fi";
import "../styles/Header.css";

const Header = () => {
  return (
    <div
      style={{ backgroundColor: "#101116", padding: "100px", color: "#ffffff" }}
    >
      <img
        src={img}
        alt="logo"
        style={{
          width: "400px",
          height: "350px",
          float: "right",
          marginRight: "90px",
          marginTop: "-100px",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            fontFamily: "Roboto",
            lineHeight: "1.5",
            verticalAlign: "top",
          }}
        >
          <span style={{ marginRight: "10px" }}>Shop Our Latest</span>
          <br />
          <span style={{ marginLeft: "10px" }}> Available Stock Here</span>
        </h1>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Enter search Term e.g iPhone x, 128GB or A1"
          style={{
            padding: "10px",
            marginRight: "10px",
            border: "none",
            borderRadius: "5px",
            width: "350px",
          }}
        />
        <button
          style={{
            backgroundColor: "#007EE5",
            color: "#ffffff",
            border: "none",
            borderRadius: "5px",
            padding: "10px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          Search <FiArrowRight style={{ marginLeft: "5px" }} />
        </button>
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import "../styles/Sidebar.css";
import Slider from "react-slider";
import { FaPlus } from "react-icons/fa";

const Sidebar = () => {
  const [values, setValues] = useState([10, 1000]);
  const [minValue, setMinValue] = useState(values[0]);
  const [maxValue, setMaxValue] = useState(values[1]);

  const handleMinChange = e => {
    setMinValue(e.target.value);
  };

  const handleMaxChange = e => {
    setMaxValue(e.target.value);
  };

  return (
    <div className="Sidebar">
      <p
        style={{
          color: "white",
          textAlign: "left",
          marginLeft: "2px",
          fontFamily: "Roboto",
        }}
      >
        Categories
      </p>
      <div className="categoryList">
        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "none",
            margin: "5px 0",
            display: "block",
            fontFamily: "Roboto",
            fontSize: "13px",
          }}
        >
          All
        </a>
        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "none",
            margin: "5px 0",
            display: "block",
            fontFamily: "Roboto",
            fontSize: "13px",
          }}
        >
          Iphone
        </a>
        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "none",
            margin: "5px 0",
            display: "block",
            fontFamily: "Roboto",
            fontSize: "13px",
          }}
        >
          Samsung
        </a>
        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "none",
            margin: "5px 0",
            display: "block",
            fontFamily: "Roboto",
            fontSize: "13px",
          }}
        >
          Ipad
        </a>
        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "none",
            margin: "5px 0",
            display: "block",
            fontFamily: "Roboto",
            fontSize: "13px",
          }}
        >
          MacBook
        </a>
        <a
          href="#"
          style={{
            color: "white",
            textDecoration: "none",
            margin: "5px 0",
            display: "block",
            fontFamily: "Roboto",
            fontSize: "13px",
          }}
        >
          AirPods
        </a>
      </div>
      <p
        style={{
          color: "white",
          textAlign: "left",
          marginTop: "40px",
          marginLeft: "2px",
          fontFamily: "Roboto",
        }}
      >
        Price Filter
      </p>
      <div>
        <span className="values">
          ${values[0]} - ${values[1]}
        </span>
      </div>
      <small>Current Range: ${values[1] - values[0]}</small>
      <Slider
        className="slider"
        min={10}
        max={1000}
        value={values}
        onChange={newValues => {
          setValues(newValues);
          setMinValue(newValues[0]);
          setMaxValue(newValues[1]);
        }}
      />
      <div style={{ marginTop: "10px" }}>
        <input
          type="number"
          value={minValue}
          onChange={handleMinChange}
          placeholder="Min"
          style={{
            borderRadius: "5px",
            borderColor: "#fff",
            marginRight: "5px",
            padding: "5px",
            color: "black",
            width: "80%",
            margin: "10px",
            fontSize: "13px",
            fontFamily: "Roboto",
          }}
        />
        <div id="vertical-line"></div>
        <input
          type="number"
          value={maxValue}
          onChange={handleMaxChange}
          placeholder="Max"
          style={{
            borderRadius: "5px",
            borderColor: "#fff",
            padding: "5px",
            color: "black",
            width: "80%",
            margin: "10px",
            fontSize: "13px",
          }}
        />
      </div>
      <p
        style={{
          color: "white",
          textAlign: "left",
          marginTop: "40px",
          marginLeft: "2px",
          fontFamily: "Roboto",
        }}
      >
        Storage
      </p>
      <div>
        <label
          style={{
            color: "#fff",
            display: "flex",
            alignItems: "center",
            margin: "10px",
          }}
        >
          <input type="checkbox" />
          <span style={{ marginLeft: "5px", fontSize: "13px" }}>32GB</span>
        </label>
        <label
          style={{
            color: "#fff",
            display: "flex",
            alignItems: "center",
            margin: "10px",
          }}
        >
          <input type="checkbox" />
          <span style={{ marginLeft: "5px", fontSize: "13px" }}>64GB</span>
        </label>
        <label
          style={{
            color: "#fff",
            display: "flex",
            alignItems: "center",
            margin: "10px",
          }}
        >
          <input type="checkbox" />
          <span style={{ marginLeft: "5px", fontSize: "13px" }}>128GB</span>
        </label>
        <label
          style={{
            color: "#fff",
            display: "flex",
            alignItems: "center",
            margin: "10px",
          }}
        >
          <input type="checkbox" />
          <span style={{ marginLeft: "5px", fontSize: "13px" }}>256GB</span>
        </label>
      </div>

      <button
        style={{
          backgroundColor: "#fff",
          color: "grey",
          borderRadius: "10%",
          bottom: "20px",
          Right: "110%",
          transform: "translateX(-230%)",
          padding: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default Sidebar;

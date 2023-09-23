import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "./toolkit.css";

const Toolkit = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <Button
        className="toolkit-button"
        sx={{ backgroundColor: "#1F76D2", margin: "13% 20%", color: "white" }}
        onClick={handleClick}
      >
        Toolkit
      </Button>
      {clicked && (
        <div className="animate__animated animate__bounceInDown tools">
          <div className="colors">
            <button className="button1"></button>
            <button className="button2"></button>
            <button className="button3"></button>
            <button className="button4"></button>
            <button className="button5"></button>
            <button className="button6"></button>
          </div>
        </div>
      )}
    </>
  );
};

export default Toolkit;

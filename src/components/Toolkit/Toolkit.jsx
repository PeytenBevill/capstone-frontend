import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "./toolkit.css";

const Toolkit = (props) => {
  const colorWaves = [
    { postTitle: "#bfd0e0", postBody: "#b8b3be", color: "#000000" },
    { postTitle: "#093824", postBody: "#208394", color: "#ffffff" },
    { postTitle: "#819595", postBody: "#B1B6A6", color: "#000000" },
    { postTitle: "#6F2DBD", postBody: "#B298DC", color: "#ffffff" },
    { postTitle: "#F7B05B", postBody: "#0C1713", color: "#ffffff" },
    { postTitle: "#739E82", postBody: "#F3FFB6", color: "#000000" },
    { postTitle: "#5A0002", postBody: "#33673B", color: "#ffffff" },
    { postTitle: "#ffffff", postBody: "#d6d6d6", color: "#000000" },
  ];
  const [clicked, setClicked] = useState(false);
  const [titleColor, setTitleColor] = useState(colorWaves[7].postTitle);
  const [bodyColor, setBodyColor] = useState(colorWaves[7].postBody);
  const [fontColor, setFontColor] = useState(colorWaves[7].color)

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleColor = (e) => {
    const indexNum = e.target.getAttribute("data-color-identifier");
    const newTitleColor = colorWaves[indexNum].postTitle;
    const newBodyColor = colorWaves[indexNum].postBody;
    const newFontColor = colorWaves[indexNum].color;
  
    setTitleColor(newTitleColor);
    setBodyColor(newBodyColor);
    setFontColor(newFontColor);
  
    props.handlePostColor({ titleColor: newTitleColor, bodyColor: newBodyColor, fontColor: newFontColor });
  };
  // const handleColor = (e) => {
  //   const indexNum = e.target.getAttribute("data-color-identifier")

  //   setTitleColor(colorWaves[indexNum].postTitle)
  //   setBodyColor(colorWaves[indexNum].postBody)
  //   setFontColor(colorWaves[indexNum].color)
  //   // console.log(titleColor, bodyColor, fontColor)
  //   props.handlePostColor({titleColor, bodyColor, fontColor})
  // };
  // console.log(props.firstName)
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
          <p>Greetings {props.firstName}</p>
          <div className="colors">
            {colorWaves.map((colors, index) => (
              <button
                key={index}
                className={`button${index + 1}`}
                onClick={handleColor}
                data-color-identifier={index}
              ></button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Toolkit;

import React from "react";
import { Plus, CopySimple, PaperPlaneTilt } from "@phosphor-icons/react";
import "animate.css";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="background">
        <h1 className="animate__animated animate__slideInLeft animate__delay-1s">
          Write it out, worry less.
        </h1>
      </div>
      <div className="box">
        <span className="first">
          <Plus size={32} className="icon" />
          <p>Add your instructions</p>
        </span>
        <span className="middle">
          <CopySimple size={32} className="icon" />
          <p>Copy the link</p>
        </span>
        <span className="last">
          <PaperPlaneTilt size={32} className="icon" />
          <p>Send it to your sitter</p>
        </span>
      </div>
      <footer>
        <a href="https://github.com/peytenbevill">
          {" "}
          <p>Created by Peyten Bevill</p>
        </a>
        <p className="spacer">|</p>
        <a href='https://www.google.com/search?q=freepik&oq=free&aqs=chrome.0.35i39i355i650j46i39i199i465i650j69i57j69i64j69i60l3j69i65.983j0j7&sourceid=chrome&ie=UTF-8' target="_blank">
          All images by macrovector on Freepik
        </a>
      </footer>
    </>
  );
};

export default Home;

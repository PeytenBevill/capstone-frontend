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
        <a href="https://www.freepik.com/free-vector/pets-cafe-composition-with-silhouette-interior-cafeteria-with-houseplants-people-drinking-coffee-with-animals-vector-illustration_33771030.htm#query=cartoon%20pet%20sitting&position=8&from_view=search&track=ais">
          Image by macrovector on Freepik
        </a>
      </footer>
    </>
  );
};

export default Home;

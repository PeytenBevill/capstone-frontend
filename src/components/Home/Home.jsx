import {useState} from "react";
import { Plus, CopySimple, PaperPlaneTilt } from "@phosphor-icons/react";
import { Switch } from "@mui/material";
import "animate.css";
import "./home.css";

const Home = () => {
  const [postBodyVisible, setPostBodyVisible] = useState(false);
  const togglePostBody = () => {
    // const updatedVisibility = [...postBodyVisible];
    // updatedVisibility[index] = !updatedVisibility[index];
    // setPostBodyVisible(updatedVisibility);
    if(!postBodyVisible) {
      setPostBodyVisible(true)
    } else if(postBodyVisible) {
      setPostBodyVisible(false)
    }
  };
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
      <div className="demo">
        <span className="section1">
        <div
          className="demo-top"
        >
          <h3 className="demo_title">Walking instructions</h3>
          <Switch
            className="toggle-switch2"
            onClick={togglePostBody}
          />
        </div>
        <div
          className="demo-bottom"
        >
          {postBodyVisible && <p className="demo_body">Please walk Mr. Fluffy around 8:00 am, 6:00 pm, and 10:00 pm every day.</p>}
        </div>
        </span>
        <span className="explanation">
          Here is an example of what your instructions will look like. The sitter will be able to search for exactly what they're looking for, then toggle the instructions down to read what you put! No more searching for the right paragraph. Organize your thoughts and make it simple for them to find it! Mess up? No worries, you can always delete your post and try again.
        </span>
      </div>
      <footer>
        <a href="https://github.com/peytenbevill">
          {" "}
          <p>Created by Peyten Bevill</p>
        </a>
        <p className="spacer">|</p>
        <a
          href="https://www.google.com/search?q=freepik&oq=free&aqs=chrome.0.35i39i355i650j46i39i199i465i650j69i57j69i64j69i60l3j69i65.983j0j7&sourceid=chrome&ie=UTF-8"
          target="_blank"
        >
          All images by macrovector on Freepik
        </a>
      </footer>
    </>
  );
};

export default Home;

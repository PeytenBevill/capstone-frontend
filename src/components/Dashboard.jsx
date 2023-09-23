import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { Button, Switch } from "@mui/material";
import axios from "axios";
import Toolkit from "./Toolkit/Toolkit";
import "./dashboard.css";

const Dashboard = ({ user_id }) => {
  const [data, setData] = useState([]);
  const [post_title, setPostTitle] = useState("");
  const [post_body, setPostBody] = useState("");
  const [clicked, setClicked] = useState(false);
  const [postBodyVisible, setPostBodyVisible] = useState(data.map(() => false));
  const [petNames, setPetNames] = useState([]);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleSave = (e) => {
    e.preventDefault();

    axios
      .post(`https://capstone-backend-topaz.vercel.app/posts/${user_id}`, {
        post_title: post_title,
        post_body: post_body,
      })
      .then((res) => {
        console.log(res.data);
        setPostTitle("");
        setPostBody("");
        fetch(`https://capstone-backend-topaz.vercel.app/posts/${user_id}`)
          .then((res) => res.json())
          .then((updatedData) => setData(updatedData));
      })
      .catch((error) => {
        console.error("Error creating post:", error);
      });
    setClicked(false);
  };

  const togglePostBody = (index) => {
    const updatedVisibility = [...postBodyVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setPostBodyVisible(updatedVisibility);
  };

  useEffect(() => {
    fetch(`https://capstone-backend-topaz.vercel.app/posts/${user_id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [user_id]);

  useEffect(() => {
    fetch(`https://capstone-backend-topaz.vercel.app/users/${user_id}`)
      .then((res) => res.json())
      .then((petNames) => setPetNames(petNames));
  }, [petNames]);

  return (
    <>
      <div className="screenBody">
        <Toolkit className='toolkit'/>
        {petNames.map((petName, index) => (
          <div key={index} className="top-of-page">
            <h2>
              Instructions for {petName.pet1}
              {petName.pet2 && !petName.pet3? ` and ${petName.pet2}` : ""}
              {petName.pet3 && petName.pet2 ? `, ${petName.pet2}, and ${petName.pet3}` : ""}
            </h2>
          </div>
        ))}
        {data.length === 0 ? (
          <h3 className="no-posts">Hmmm... nothing has been added yet</h3>
        ) : (
          data.map((x, index) => (
            <>
              <div key={x.id} className="post-top">
                <h3 className="post_title">{x.post_title}</h3>
                <Switch
                  className="toggle-switch"
                  onClick={() => togglePostBody(index)}
                />
              </div>
              <div className="post-bottom">
                {postBodyVisible[index] && (
                  <p className="post_body">{x.post_body}</p>
                )}
              </div>
            </>
          ))
        )}

        <Box className="addButton" sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab color="primary" aria-label="add">
            <AddIcon onClick={handleClick} />
          </Fab>
        </Box>
        {clicked && (
          <div className="overlay active">
            <form onSubmit={handleSave} className="formBox">
              <p className="close" onClick={handleClick}>
                X
              </p>
              <FormControl fullWidth>
                <TextField
                  id="outlined-multiline-flexible"
                  label="Category"
                  multiline
                  maxRows={4}
                  value={post_title}
                  onChange={(e) => setPostTitle(e.target.value)}
                />
                <br></br>
                <TextField
                  id="outlined-multiline-static"
                  label="Your Instructions"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={post_body}
                  onChange={(e) => setPostBody(e.target.value)}
                />
              </FormControl>
              <br></br>
              <Button type="submit">Save</Button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;

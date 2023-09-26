import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Switch } from "@mui/material";

import "../dashboard.css";

const PublishedDashboard = () => {
  const { user_id } = useParams();
  const [data, setData] = useState([]);
  const [postBodyVisible, setPostBodyVisible] = useState(data.map(() => false));
  const [petNames, setPetNames] = useState([]);

  const [titleColor, setTitleColor] = useState("");
  const [bodyColor, setBodyColor] = useState("");
  const [fontColor, setFontColor] = useState("");

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
    fetch(`https://capstone-backend-topaz.vercel.app/posts/colors/${user_id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitleColor(data[0].post_title_color);
        setBodyColor(data[0].post_body_color);
        setFontColor(data[0].post_font_color);
      });
  }, []);

  useEffect(() => {
    fetch(`https://capstone-backend-topaz.vercel.app/users/${user_id}`)
      .then((res) => res.json())
      .then((petNames) => setPetNames(petNames));
  }, []);

  return (
    <>
      <div className="screenBody">
        {petNames.map((petName, index) => (
          <div key={index} className="top-of-page">
            <h2>
              Instructions for {petName.pet1}
              {petName.pet2 && !petName.pet3 ? ` and ${petName.pet2}` : ""}
              {petName.pet3 && petName.pet2
                ? `, ${petName.pet2}, and ${petName.pet3}`
                : ""}
            </h2>
          </div>
        ))}
        {data.length === 0 ? (
          <h3 className="no-posts">Hmmm... nothing has been added yet</h3>
        ) : (
          data.map((x, index) => (
            <>
              <div
                key={x.id}
                className="post-top"
                style={{ backgroundColor: titleColor, color: fontColor }}
              >
                <h3 className="post_title">{x.post_title}</h3>
                <Switch
                  className="toggle-switch"
                  onClick={() => togglePostBody(index)}
                />
              </div>
              <div
                className="post-bottom"
                style={{ backgroundColor: bodyColor, color: fontColor }}
              >
                {postBodyVisible[index] && (
                  <p className="post_body">{x.post_body}</p>
                )}
              </div>
            </>
          ))
        )}
      </div>
    </>
  );
};

export default PublishedDashboard;

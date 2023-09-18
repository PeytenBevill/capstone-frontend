import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./authForm.module.css";

const signupContent = {
  title: "Sign Up",
  route: "signup",
  buttonText: "Sign Up!",
};

const signinContent = {
  title: "Sign In",
  route: "signin",
  buttonText: "Sign In",
};

const AuthForm = ({ formType = "signin", setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");


  // useEffect(() => {
  //   console.log({message});
  // }, [message]);

  const content = formType === "signup" ? signupContent : signinContent;

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`https://capstone-backend-topaz.vercel.app/${content.route}`, {
        email,
        password,
      })
      .then((res) => {
        if (formType === "signup") {
          setMessage(res.data.message);
        } else {
          setToken(res.data.token);
        }
      }).catch((error) => {
        console.error('Axios error occurred', error)
      })
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>{content.title}</h2>
        <label className={styles.label}>
          <input className={styles.textBox} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className={styles.label}>
          <input className={styles.textBox}
            type="password" placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value={content.buttonText} className={styles.submit}/>
      </form>
    </>
  );
};

export default AuthForm;

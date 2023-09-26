import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./authForm.module.css";
import { useNavigate } from "react-router-dom";

const signupContent = {
  title: "Create your account today",
  route: "signup",
  buttonText: "Sign up",
};

const signinContent = {
  title: "Welcome back",
  route: "signin",
  buttonText: "Sign in",
};

const AuthForm = ({ formType = "signin", setToken, setUserId }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  // const [petNames, setPetNames] = useState(["", "", ""]);
  const [pet1, setPet1] = useState('')
  const [pet2, setPet2] = useState('')
  const [pet3, setPet3] = useState('')


  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log({ message });
  }, [message]);

  const content = formType === "signup" ? signupContent : signinContent;

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`https://capstone-backend-topaz.vercel.app/${content.route}`, {
        email,
        password,
        first_name: firstName,
        pet1: pet1,
        pet2: pet2,
        pet3: pet3,
      })
      .then((res) => {
        if (formType === "signup") {
          setMessage(res.data.message);
          alert("Welcome to PetGuide! Please Sign In");
          navigate("/signin");
        } else {
          localStorage.setItem("authToken", res.data.token);
          const authToken = localStorage.getItem("authToken");
          setToken(authToken);
          const user_id = res.data.user_id;
          setUserId(user_id);
          localStorage.setItem("user_id", user_id);
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.error("Axios error occurred", error);
      });
  };

  // const handlePetNameChange = (index, value) => {
  //   const updatedPetNames = [...petNames];
  //   updatedPetNames[index] = value;
  //   setPetNames(updatedPetNames);
  // };

  return (
    <>
      <div className={styles.bgLogin}>
        {formType === "signin" && (
          <form onSubmit={handleSubmit} className={styles.signInBox}>
            <h2>{content.title}</h2>
            <label className={styles.label}>
              <input
                className={styles.textBox}
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className={styles.label}>
              <input
                className={styles.textBox}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <input
              type="submit"
              value={content.buttonText}
              className={styles.submit}
            />
          </form>
        )}
        {formType === "signup" && (
          <form onSubmit={handleSubmit} className={styles.signUpBox}>
            <h2 className={styles.signUpHeader}>{content.title}</h2>
            <div className={styles.inputSignUp}>
              <label className={styles.label2}>
                <input
                  className={styles.textBox2}
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className={styles.label3}>
                <input
                  className={styles.textBox3}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <label className={styles.label4}>
                <input
                  className={styles.textBox4}
                  type="name"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </label>
              <label className={styles.label5}>
                <input
                  className={styles.textBox5}
                  type="name"
                  placeholder="Pet Name 1"
                  onChange={(e) => setPet1(e.target.value)}
                  required
                />
              </label>
              <label className={styles.label6}>
                <input
                  className={styles.textBox6}
                  type="name"
                  placeholder="Pet Name 2"
                  onChange={(e) => setPet2(e.target.value)}
                />
              </label>
              <label className={styles.label7}>
                <input
                  className={styles.textBox7}
                  type="name"
                  placeholder="Pet Name 3"
                  onChange={(e) => setPet3(e.target.value)}
                />
              </label>
              <input
                type="submit"
                value={content.buttonText}
                className={styles.submit2}
              />
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default AuthForm;

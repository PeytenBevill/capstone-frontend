import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import AuthForm from "./components/Login/Auth";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [token, setToken] = useState("");
  const checkAuth = (token) => {
    if(token.length){
      return true
    }

    return false;
  };

  const ProtectedRoute = (props) => {
    const { component: Component, token, ...rest } = props;
    return checkAuth(token) === true ? (
      <Component {...rest} />
    ) : (
      <Navigate to="/signin" />
    );
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<AuthForm formType="signup" />} />
        <Route
          path="/signin"
          element={<AuthForm setToken={setToken} formType="signin" />}
        />
        <Route
          path="/dashboard"
          element={<ProtectedRoute component={Dashboard} token={token} />}
        />
      </Routes>
    </>
  );
}

export default App;

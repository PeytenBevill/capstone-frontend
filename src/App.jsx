import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import AuthForm from "./components/Login/Auth";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import PublishedDashboard from "./components/PublishedDashboard/PublishedDashboard";
import "./App.css";

function App() {
  const [authToken, setToken] = useState(localStorage.getItem("authToken") || "");
  const [user_id, setUserId] = useState(localStorage.getItem("user_id") || "");

  const checkAuth = () => {
    return authToken !== "";
  };

  const ProtectedRoute = (props) => {
    const { component: Component, authToken, ...rest } = props;
    return checkAuth(authToken) === true ? (
      <Component {...rest} />
    ) : (
      <Navigate to="/signin" />
    );
  };

  const handleLogin = (user_id) => {
    setUserId(user_id);
  };

  return (
    <>
      <Header authToken={authToken} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<AuthForm formType="signup" />} />
        <Route
          path="/signin"
          element={
            <AuthForm
              onLogin={handleLogin}
              setToken={setToken}
              setUserId={setUserId}
              formType="signin"
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              component={Dashboard}
              authToken={authToken}
              user_id={user_id}
            />
          }
        />
        <Route path="/published/:user_id" element={<PublishedDashboard />} />
      </Routes>
    </>
  );
}

export default App;

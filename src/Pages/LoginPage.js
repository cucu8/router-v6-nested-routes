import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
  return (
    <div>
      Login Page
      <button onClick={() => navigate("/main")}>Login</button>
    </div>
  );
};

export default LoginPage;

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "./LoginPage.css";

function LoginPage() {
  const { role } = useParams();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const devUser = JSON.parse(localStorage.getItem("devUser"));

    if (
      role === "developer" &&
      devUser &&
      devUser.email === email &&
      devUser.password === password
    ) {
      localStorage.setItem("loggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials or user not found.");
    }
  };

  return (
    <div className="login-container">
      <div className="card login-card">
        <div
          className="back-arrow"
          onClick={() => navigate(-1)}
          title="Go Back"
        >
          ←
        </div>
        <div className="text-center mb-3">
          <img src={logo} alt="DevConnect Logo" width="60" />
        </div>
        <h2 className="text-center mb-4">
          {role === "developer" ? "Developer" : "User"} Login
        </h2>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-flex justify-content-end mb-3">
          <a
            href="/forgot-password"
            className="text-info text-decoration-none underline-hover"
            style={{ fontSize: "0.9rem" }}
          >
            Forgot Password?
          </a>
        </div>

        <button className="btn btn-primary w-100 mb-3" onClick={handleLogin}>
          Login
        </button>

        <div className="text-center text-light mb-3">or</div>

        <button className="btn btn-outline-light w-100 mb-4" disabled>
          <i className="bi bi-google me-2"></i> Continue with Google
        </button>

        <p className="text-center text-light">
          Don’t have an account?{" "}
          <span
            className="text-info underline-hover"
            role="button"
            onClick={() => navigate(`/signup/${role}`)}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;

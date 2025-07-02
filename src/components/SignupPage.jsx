import React, { useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";

function SignupPage() {
  const { role } = useParams();
  const isDeveloper = role === "developer";
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    techStack: "",
    github: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDeveloper) {
      localStorage.setItem("devUser", JSON.stringify(formData));
    }
    alert("Signup successful! You can now log in.");
    navigate(`/login/${role}`);
  };

  return (
    <div className="signup-container">
      <div className="card signup-card">
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
          {isDeveloper ? "Developer" : "User"} Signup
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Email"
              required
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
              required
              onChange={handleChange}
            />
          </div>

          {isDeveloper && (
            <>
              <div className="mb-3">
                <input
                  name="techStack"
                  type="text"
                  className="form-control"
                  placeholder="Tech Stack (e.g., MERN, Django)"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <input
                  name="github"
                  type="url"
                  className="form-control"
                  placeholder="GitHub or LinkedIn URL"
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          <button type="submit" className="btn btn-primary w-100 mb-3">
            Sign Up
          </button>

          <button className="btn btn-outline-light w-100" disabled>
            <i className="bi bi-google me-2"></i> Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;

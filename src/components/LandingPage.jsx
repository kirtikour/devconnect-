import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "./LandingPage.css";
import ThemeToggle from "./ThemeToggle";
import Navbar from "./Navbar";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="landing-bg px-3 pt-3">
        <div className="landing-content">
          <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1 text-center">
            <div className="logo mb-4">
              <img
                src={logo}
                alt="DevConnect Logo"
                className="animated-logo"
                width="100"
              />
            </div>

            <h1 className="mb-3 text-white animate-heading">
              Welcome to DevConnect
            </h1>
            <p className="mb-4 text-light">Connecting Developers & Users</p>

            <form className="w-100" style={{ maxWidth: "400px" }}>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Search developers or projects"
              />
              <button
                type="button"
                className="btn w-100"
                onClick={() => navigate("/select")}
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;

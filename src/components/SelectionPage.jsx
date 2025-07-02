import React from "react";
import { useNavigate } from "react-router-dom";
import "./SelectionPage.css";

function SelectionPage() {
  const navigate = useNavigate();

  return (
    <div className="selection-container">
      <h2 className="text-white mb-5">Who are you?</h2>
      <div className="row w-100 justify-content-center gap-4">
        <div className="col-md-3">
          <div
            className="card selection-card"
            onClick={() => navigate("/login/developer")}
          >
            <div className="card-body text-center">
              <h5 className="card-title">I’m a Developer</h5>
              <p className="card-text ">Find projects, showcase skills.</p>
              <div className="icon-wrapper my-3">
                {/* Terminal Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="role-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* User Card */}
        <div className="col-md-3">
          <div
            className="card selection-card"
            onClick={() => navigate("/login/user")}
          >
            <div className="card-body text-center">
              <h5 className="card-title">I’m a User</h5>
              <p className="card-text ">Hire devops for your ideas.</p>
              <div className="icon-wrapper my-3">
                {/* User Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="role-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectionPage;

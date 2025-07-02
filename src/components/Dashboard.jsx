import React, { useState } from "react";
import "./Dashboard.css";
import { BsList } from "react-icons/bs";
import Navbar from "./Navbar";

const activeProjects = [
  {
    title: "Portfolio Website",
    tech: "React, Bootstrap",
    description: "A personal portfolio to showcase skills and resume.",
  },
  {
    title: "E-commerce App",
    tech: "MERN Stack",
    description: "Full-stack shopping app with cart and admin dashboard.",
  },
  {
    title: "Fintech API Integration",
    tech: "Node.js, Express",
    description: "Integrating payment APIs for a finance startup.",
  },
];

const recentBids = [
  {
    title: "Travel App UI",
    date: "2 days ago",
  },
  {
    title: "Chatbot with NLP",
    date: "4 days ago",
  },
];

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <Navbar />
      <div className={`dashboard d-flex ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className={`sidebar p-4 ${sidebarOpen ? "open" : "closed"}`}>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a
                className="nav-link text-white"
                href="/profile"
                onClick={() => setSidebarOpen(false)}
              >
                Profile
              </a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link text-white" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-danger" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>

        <div className="main-content flex-grow-1 p-4">
          {/* Toggle Button */}
          <div className="d-flex align-items-center mb-4">
            <button
              className="btn btn-outline-light me-3"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <BsList size={24} />
            </button>
            <h2 className="text-white mb-0">Welcome, Developer</h2>
          </div>

          <h4 className="text-white mb-3">Active Projects</h4>
          <div className="row">
            {activeProjects.map((project, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 bg-dark text-white border border-primary shadow">
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <h6 className="card-subtitle mb-2 text-info">
                      {project.tech}
                    </h6>
                    <p className="card-text">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Bids */}
          <h4 className="text-white mt-5 mb-3">Recent Bids</h4>
          <div className="row">
            {recentBids.map((bid, index) => (
              <div className="col-md-6 mb-3" key={index}>
                <div className="bid-card p-3 rounded text-white bg-dark border border-secondary shadow-sm">
                  <h6 className="mb-1">{bid.title}</h6>
                  <small>Bid placed {bid.date}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

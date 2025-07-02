import React from "react";

function DeveloperCard() {
  const dev = JSON.parse(localStorage.getItem("devUser"));

  if (!dev) {
    return (
      <div
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        No developer profile found. Please sign up.
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#121212",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#1e1e1e",
          color: "white",
          padding: "24px",
          maxWidth: "400px",
          width: "100%",
          borderRadius: "12px",
          textAlign: "center",
          boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          style={{
            width: "50px",
            height: "50px",
            color: "#0d6efd",
            marginBottom: "16px",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0
            a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21
            a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0
            3 3 0 0 1 6 0Z"
          />
        </svg>

        <h5 style={{ fontWeight: "bold", marginBottom: "6px" }}>
          {dev.name || dev.email}
        </h5>
        <h6 style={{ color: "#0dcaf0", marginBottom: "16px" }}>
          {dev.title || "Full Stack Developer"}
        </h6>
        {dev.techStack && (
          <p style={{ marginBottom: "12px" }}>
            <strong>Tech Stack:</strong> {dev.techStack}
          </p>
        )}

        {dev.github && (
          <a
            href={dev.github}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              margin: "4px",
              padding: "6px 12px",
              border: "1px solid #fff",
              borderRadius: "6px",
              color: "#fff",
              textDecoration: "none",
              fontSize: "0.9rem",
            }}
          >
            GitHub
          </a>
        )}
        {dev.linkedin && (
          <a
            href={dev.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              margin: "4px",
              padding: "6px 12px",
              border: "1px solid #fff",
              borderRadius: "6px",
              color: "#fff",
              textDecoration: "none",
              fontSize: "0.9rem",
            }}
          >
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}

export default DeveloperCard;

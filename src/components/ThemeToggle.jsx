import React, { useEffect, useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    applyTheme(saved);
  }, []);

  const applyTheme = (theme) => {
    document.body.className = "";
    if (theme === "dark") {
      document.body.classList.add("bg-dark", "text-white");
    } else {
      document.body.classList.add("bg-light", "text-dark");
    }
  };

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  return (
    <div className="form-check form-switch d-flex align-items-center justify-content-end mb-4">
      <input
        className="form-check-input"
        type="checkbox"
        id="themeSwitch"
        onChange={handleToggle}
        checked={theme === "dark"}
      />
      <label className="form-check-label ms-2" htmlFor="themeSwitch">
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </label>
    </div>
  );
}

export default ThemeToggle;

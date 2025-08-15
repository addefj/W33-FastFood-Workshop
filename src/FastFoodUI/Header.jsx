import React, { useState, useEffect } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode class to body whenever darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      <div className="container py-2 d-flex justify-content-start">
        <button
          id="toggleMode"
          className="btn btn-outline-secondary btn-sm"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>

      <h1 className="text-center mb-4">Fast Food Menu</h1>
    </>
  );
};

export default Header;

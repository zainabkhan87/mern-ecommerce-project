import React, { useState } from 'react';
import './App.css'

const ThemeToggler = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle the theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);

    // Change the background color of the entire body
    document.body.style.backgroundColor = darkMode ? 'white' : '#333';
    //document.body.style.color = darkMode ? 'white' : 'black';
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex justify-end">
        <button
          onClick={toggleTheme}
          className="ml-auto"
          id='button'
        >
          Change Mode
        </button>
      </div>
    </div>
  );
};

export default ThemeToggler;
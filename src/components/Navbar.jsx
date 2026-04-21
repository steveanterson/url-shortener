import React, { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Navbar = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/70 border-b border-gray-200 dark:bg-gray-950/70 dark:border-gray-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">✂️</span>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Shorty
            </span>
          </div>
          <div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                // Sun Icon for Dark Mode
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 4.22a1 1 0 011.415 0l.708.708a1 1 0 11-1.414 1.414l-.708-.708a1 1 0 010-1.414zM16 10a1 1 0 011 1h1a1 1 0 110-2h-1a1 1 0 01-1 1zm-4.22 4.22a1 1 0 010 1.415l-.708.708a1 1 0 11-1.414-1.414l.708-.708a1 1 0 011.414 0zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.22-4.22a1 1 0 010-1.415l-.708-.708a1 1 0 00-1.414 1.414l.708.708a1 1 0 011.414 0zM4 10a1 1 0 01-1-1H2a1 1 0 000 2h1a1 1 0 011-1zm4.22-4.22a1 1 0 01-1.415 0l-.708-.708a1 1 0 011.414-1.414l.708.708a1 1 0 010 1.414zM10 5a5 5 0 100 10 5 5 0 000-10z" clipRule="evenodd" />
                </svg>
              ) : (
                // Moon Icon for Light Mode
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

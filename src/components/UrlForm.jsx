import React, { useState } from "react";
import { validateUrl } from "../utils/validateUrl";
import Loader from "./Loader";

const UrlForm = ({ onShorten, isLoading }) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!url.trim()) {
      setError("Please enter a URL.");
      return;
    }

    if (!validateUrl(url)) {
      setError("Please enter a valid URL including http:// or https://");
      return;
    }

    onShorten(url);
    setUrl(""); // Clear input on success
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 transition-all">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
          Shorten Your Links
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Paste your long URL below to create a concise, shareable link in seconds.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative group">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <input
              type="text"
              className={`block w-full pl-11 pr-4 py-4 text-base bg-gray-50 dark:bg-gray-800 border ${
                error ? "border-red-300 focus:ring-red-500" : "border-gray-200 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500"
              } rounded-2xl transition-colors focus:outline-none focus:ring-2 dark:text-white placeholder-gray-400 shadow-sm`}
              placeholder="https://example.com/very-long-url"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                if (error) setError("");
              }}
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-2xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg dark:focus:ring-offset-gray-900"
          >
            {isLoading ? "Wait..." : "Shorten"}
          </button>
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400 animate-pulse">
            {error}
          </p>
        )}
      </form>
      
      {isLoading && (
        <div className="mt-6">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default UrlForm;

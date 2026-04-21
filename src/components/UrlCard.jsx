import React from "react";
import toast from "react-hot-toast";

const UrlCard = ({ item, onDelete }) => {
  const { original, short } = item;

  const handleCopy = () => {
    navigator.clipboard.writeText(short);
    toast.success("Copied to clipboard!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <div className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700 transition-all gap-4">
      <div className="flex flex-col w-full overflow-hidden">
        <p className="text-gray-500 dark:text-gray-400 text-sm truncate w-full mb-1" title={original}>
          {original}
        </p>
        <a
          href={short}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 font-bold text-lg hover:underline truncate"
        >
          {short}
        </a>
      </div>

      <div className="flex items-center space-x-2 w-full sm:w-auto justify-end sm:justify-start pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100 dark:border-gray-700">
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50 rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 shrink-0"
        >
          Copy
        </button>
        <button
          onClick={() => onDelete(short)}
          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 shrink-0"
          aria-label="Delete link"
          title="Delete link"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UrlCard;

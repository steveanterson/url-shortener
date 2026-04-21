import React from "react";
import UrlCard from "./UrlCard";

const UrlList = ({ urls, onDelete }) => {
  if (!urls || urls.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 px-2">
        Recent Links
      </h2>
      <div className="flex flex-col gap-4">
        {urls.map((item, index) => (
          <UrlCard key={`${item.short}-${index}`} item={item} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default UrlList;

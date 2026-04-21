import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UrlForm from "./components/UrlForm";
import UrlList from "./components/UrlList";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { shortenUrl } from "./services/urlService";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const [urls, setUrls] = useLocalStorage("shorty_urls", []);
  const [isLoading, setIsLoading] = useState(false);

  const handleShorten = async (longUrl) => {
    setIsLoading(true);
    try {
      // Check if URL is already shortened in our history
      const existing = urls.find((u) => u.original === longUrl);
      if (existing) {
        toast("You already shortened this URL!", { icon: "ℹ️" });
        setIsLoading(false);
        return;
      }

      const result = await shortenUrl(longUrl);
      
      // Prepend the new short URL to the list
      setUrls([{ original: result.original, short: result.short }, ...urls]);
      toast.success("URL shortened successfully!");
    } catch (error) {
      toast.error(error.message || "Failed to shorten URL. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = (shortUrl) => {
    const newUrls = urls.filter((u) => u.short !== shortUrl);
    setUrls(newUrls);
    toast.success("Link removed from history");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans transition-colors duration-300">
      <Toaster position="top-center" />
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <UrlForm onShorten={handleShorten} isLoading={isLoading} />
        <UrlList urls={urls} onDelete={handleDelete} />
      </main>
      
      <footer className="mt-auto py-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Shorty. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

import axios from "axios";

// Using cleanuri.com/api/v1/shorten as a reliable free fallback 
// since shrtco.de was discontinued.
export const shortenUrl = async (url) => {
  try {
    // Alternatively using is.gd which does not require CORS workarounds easily
    const res = await axios.get(`https://is.gd/create.php?format=json&url=${encodeURIComponent(url)}`);
    
    if (res.data.errorcode) {
      throw new Error(res.data.errormessage || "API Error");
    }

    return {
      original: url,
      short: res.data.shorturl
    };
  } catch (error) {
    throw error;
  }
};

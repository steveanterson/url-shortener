export const validateUrl = (url) => {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    // Allow http and https protocols
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch (error) {
    return false;
  }
};

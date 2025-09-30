

export function isExternalUrl(url: string): boolean {
  // console.log("Checking URL:", url);
  try {
    const targetUrl = new URL(url);
    // console.log(targetUrl, 'targetUrl');
    const currentOrigin = window.location.origin;
    console.log(currentOrigin, 'currentOrigin');
    return targetUrl.origin !== currentOrigin;
  } catch (error) {
    // Handle cases where the URL might be malformed or relative
    // For relative URLs, they are considered internal by this logic
    return false; 
  }
}
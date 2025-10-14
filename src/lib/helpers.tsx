import states from "@content/data/states/us-states-with-detail.json"

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

export function toSnakeCase(str: string): string {
  // Replace spaces, hyphens, and other non-word characters with underscores
  // and then convert to lowercase.
  return str
    .replace(/[^a-zA-Z0-9]+/g, '_') // Replace non-alphanumeric characters with underscores
    .replace(/([A-Z])/g, '_$1')    // Add underscore before uppercase letters (for camelCase/PascalCase)
    .toLowerCase()
    .replace(/^_/, '')             // Remove leading underscore if present
    .replace(/_$/, '');            // Remove trailing underscore if present
}

export function capitalizeFirstLetter(str: string): string {
  if (typeof str !== 'string' || str.length === 0) {
    return str; // Handle empty strings or non-string inputs
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function dashesToSpaces(str: string): string {
  if (typeof str !== 'string' || str.length === 0) {
    return str; // Handle empty strings or non-string inputs
  }
  return str.replaceAll(/[_-]/g, ' ');
}

export function getUsStateName(stateCode: string) {
  console.log(stateCode, 'stateCode');
  if (typeof stateCode !== 'string' || stateCode.length === 0 || stateCode.length > 2) {
    return '';
  }

  return states.states.filter(state => state.abbreviation === stateCode).map(state => state.name);
}

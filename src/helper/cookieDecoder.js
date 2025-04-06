import Cookies from "js-cookie";

export const getCognitoAccessToken = () => {
  // Find all cookies that match the pattern 'CognitoIdentityServiceProvider'
  const allCookies = Cookies.get();

  // Look for the accessToken specifically
  const accessTokenKey = Object.keys(allCookies).find(
    (key) =>
      key.includes("CognitoIdentityServiceProvider") &&
      key.endsWith(".accessToken")
  );

  return accessTokenKey ? allCookies[accessTokenKey] : "";
};

export const getCognitoIdToken = () => {
  // Find all cookies that match the pattern 'CognitoIdentityServiceProvider'
  const allCookies = Cookies.get();

  // Look for the accessToken specifically
  const accessTokenKey = Object.keys(allCookies).find(
    (key) =>
      key.includes("CognitoIdentityServiceProvider") && key.endsWith(".idToken")
  );

  return accessTokenKey ? allCookies[accessTokenKey] : "";
};

export const getClientName = () => {
  return Cookies.get("cms_agency") || "";
};

export const logout = () => {
  let baseSite = getBaseUrl();
  const url = new URL(baseSite);

  // Retrieve the hostname
  const domain = url.hostname;
  Cookies.remove("_token", { path: "", domain: domain });

  window.location.href = baseSite;
};

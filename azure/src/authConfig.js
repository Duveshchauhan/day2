// src/authConfig.js

export const msalConfig = {
    auth: {
        clientId: "62507ec1-7ef0-4974-b792-b61229bb39fb", // Replace with your Azure AD B2C Application (client) ID
        authority: "https://login.microsoftonline.com/8a03efef-489f-461a-a12b-b976c3417a83/", // Replace with your sign-up/sign-in policy authority
        redirectUri: "http://localhost:3000", // Your redirect URI
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set to true if you encounter issues on IE11 or Edge
    }
};

export const loginRequest = {
    scopes: ["openid", "profile", "offline_access"]
};

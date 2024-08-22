// src/RegistrationPage.jsx

import React, { useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";

const RegistrationPage = () => {
    const { instance } = useMsal();

    const handleSignUp = () => {
        instance.loginRedirect(loginRequest); // This will use the authority from authConfig.js
    };

    useEffect(() => {
        const handleResponse = async () => {
            const response = await instance.handleRedirectPromise();
            if (response) {
                console.log("User registered:", response.account);
                // Handle additional logic after registration, if needed
            }
        };
        handleResponse();
    }, [instance]);

    return (
        <div>
            <h1>Sign Up</h1>
            <button onClick={handleSignUp}>Sign Up with Azure AD B2C</button>
        </div>
    );
};

export default RegistrationPage;

import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";

export const Auth0ProviderWithNavigate = ({ children }) => {

    const domain = process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL;
    const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_AUTH0_CALLBACK_URL;
    const audience = process.env.NEXT_PUBLIC_AUTH0_AUDIENCE;

    if (!(domain && clientId && redirectUri)) {
        return null;
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            cacheLocation="localstorage"
            useRefreshTokens={true}
            authorizationParams={{
                scope: 'openid profile email',
                audience: audience,
                redirect_uri: redirectUri,
            }}
        >
            {children}
        </Auth0Provider>
    );
};

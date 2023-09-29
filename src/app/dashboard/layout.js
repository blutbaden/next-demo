"use client"

import {withAuthenticationRequired} from "@auth0/auth0-react";

const DashboardLayout = ({children}) => {
    return <section>{children}</section>
}

// Wrap the component in the withAuthenticationRequired handler
export default withAuthenticationRequired(DashboardLayout);

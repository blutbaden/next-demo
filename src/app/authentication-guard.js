import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loader from "@/components/loader";

export const AuthenticationGuard = ({ component }) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => (
            <div className="w-full h-screen flex items-center justify-center">
                <Loader />
            </div>
        ),
    });
    return <Component />;
};

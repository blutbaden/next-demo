'use client'

import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {Auth0ProviderWithNavigate} from "@/app/auth0-provider-with-navigate";

export function Providers({children}) {
    return (
        <Auth0ProviderWithNavigate>
            <NextUIProvider>
                <NextThemesProvider attribute="class" defaultTheme="dark">
                    {children}
                </NextThemesProvider>
            </NextUIProvider>
        </Auth0ProviderWithNavigate>
    )
}

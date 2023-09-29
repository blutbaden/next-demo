'use client'

import './globals.css'
import { Poppins } from 'next/font/google'
import {Providers} from "@/app/providers";
import SideBar from "@/components/side-bar";
import ContentContainer from "@/components/content-container";
import {AuthenticationGuard} from "@/app/authentication-guard";

const poppins = Poppins({ weight: '300', subsets: [] })

export default function RootLayout({ children }) {

    const ProtectedView = ()  => <div className="flex">
        <div className="sm:flex hidden">
            <SideBar />
        </div>
        <ContentContainer>
            {children}
        </ContentContainer>
    </div>

    return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
            <AuthenticationGuard component={ProtectedView} />
        </Providers>
      </body>
    </html>
  )
}

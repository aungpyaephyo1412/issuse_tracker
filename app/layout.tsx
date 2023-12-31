import './globals.css'
import type {Metadata} from 'next'
import {Poppins} from 'next/font/google'
import React from "react";
import Navbar from "@/components/Navbar";
import '@radix-ui/themes/styles.css';
import {Theme} from "@radix-ui/themes";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "300", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`max-w-screen-xl mx-auto px-5`} suppressHydrationWarning>
        <Theme className={poppins.className}>
            <Navbar/>
            {children}
        </Theme>
        </body>
        </html>
    )
}

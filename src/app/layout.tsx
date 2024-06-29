"use client";
import "@/styles/globals.css";
import { Overpass } from "next/font/google";
import { cn } from "../lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import NavbarProvider from "@/components/navbar-provider";
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import VersionChecker from "@/components/version-checker";

const overpass = Overpass({
  subsets: ["latin"],
  variable: "--font-overpass",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <title>MangaPunch: Track, Explore, Discover Manga</title>
        <meta
          name="description"
          content="Track and explore a vast manga library on <strong>MangaPunch</strong>, discover popular manga titles through recommendations and reviews. Create an Account!"
        />
      </head>
      <body
        className={cn(
          `min-h-screen bg-background dark:bg-background-secondary font-overpass antialiased
          ${isSideBarOpen && "overflow-hidden"}`,
          overpass.variable
        )}
      >
        <VersionChecker />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavbarProvider
            isSideBarOpen={isSideBarOpen}
            setIsSideBarOpen={setIsSideBarOpen}
          >
            {children}
          </NavbarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

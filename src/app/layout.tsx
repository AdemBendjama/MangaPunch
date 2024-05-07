"use client";
import "@/styles/globals.css";
import { Overpass as FontSans } from "next/font/google";

import { cn } from "../lib/utils";
import Navbar from "@/components/ui/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { useState } from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
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
          `min-h-screen bg-background dark:bg-background-secondary font-sans antialiased ${
            isSideBarOpen && "h-screen overflow-hidden"
          }`,
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar
            isSideBarOpen={isSideBarOpen}
            setIsSideBarOpen={setIsSideBarOpen}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

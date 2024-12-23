import "@/styles/globals.css";

import { FilterContextProvider } from "@/context/filter-context-provider";
import NavbarProvider from "@/components/navbar-provider";
import { Overpass } from "next/font/google";
import SessionProvider from "@/components/session-provider";
import { ThemeProvider } from "@/components/theme-provider";
import VersionChecker from "@/components/version-checker";
import { cn } from "../lib/utils";
import ReactQueryProvider from "@/components/react-query-provider";
import ProgressBarProvider from "@/components/progress-bar-provider";
import ToasterProvider from "@/components/toaster-provider";

const overpass = Overpass({
  subsets: ["latin"],
  variable: "--font-overpass",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          `min-h-screen bg-background dark:bg-background-secondary font-overpass antialiased`,
          overpass.variable
        )}
      >
        <ReactQueryProvider>
          <VersionChecker />
          <SessionProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <FilterContextProvider>
                <ProgressBarProvider />
                <NavbarProvider>{children}</NavbarProvider>
              </FilterContextProvider>
            </ThemeProvider>
          </SessionProvider>
        </ReactQueryProvider>
        <ToasterProvider />
      </body>
    </html>
  );
}

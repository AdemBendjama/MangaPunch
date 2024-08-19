import "@/styles/globals.css";

import { FilterContextProvider } from "@/context/filter-context-provider";
import NavbarProvider from "@/components/navbar-provider";
import { Overpass } from "next/font/google";
import SessionProvider from "@/components/session-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import VersionChecker from "@/components/version-checker";
import { cn } from "../lib/utils";
import { getServerSession } from "next-auth";

const overpass = Overpass({
  subsets: ["latin"],
  variable: "--font-overpass",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
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
        <VersionChecker />
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <FilterContextProvider>
              <NavbarProvider>{children}</NavbarProvider>
            </FilterContextProvider>
            <Toaster />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

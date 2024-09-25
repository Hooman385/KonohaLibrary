import type { Metadata } from "next";
import "./globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from "@mui/material/CssBaseline";

import { MyThemeProvider } from "@/providers/MyThemeProvider";
import MyNavbar from "@/components/MyNavbar";
import Footer from "@/components/Footer";
import { Naruto, Ubuntu } from "./fonts";
import MyQueryClientProvider from "@/providers/MyQueryClientProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const metadata: Metadata = {
  title: "Konoha Library",
  description: "a simple database for naruto anime and manga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${Ubuntu.variable} ${Naruto.variable}`}>
      <body
        style={{
          fontFamily: "var(--font-ubuntu)",
        }}
      >
        <MyQueryClientProvider>
          <AppRouterCacheProvider>
            <CssBaseline />
            <MyThemeProvider>
              <MyNavbar />
              {children}
              <Footer />
            </MyThemeProvider>
          </AppRouterCacheProvider>
          <ReactQueryDevtools initialIsOpen />
        </MyQueryClientProvider>
      </body>
    </html>
  );
}

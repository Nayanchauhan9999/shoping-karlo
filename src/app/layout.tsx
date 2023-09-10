"use client";
import type { Metadata } from "next";
import "@/utils/styles/globals.css";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@emotion/react";
import theme from "@/utils/Theme";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Shoping Karlo",
  description:
    "Shoping Karlo - is an ecommerce website | Amazing Deals | Best Quality Products in cheap price.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={roboto.className}>{children}</body>
      </html>
    </ThemeProvider>
  );
}

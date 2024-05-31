import { ReactNode } from "react";
import type { Metadata } from "next";
import { IBM_Plex_Sans as IBMPlexSans } from "next/font/google";
import "./globals.css";

const plexSans = IBMPlexSans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "The Cocktail Corner",
  description: "Get your drink on with The Cocktail Corner!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plexSans.className} overscroll-none bg-slate-dark`}>
        {children}
      </body>
    </html>
  );
}

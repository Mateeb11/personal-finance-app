import Navbar from "./_components/_nav/navbar";
import "./globals.css";
import classes from "./rootLayout.module.scss";

import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";

const public_sans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={public_sans.className}>
        <div className={classes.pageContainer}>
          <Navbar />
          <div className={classes.contentContainer}>{children}</div>
        </div>
      </body>
    </html>
  );
}

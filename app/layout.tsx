import "./globals.css";
import classes from "./rootLayout.module.scss";

import Link from "next/link";
import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";

import NavIcon from "./_components/navIcon";

import overviewIcon from "@/assets/images/icon-nav-overview.svg";
import transactionsIcon from "@/assets/images/icon-nav-transactions.svg";
import budgetsIcon from "@/assets/images/icon-nav-budgets.svg";
import potsIcon from "@/assets/images/icon-nav-pots.svg";
import billsIcon from "@/assets/images/icon-nav-recurring-bills.svg";

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
        <ul className={classes.navBar}>
          <li>
            <Link href="/overview">
              <NavIcon src={overviewIcon} alt="Home icon"></NavIcon>
            </Link>
          </li>
          <li>
            <Link href="/transactions">
              <NavIcon src={transactionsIcon} alt="Transactions icon"></NavIcon>
            </Link>
          </li>
          <li>
            <Link href="/budgets">
              <NavIcon src={budgetsIcon} alt="Budgets icon"></NavIcon>
            </Link>
          </li>
          <li>
            <Link href="/pots">
              <NavIcon src={potsIcon} alt="Pots icon"></NavIcon>
            </Link>
          </li>
          <li>
            <Link href="/bills">
              <NavIcon src={billsIcon} alt="Bills icon"></NavIcon>
            </Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import classes from "./rootLayout.module.scss";

import Link from "next/link";
import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";

import NavIcon from "./_components/navIcon";
import MinimizeMenu from "./_components/minimizeMenu";

import LogoLarge from "@/assets/images/logo-large.svg";
import MinimizeIcon from "@/assets/images/icon-minimize-menu.svg";
import OverviewIcon from "@/assets/images/icon-nav-overview.svg";
import TransactionsIcon from "@/assets/images/icon-nav-transactions.svg";
import BudgetsIcon from "@/assets/images/icon-nav-budgets.svg";
import PotsIcon from "@/assets/images/icon-nav-pots.svg";
import BillsIcon from "@/assets/images/icon-nav-recurring-bills.svg";

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
          <nav className={classes.navBar}>
            <span className={classes.logo}>
              <LogoLarge />
            </span>
            <ul className={classes.navLinks}>
              <li>
                <Link href="/overview">
                  <NavIcon href="/overview" iconText="Overview">
                    <OverviewIcon />
                  </NavIcon>
                </Link>
              </li>
              <li>
                <Link href="/transactions">
                  <NavIcon href="/transactions" iconText="Transactions">
                    <TransactionsIcon />
                  </NavIcon>
                </Link>
              </li>
              <li>
                <Link href="/budgets">
                  <NavIcon href="/budgets" iconText="Budgets">
                    <BudgetsIcon />
                  </NavIcon>
                </Link>
              </li>
              <li>
                <Link href="/pots">
                  <NavIcon href="/pots" iconText="Pots">
                    <PotsIcon />
                  </NavIcon>
                </Link>
              </li>
              <li>
                <Link href="/bills">
                  <NavIcon href="/bills" iconText="Recurring Bills">
                    <BillsIcon />
                  </NavIcon>
                </Link>
              </li>
            </ul>
            <MinimizeMenu>
              <MinimizeIcon />
            </MinimizeMenu>
          </nav>
          <div className={classes.contentContainer}>{children}</div>
        </div>
      </body>
    </html>
  );
}

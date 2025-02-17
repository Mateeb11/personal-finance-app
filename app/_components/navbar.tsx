"use client";

import classes from "./navbar.module.scss";

import Link from "next/link";
import { useEffect, useState } from "react";

import NavIcon from "./navIcon";
import MinimizeMenu from "./minimizeMenu";

import LogoLarge from "@/assets/images/logo-large.svg";
import MinimizeIcon from "@/assets/images/icon-minimize-menu.svg";
import OverviewIcon from "@/assets/images/icon-nav-overview.svg";
import TransactionsIcon from "@/assets/images/icon-nav-transactions.svg";
import BudgetsIcon from "@/assets/images/icon-nav-budgets.svg";
import PotsIcon from "@/assets/images/icon-nav-pots.svg";
import BillsIcon from "@/assets/images/icon-nav-recurring-bills.svg";
import { MiniminzeMenuStatusContext } from "../_providers/minimizeMenuStatus-provider";

export default function Navbar() {
  const [minimizeBarStatus, setMinimizeBarStatus] = useState("false");

  useEffect(() => {
    setMinimizeBarStatus(localStorage.getItem("minimizeBar") || "false");
  }, []);

  const handleMinimizeBarStatus = (value: string) => {
    setMinimizeBarStatus(value);
    localStorage.setItem("minimizeBar", value);
  };

  const ctxValue = {
    minimizeBar: minimizeBarStatus,
    changeMinimizeBarStatus: handleMinimizeBarStatus,
  };
  return (
    <MiniminzeMenuStatusContext value={ctxValue}>
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
    </MiniminzeMenuStatusContext>
  );
}

"use client";

import classes from "./minimizeMenu.module.scss";

import { use } from "react";

import { MiniminzeMenuStatusContext } from "../_providers/minimizeMenuStatus-provider";
import NavIcon from "./navIcon";

export default function MinimizeMenu({ children }: any) {
  const { minimizeBar, changeMinimizeBarStatus } = use(
    MiniminzeMenuStatusContext
  );

  const changeNavbarStatus = () => {
    changeMinimizeBarStatus(minimizeBar === "false" ? "true" : "false");
  };

  return (
    <div className={classes.minimizeIcon} onClick={changeNavbarStatus}>
      <NavIcon iconText="Minimize Menu">{children}</NavIcon>
    </div>
  );
}

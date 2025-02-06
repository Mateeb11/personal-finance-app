"use client";

import classes from "./minimizeMenu.module.scss";

import { useEffect } from "react";
import NavIcon from "./navIcon";

export default function MinimizeMenu({ children }: any) {
  useEffect(() => {});
  return (
    <div className={classes.minimizeIcon}>
      <NavIcon iconText="Minimize Menu">{children}</NavIcon>
    </div>
  );
}

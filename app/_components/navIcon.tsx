"use client";

import classes from "./navIcon.module.scss";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavIcon({ href, iconText, children }: any) {
  const path: string = usePathname();

  const [minimizeBarStatus, setMinimizeBarStatus] = useState("false");

  useEffect(() => {
    setMinimizeBarStatus(localStorage.getItem("minimizeBar") || "false");
  });

  return (
    <div
      className={`${classes.iconContainer} ${
        path.startsWith(href) ? classes.active : classes.navHover
      }`}
    >
      {children}
      <span className={classes.iconText}>{iconText}</span>
    </div>
  );
}

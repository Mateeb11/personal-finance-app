"use client";

import classes from "./navIcon.module.scss";

import { usePathname } from "next/navigation";

export default function NavIcon({ href, iconText, children }: any) {
  const path: string = usePathname();

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

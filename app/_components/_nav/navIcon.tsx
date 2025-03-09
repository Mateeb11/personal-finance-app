"use client";

import classes from "./navIcon.module.scss";

import { use } from "react";
import { usePathname } from "next/navigation";
import { MiniminzeMenuStatusContext } from "../../_providers/minimizeMenuStatus-provider";

export default function NavIcon({
  href,
  iconText,
  defaultRoute = false,
  children,
}: any) {
  const path: string = usePathname();

  const { minimizeBar } = use(MiniminzeMenuStatusContext);

  return (
    <div
      className={`${classes.iconContainer} ${
        path.startsWith(href) || (path.length === 1 && defaultRoute)
          ? classes.active
          : classes.navHover
      } ${minimizeBar === "true" ? "pl-8 pr-6" : undefined}`}
    >
      <span className={classes.icon}>{children}</span>
      <span
        className={`${classes.iconText} ${
          minimizeBar === "true" ? classes.hideText : undefined
        }`}
      >
        {iconText}
      </span>
    </div>
  );
}

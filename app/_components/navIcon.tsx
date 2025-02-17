"use client";

import classes from "./navIcon.module.scss";

import { use } from "react";
import { usePathname } from "next/navigation";
import { MiniminzeMenuStatusContext } from "../_providers/minimizeMenuStatus-provider";

export default function NavIcon({ href, iconText, children }: any) {
  const path: string = usePathname();

  const { minimizeBar } = use(MiniminzeMenuStatusContext);

  return (
    <div
      className={`${classes.iconContainer} ${
        path.startsWith(href) ? classes.active : classes.navHover
      }`}
    >
      {children}
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

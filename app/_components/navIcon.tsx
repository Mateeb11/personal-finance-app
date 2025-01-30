"use client";

import classes from "./navIcon.module.scss";

import { usePathname } from "next/navigation";

export default function NavIcon({ href, children }: any) {
  const path: string = usePathname();

  return (
    <div
      className={`grid place-items-center min-w-16 min-h-11 ${
        classes.iconContainer
      } ${path.startsWith(href) ? classes.active : classes.navHover}`}
    >
      {children}
    </div>
  );
}

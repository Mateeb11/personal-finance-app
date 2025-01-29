"use client";

import classes from "./navIcon.module.scss";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavIcon({ src, alt, href }: any) {
  const path: string = usePathname();

  return (
    <div
      className={`grid place-items-center min-w-16 min-h-11 ${
        classes.roundBorders
      } ${path.startsWith(href) ? classes.active : undefined}`}
    >
      <Image
        src={src}
        alt={alt}
        className={path.startsWith(href) ? classes.activeFill : undefined}
      ></Image>
    </div>
  );
}

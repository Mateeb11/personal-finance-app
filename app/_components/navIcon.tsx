"use client";

import classes from "./navIcon.module.scss";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavIcon({ src, alt, href }: any) {
  const path: string = usePathname();

  return (
    <div
      className={`grid place-items-center min-w-16 min-h-12 ${
        path.startsWith(href) ? classes.active : undefined
      }`}
    >
      <Image src={src} width={24} height={24} alt={alt}></Image>
    </div>
  );
}

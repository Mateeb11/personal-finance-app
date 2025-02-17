"use client";

import classes from "./minimizeMenu.module.scss";

import NavIcon from "./navIcon";

export default function MinimizeMenu({ children }: any) {
  const changeNavbarStatus = () => {};

  return (
    <div className={classes.minimizeIcon} onClick={changeNavbarStatus}>
      <NavIcon iconText="Minimize Menu">{children}</NavIcon>
    </div>
  );
}

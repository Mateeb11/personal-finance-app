"use client";

import { createContext } from "react";

export const MiniminzeMenuStatusContext = createContext({
  minimizeBar: "false",
  changeMinimizeBarStatus: (value: string) => {},
});

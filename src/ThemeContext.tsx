import React, { createContext, useState } from "react";

export const ThemeContext: any = createContext(undefined);

const ThemeProvider = ({ children }: any) => {
  const [bgColor, setBgColor] = useState("white");

  const toggleBgColor = () => {
    setBgColor(bgColor === "white" ? "black" : "white");
  };

  return (
    <ThemeContext.Provider value={{ bgColor, setBgColor, toggleBgColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

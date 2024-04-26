import React, { createContext, useContext, useEffect, useState } from "react";

// Define el tipo para el contexto del tema
interface ThemeContextType {
  theme: "light" | "dark" | "system";
  setLightTheme: () => void;
  setDarkTheme: () => void;
  setSystemTheme: () => void;
}

// Crea el contexto del tema
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// Define el componente proveedor del contexto del tema
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark" | "system">(
    (localStorage.getItem("theme") as "light" | "dark" | "system") || "system"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const setLightTheme = () => {
    setTheme("light");
  };

  const setDarkTheme = () => {
    setTheme("dark");
  };

  const setSystemTheme = () => {
    setTheme("system");
  };

  // Actualiza el HTML class basado en el tema
  useEffect(() => {
    if (
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, setLightTheme, setDarkTheme, setSystemTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para acceder al contexto del tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe usarse dentro de un ThemeProvider");
  }
  return context;
};

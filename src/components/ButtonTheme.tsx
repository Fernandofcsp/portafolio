import { Listbox } from "@headlessui/react";
import React from "react";
import { useTheme } from "./ThemeContext";

const ButtonTheme: React.FC = () => {
  const { theme, setLightTheme, setDarkTheme, setSystemTheme } = useTheme();
  return (
    <div>
      <Listbox
        value={theme}
        onChange={(value) => {
          if (value === "light") {
            setLightTheme();
          } else if (value === "dark") {
            setDarkTheme();
          } else if (value === "system") {
            setSystemTheme();
          }
        }}
      >
        <div>
          <Listbox.Button className="z-10 h-8 w-8 items-center justify-center rounded-full shadow-md shadow-black/5 ring-1 ring-black/5 hover:ring-teal-500 focus:ring-2 focus:ring-teal-500 active:ring-teal-500 dark:bg-[#21242b] dark:ring-inset dark:ring-white/5">
            {theme === "light" && (
              <svg className="h-4 w-4 fill-gray-400" viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 1a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0V1Zm4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm2.657-5.657a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm-1.415 11.313-.707-.707a1 1 0 0 1 1.415-1.415l.707.708a1 1 0 0 1-1.415 1.414ZM16 7.999a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1ZM7 14a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm-2.536-2.464a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm0-8.486A1 1 0 0 1 3.05 4.464l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707ZM3 8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Z"
                />
              </svg>
            )}
            {theme === "dark" && (
              <svg
                className="h-4 w-4 fill-teal-400 dark:fill-teal-400"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"
                />
              </svg>
            )}
            {theme === "system" && (
              <svg className="h-4 w-4 fill-gray-400" viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.5l.31 1.242c.084.333.36.573.63.808.091.08.182.158.264.24A1 1 0 0 1 11 15H5a1 1 0 0 1-.704-1.71c.082-.082.173-.16.264-.24.27-.235.546-.475.63-.808L5.5 11H4a3 3 0 0 1-3-3V4Zm3-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
                />
              </svg>
            )}
          </Listbox.Button>
          <Listbox.Options className="ml-14 -translate-x-1/2 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-[#21242b] dark:ring-white/5">
            {["light", "dark", "system"].map((option) => (
              <ThemeOption key={option} value={option} />
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

// Componente para renderizar cada opción de tema
const ThemeOption: React.FC<{ value: string }> = ({ value }) => {
  return (
    <Listbox.Option
      value={value}
      className={({ active }) =>
        `${
          active
            ? "text-teal-500 hover:bg-gray-200 dark:hover:bg-gray-700"
            : "text-gray-700 dark:text-gray-400"
        } flex cursor-pointer select-none items-center rounded-md p-2`
      }
    >
      {({ selected }) => (
        <div className="flex items-center">
          <ThemeIcon selected={selected} value={value} />
          <div className="ml-3">
            {value === "system"
              ? "System"
              : value.charAt(0).toUpperCase() + value.slice(1)}
          </div>
        </div>
      )}
    </Listbox.Option>
  );
};

// Componente para renderizar el icono del tema
const ThemeIcon: React.FC<{ selected: boolean; value: string }> = ({
  selected,
  value,
}) => {
  const iconClass = selected
    ? "h-4 w-4 fill-teal-400 dark:fill-teal-400"
    : "h-4 w-4 fill-gray-400";
  const iconPath =
    value === "dark"
      ? "M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"
      : value === "system"
      ? "M1 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.5l.31 1.242c.084.333.36.573.63.808.091.08.182.158.264.24A1 1 0 0 1 11 15H5a1 1 0 0 1-.704-1.71c.082-.082.173-.16.264-.24.27-.235.546-.475.63-.808L5.5 11H4a3 3 0 0 1-3-3V4Zm3-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
      : "M7 1a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0V1Zm4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm2.657-5.657a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm-1.415 11.313-.707-.707a1 1 0 0 1 1.415-1.415l.707.708a1 1 0 0 1-1.415 1.414ZM16 7.999a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1ZM7 14a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm-2.536-2.464a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm0-8.486A1 1 0 0 1 3.05 4.464l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707ZM3 8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Z";

  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className={iconClass}>
      <path fillRule="evenodd" clipRule="evenodd" d={iconPath} />
    </svg>
  );
};

export default ButtonTheme;

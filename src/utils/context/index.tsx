import { Dispatch, SetStateAction, createContext } from "react";

export const SetThemeContext = createContext<null | Dispatch<
  SetStateAction<boolean>
>>(null);

export const IsDarkTheme = createContext<null | boolean>(null);

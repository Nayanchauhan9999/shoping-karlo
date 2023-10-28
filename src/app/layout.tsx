"use client";
// import type { Metadata } from "next";
import "@/utils/styles/globals.css";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@emotion/react";
import { lightTheme, darkTheme } from "@/utils/Theme";
import store, { persistor } from "@/store";
import { Provider } from "react-redux";
import { useState } from "react";
import { SetThemeContext, IsDarkTheme } from "@/utils/context";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/utils/graphql/client";
import { PersistGate } from "redux-persist/integration/react";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

// export const metadata: Metadata = {
//   title: "Shoping Karlo",
//   description:
//     "Shoping Karlo - is an ecommerce website | Amazing Deals | Best Quality Products in cheap price.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <ApolloProvider client={client}>
        <SetThemeContext.Provider value={setIsDarkTheme}>
          <IsDarkTheme.Provider value={isDarkTheme}>
            <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
              <html lang="en">
                <body className={roboto.className}>{children}</body>
              </html>
            </ThemeProvider>
          </IsDarkTheme.Provider>
        </SetThemeContext.Provider>
      </ApolloProvider>
      {/* </PersistGate> */}
    </Provider>
  );
}

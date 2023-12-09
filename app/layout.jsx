"use client";
import AuthProtected from "@/components/AuthProtected";
import "./globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <Provider store={store}>
          <AuthProtected>
            <ThemeProvider>{children}</ThemeProvider>
          </AuthProtected>
        </Provider>
      </body>
    </html>
  );
}

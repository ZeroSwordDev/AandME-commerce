"use client";
import AuthProtected from "@/components/AuthProtected";
import "./globals.css";
import { ThemeProvider } from "@material-tailwind/react";


export default function RootLayout({ children }) {
  return (
    <html >
      <body>
        <AuthProtected >
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProtected>
      </body>
    </html>
  );
}

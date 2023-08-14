"use client";
import AuthProtected from "@/components/AuthProtected";
import "./globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { useState } from "react";
import DrawerCart from "@/components/DrawerCart";

export default function RootLayout({ children }) {


  const [open, setOpen] = useState(false);
 
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false)
 

  return (
    <html>
      <body className="overflow-x-hidden">
        <Provider store={store}>
          <nav>
            <DrawerCart closeDrawer={closeDrawer} open={open}/>
            <Navbar openDrawer={openDrawer}  />
            <SubNavbar />
          </nav>
          <AuthProtected>
            <ThemeProvider>{children}</ThemeProvider>
          </AuthProtected>

          <footer>
            <Footer />
          </footer>
        </Provider>
      </body>
    </html>
  );
}

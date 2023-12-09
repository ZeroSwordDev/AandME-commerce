"use client";

import React, { useState } from "react";
import Hero from "./home/_components/Hero";
import Products from "../components/Products";
import Navbar from "./home/_components/Navbar";
import DrawerCart from "./home/_components/DrawerCart";
import SubNavbar from "./home/_components/SubNavbar";
import Footer from "@/components/Footer";

function page({ children }) {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div>
      <main className="h-max w-max">
        <nav>
          <DrawerCart closeDrawer={closeDrawer} open={open} />
          <Navbar openDrawer={openDrawer} />
          <SubNavbar />
        </nav>
        <Hero />
        <Products />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default page;

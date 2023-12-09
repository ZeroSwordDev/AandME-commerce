"use client";

import React, { useState } from "react";
import Navbar from "./_components/Navbar";
import SubNavbar from "./_components/SubNavbar";
import Footer from "@/components/Footer";
import DrawerCart from "./_components/DrawerCart";

function page({ children }) {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div>
      <DrawerCart closeDrawer={closeDrawer} open={open} />
      <Navbar openDrawer={openDrawer} />
      <SubNavbar />
      {children}
      <Footer />
    </div>
  );
}

export default page;

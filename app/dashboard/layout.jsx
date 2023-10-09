"use client"

import SideBarDashboard from "@/components/SideBarDashboard";
import React from "react";

const layout = ({children}) => {
  return (
    <div className=" flex h-full w-full items-center   justify-between">
        <div className=" flex w-full h-screen  overflow-hidden  ">
        <SideBarDashboard/>
            {children}
        </div>
    </div>
  );
};

export default layout;

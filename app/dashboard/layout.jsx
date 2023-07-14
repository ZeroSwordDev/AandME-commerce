"use client"

import SideBarDashboard from "@/components/SideBarDashboard";
import React from "react";

const layout = ({children}) => {
  return (
    <div className="flex h-screen w-screen items-center   justify-between">
        <SideBarDashboard/>
        <div className=" w-full h-full p-4 ">
            {children}
        </div>
    </div>
  );
};

export default layout;

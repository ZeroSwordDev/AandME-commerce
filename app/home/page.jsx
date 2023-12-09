"use client";

import React, { useState } from "react";
import Hero from "./_components/Hero";
import Products from "@/components/Products";

import { useSession } from "next-auth/react";

function page({ children }) {

  return (
    <div>
      <main className="h-full w-full">
        <Hero />
        <Products />
      </main>
    </div>
  );
}

export default page;

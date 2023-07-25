'use client'
import { useSession } from "next-auth/react";
import React from "react";

const home = () => {
  const session = useSession()
  console.log(session);

  return <div>home</div>;
};

export default home;

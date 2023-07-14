'use client'
import { useSession } from "next-auth/react";
import React from "react";

const home = () => {
  const { data } = useSession()
  console.log(data);

  return <div>home</div>;
};

export default home;

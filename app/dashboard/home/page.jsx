'use client'
import { useSession } from "next-auth/react";
import React from "react";

const home = () => {
  const session = useSession()
  console.log(session);

  return <div className=" w-screen h-screen">
    <div className="flex h-full w-full bg-blue-500 justify-center items-center">
      <h1>asdsa</h1>
    </div>

  </div>;
};

export default home;

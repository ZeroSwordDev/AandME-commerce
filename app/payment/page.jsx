import CheckoutForm from "@/components/CheckoutForm";
import React from "react";

const page = () => {
  return (
    <div className="flex  h-full w-screen ">
      <div className="w-full flex-1 h-full bg-red-500  ">
        <h1>sad</h1>
      </div>
      <div className=" w-full flex-1   flex justify-center items-center">
        <CheckoutForm />
      </div>
    </div>
  );
};

export default page;

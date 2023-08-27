'use client'

import CardViewOrder from "@/components/CardViewOrder";
import CheckoutForm from "@/components/CheckoutForm";
import {  useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const page = () => {

  const cart = useSelector((state) => state.cart.cart);
  const router= useRouter()

  useEffect(() => {
   !cart?.length &&  router.push('/')
  }, [cart]);
  return (
    <div className=" flex  h-full max-w-[1440px] mx-auto items-center justify-center">
      <div className=" w-[800px] flex flex-wrap h-[600px] m-3  
     scroll-m-1 gap-8 overflow-y-auto items-center justify-center">
      {
        cart?.map(item => (
          <CardViewOrder key={item._id} cart={item}/>
        ))
      }
      </div>
      <div className=" w-full flex-1   flex justify-center items-center">
        <CheckoutForm cart={cart}/>
      </div>
    </div>
  );
};

export default page;
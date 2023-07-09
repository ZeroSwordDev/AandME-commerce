"use client";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

const SubNavbar = () => {
  return (
    <div className=" w-screen h-10  bg-black">
      <div className=" flex  h-full    items-center  justify-start  max-w-[1420px] mx-auto  xl:justify-around  ">
        <div className=" flex  items-center cursor-pointer space-x-1 sm: ml-10">
          <AiOutlineMenu size={20} color="white" />
          <h1 className="text-white  text-xs">Mas Productos</h1>
          <IoIosArrowDown size={20} color="white" />
        </div>
        <div className="hidden xl:flex items-center cursor-pointer">
          <h1 className="text-white text-xs">Tarjeteria</h1>
          <IoIosArrowDown size={20} color="white" />
        </div>
        <div className="hidden xl:flex items-center cursor-pointer">
          <h1 className="text-white text-xs">Marketing</h1>
          <IoIosArrowDown size={20} color="white" />
        </div>
        <div className="hidden xl:flex items-center cursor-pointer">
          <h1 className="text-white text-xs">Stickers</h1>
          <IoIosArrowDown size={20} color="white" />
        </div>
        <div className="hidden xl:flex items-center cursor-pointer">
          <h1 className="text-white text-xs">Grafica Publicitaria</h1>
          <IoIosArrowDown size={20} color="white" />
        </div>
        <div className="hidden xl:flex items-center cursor-pointer">
          <h1 className="text-white text-xs">Regalos corporativos</h1>
          <IoIosArrowDown size={20} color="white" />
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;

import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";

import { useDispatch } from "react-redux";

const ViewProducts = ({ item }) => {
  
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center relative  m-1  select-none	">
      <div className=" opacity-0  w-full h-full flex  justify-center items-center gap-3 absolute  z-10 hover:opacity-100 hover:bg-gray-500/30  transition-opacity">
       
          <AiOutlineEye
            size={40}
            cursor={"pointer"}
            className=" p-1 hover:bg-white scale-x-95 rounded-full hover:scale-100 "
            onClick={() => router.push(`/home/detail/${item.id}`)}
          />

        <AiOutlineHeart
          size={40}
          cursor={"pointer"}
          className=" p-1 hover:bg-white scale-x-95 rounded-full"
        />

      </div>
      <img src={item.image} alt="Descripción de la imagen" width="300" height="300" decoding="async" className="hover:opacity-70"/>

      <div className="flex gap-2 ">
        <h1>{item.name}</h1>
      </div>
    </div>
  );
};

export default ViewProducts;

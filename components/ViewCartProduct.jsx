import { addOneCart, deleteOneCart } from "@/redux/cart/cartSlice";
import React from "react";
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";

const ViewCartProduct = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col  items-center  m-1">
      <div className=" w-full h-[150px] bg-gray-500/20 flex  justify-between items-center rounded-lg ">
        <img
          src={item.image}
          alt="Descripción de la imagen"
          decoding="async"
          className=" w-36 h-full"
        />

        <div className="flex flex-col items-center justify-center w-full h-full bg-gray-500 gap-2 ">
          <div className="flex-1 mt-2">
            <h3>{item.name}</h3>
          </div>
          <div className="flex gap-3 w-full h-full items-center justify-center flex-3" >
            <IoMdAddCircleOutline size={25} className="hover:text-white" onClick={() => dispatch(addOneCart(item))}/>
            <span className="font-bold">{item.quantity || null}</span>
            <IoMdRemoveCircleOutline size={25} className="hover:text-white" onClick={() => dispatch(deleteOneCart(item._id))}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCartProduct;

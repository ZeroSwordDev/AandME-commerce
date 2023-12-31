import {
  Alert,
  Button,
  Drawer,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ViewCartProduct from "./ViewCartProduct";
import { removeAllCart } from "@/redux/cart/cartSlice";
import Link from "next/link";

const DrawerCart = ({ closeDrawer, open }) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = cart.reduce(
    (acc, obj) => acc + obj.quantity * obj.price,
    0
  );

  const dispatch = useDispatch();
  return (
    <div
      className=" h-full w-full z-40 select-none"
      style={{
        position: open ? "fixed" : "",
      }}
    >
      <Drawer
        placement="right"
        open={open}
        onClose={closeDrawer}
        className="p-4 flex flex-col   justify-between"
      >
        <div className="mb-6 flex  items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="uppercase">
            Carrito
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className=" w-full h-full overflow-y-auto">
          <div className="flex flex-col gap-4 ">
            {cart?.map((item, i) => (
              <ViewCartProduct key={i} item={item} />
            ))}
          </div>
        </div>

        <div className="flex bg-black text-white items-center gap-3 justify-evenly  w-full h-24 rounded-sm">
          <h3 className="ml-9">Total: ${totalAmount}</h3>
          {cart?.length > 0 && (
            <Link href={"/payment"}>
              <button
                className="bg-white text-black p-2 rounded-md  disabled:bg-gray-600"
                disabled={cart?.length > 0 ? false : true}
                onClick={() => closeDrawer(false)}
              >
                Pagar
              </button>
            </Link>
          )}
          <button
            className="bg-white text-black p-2 rounded-md mr-3 "
            onClick={() => dispatch(removeAllCart())}
          >
            vaciar
          </button>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerCart;

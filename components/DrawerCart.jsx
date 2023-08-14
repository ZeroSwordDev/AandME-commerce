import {
  Alert,
  Button,
  Drawer,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";
import ViewCartProduct from "./ViewCartProduct";

const DrawerCart = ({ closeDrawer, open }) => {
  const cart = useSelector((state) => state.cart.cart);
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
          <h3 className="ml-9">Total: $3000</h3>
          <button className="bg-white text-black p-2 rounded-md ">Pagar</button>
          <button className="bg-white text-black p-2 rounded-md mr-3 ">
            vaciar
          </button>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerCart;

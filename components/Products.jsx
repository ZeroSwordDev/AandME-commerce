"use client";
import React, { useEffect, useState } from "react";
import ViewProducts from "./ViewProducts";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetAllProduct } from "@/redux/products/productSlice";
import { Spinner } from "@material-tailwind/react";

const Products = () => {
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetAllProduct());
  }, []);

  return (
    <section className="max-w-[1440px] mx-auto ">
      <h1 className=" text-3xl font-medium my-4">Servicios populares</h1>
      {/* <ViewProducts /> */}
      {!loading ? (
        <div className="grid grid-cols-7 w-full h-full  mb-7 gap-2">
          {/* {products?.map((item, _) => (
            <ViewProducts key={_} item={item} />
          ))} */}
        </div>
      ) : (
        <div className="w-full h-[200px] flex items-center justify-center">
          <Spinner className="h-16 w-16" />
        </div>
      )}
    </section>
  );
};

export default Products;

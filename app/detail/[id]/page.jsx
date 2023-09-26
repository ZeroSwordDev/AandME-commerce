"use client";
import { fetchDetailsProduct } from "@/redux/detailProduct/detailProductSlice";
import { RiArrowLeftSLine } from "react-icons/ri";
import {
  Button,
  Carousel,
  Spinner,
} from "@material-tailwind/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateSticker } from "@/libs/Calculate";

const page = () => {
  const params = useParams();
  const _items = useSelector((state) => state.detailProduct.detailsProduct);
  const router = useRouter();
  const loading = useSelector((state) => state.detailProduct.loading);
  const [sizeTotal, setSizeTotal] = useState(0);



  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetailsProduct(params.id));
  }, [params.id]);


  const newItems = { ..._items[0] };

  console.log(newItems)
  const size = newItems?.size;
  const uptime = newItems?.uptime;


  const handleChangeCalculatorSticker = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSizeTotal(value)
  };


 /*  const selectOptions = (arr) => {
    return (
      <div className="w-full h-full  flex gap-3">
        {arr?.map((element) => (
          <div key={element.name} className=" w-full flex flex-col h-full gap-6">
            <label htmlFor={element.name}>{element.name} </label>
            <select
              style={{
                borderBottom: "1px solid black",
              }}
              id={element.name}
            >
              <option value={""}>Seleccionar</option>
              {element?.values?.map((valueObj) => (
                <option key={valueObj.value} value={valueObj.addprice}>
                 { valueObj.value}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    );
  }; */

  return (
    <>
      {loading ? (
        <div className="h-[66vh] w-ful flex items-center justify-center">
          <Spinner className="h-32 w-32 " />
        </div>
      ) : (
        <div className=" max-w-[1440px] mx-auto h-full  p-3">
          <RiArrowLeftSLine cursor={"pointer"} onClick={() => router.back()} />
          <h2 className=" text-2xl m-7">{newItems?.name}</h2>
          <div className="flex p-1 gap-6 ">
            <div className="w-[700px] h-[500px] flex-1">
              <Carousel className="rounded-xl h-ful w-full">
                <img
                  src={newItems?.image}
                  alt="image 1"
                  className="h-full w-full object-contain "
                />
              </Carousel>
            </div>
            <div className="flex-1">
              <div className="flex flex-col w-full h-full justify-between">
                <div className="">
                  <div className="flex w-full flex-col gap-6">
                    <label htmlFor="">Cantidad</label>
                    <select
                      style={{
                        borderBottom: "1px solid black",
                      }}
                      onChange={handleChangeCalculatorSticker}
                    >
                      <option value=" ">Seleccionar</option>
                      {size?.map((item, index) => (
                        <option key={index} value={item?.size}>
                          {item?.amount}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="">
                  <div className="flex w-full flex-col gap-6">
                    <label htmlFor="">Tamaño</label>
                    <input
                      type="Number"
                      disabled
                      placeholder={`${sizeTotal} Unidades`}
                      className=" placeholder:text-black bg-transparent"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="flex w-full flex-col gap-6">
                    {/* {selectOptions(newItems?.options)} */}
                  </div>
                </div>
                <div className="">
                  <div className="flex w-full flex-col gap-6">
                    <label htmlFor="">Tiempo de entrega</label>
                    <select
                      style={{
                        borderBottom: "1px solid black",
                      }}
                    >
                      <option value="">Seleccionar</option>
                      {uptime?.map((item, index) => (
                        <option key={index} value={item}>
                          {item?.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col w-full justify-end items-end ">
                 {/*  <h5>TOTAL: $ {_item.price}</h5> */}
                  <p className="font-bold">Precio unitario:$ 234</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex mt-3 mb-3 w-full h-96">
            <div className="flex flex-col flex-1 w-full h-full">
              <div className="w-full flex items-center border-b-2  border-gray-700/40 h-8">
                <h3>Descripcion</h3>
              </div>
              <div className="w-full h-full p-4 ">
                <p>{newItems?.desc}</p>
              </div>
            </div>
            <div className="flex items-center justify-center flex-col flex-1 w-full h-full gap-3">
              <Button fullWidth className=" h-24">
                Sube tu Diseño
              </Button>
              <Button fullWidth variant="outlined" className=" h-24">
                Realiza tu diseño en Canvas
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default page;

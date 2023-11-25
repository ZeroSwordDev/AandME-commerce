"use client";
import { fetchDetailsProduct } from "@/redux/detailProduct/detailProductSlice";
import { RiArrowLeftSLine } from "react-icons/ri";
import {
  Button,
  Carousel,
  Spinner,
  Option,
  Select,
  Input,
} from "@material-tailwind/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetAllSizes } from "@/redux/sizes/sizesSlice";
import { fetchGetAllOptions } from "@/redux/options/optionSlice";
import { fetchGetAllUptimes } from "@/redux/uptimes/uptimesSlice";
import { fetchGetAllManufactoring } from "@/redux/manufacturing/Manufacturing";
import Image from "next/image";

const page = () => {
  const params = useParams();
  const router = useRouter();
  const _items = useSelector((state) => state.detailProduct.detailsProduct);
  const sizesGlobal = useSelector((state) => state.sizes.sizes);
  const uptimeGlobal = useSelector((state) => state.uptime.uptimes);
  const optionsGlobal = useSelector((state) => state.option.options);
  const loading = useSelector((state) => state.detailProduct.loading);
  const [sizeTotal, setSizeTotal] = useState(0);
  const [dataOptions, setdataOptions] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileUrl, setSelectedFileUrl] = useState(null);
  const dispatch = useDispatch();

  const newItems = { ..._items[0] };
  console.log(newItems);
  const handleChangeCalculatorSticker = (e, key) => {
    e.preventDefault();
    const value = e.target.value;

    if (value) {
      setSizeTotal(sizesGlobal.find((p) => p.id === value).quantity);
      setdataOptions({
        ...dataOptions,
        [key]: e.target.value,
      })
    }
  };
  let totalPrice = newItems?.price;
  const handleOptionSelected = (selected, key) => {
  
    selected ?
    setdataOptions({
      ...dataOptions,
      [key]: selected,
    }) : null;
  };
  const handleUptimeSelected = (event, key) => {
    const value = event.target.value;
    value ?
    setdataOptions({
      ...dataOptions,
      [key]: event.target.value,
    }): null;
  };
  console.log(dataOptions);
  useEffect(() => {
    dispatch(fetchDetailsProduct(params.id));
    dispatch(fetchGetAllSizes());
    dispatch(fetchGetAllOptions());
    dispatch(fetchGetAllUptimes());
    dispatch(fetchGetAllManufactoring());
  }, [params.id]);

  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileSelected = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setSelectedFileUrl(URL.createObjectURL(file));
    }
  }

  const selectOptions = (arr) => {
    return (
      <div className="w-full h-full  flex gap-3">
        {arr?.map((element) => (
          <div
            key={element.name}
            className=" w-full flex flex-col h-full gap-6"
          >
            {element?.manufacturing.length > 1 && (
              <Select
                label={element?.name}
                onChange={(e) => handleOptionSelected(e, "Options")}
                variant="static"
                color="red"
              >
                {element?.manufacturing.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            )}
            {element?.optionsAll.length > 1 && (
              <Select
                label={element?.name}
                onChange={(e) => handleOptionSelected(e, "Options")}
                variant="static"
                color="red"
              >
                {element?.optionsAll.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            )}
          </div>
        ))}
      </div>
    );
  };

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
                    <label htmlFor="">Tamaño</label>
                    <select
                      style={{
                        borderBottom: "1px solid black",
                      }}
                      onChange={(e) =>handleChangeCalculatorSticker(e, 'Sizes')}
                    >
                      <option value=" ">Seleccionar</option>
                      {newItems?.Size?.map((item, index) => (
                        <option key={index} value={item?.id}>
                          {item?.value}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="">
                  <div className="flex w-full flex-col gap-6">
                    <label htmlFor="">Cantidad</label>
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
                    {selectOptions(newItems?.Option)}
                  </div>
                </div>
                <div className="">
                  <div className="flex w-full flex-col gap-6">
                    <label htmlFor="">Tiempo de entrega</label>
                    <select
                      style={{
                        borderBottom: "1px solid black",
                      }}
                      onChange={(e) => handleUptimeSelected(e, 'Uptime')}
                    >
                      <option value="">Seleccionar</option>
                      {newItems?.Uptime?.map((item, index) => (
                        <option key={index} value={item?.id}>
                          {item?.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col w-full justify-end items-end ">
                  <h5>TOTAL: ${totalPrice}</h5>
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
            <Button fullWidth variant="outlined" className=" h-24" >
                Agregar al carrito
              </Button>
              <Button fullWidth className=" h-24" onClick={handleFileUpload}>
                Sube tu Diseño
              </Button>
              <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileSelected}
      />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default page;

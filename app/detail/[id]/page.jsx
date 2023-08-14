"use client";
import { fetchDetailsProduct } from "@/redux/detailProduct/detailProductSlice";
import { RiArrowLeftSLine } from "react-icons/ri";
import {
  Button,
  Carousel,
  Option,
  Select,
  Spinner,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { useParams, useRouter } from "next/navigation";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const params = useParams();
  const _items = useSelector((state) => state.detailProduct.detailsProduct);
  const router = useRouter()
  const loading = useSelector((state) => state.detailProduct.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetailsProduct(params.id));
  }, [params.id]);

  const data = [
    {
      label: "Description",
      value: "html",
      desc: `Promociona la imagen de tu empresa de forma divertida y creativa a través de etiquetas adhesivas que aportan gran calidad a los productos que las llevan.  

      - Impresión UV  alta de alta calidad.
      - Tinta UV impresa en adhesivo.
      - Mínimo 1 diseño por pliego de impresión. 
      - El valor no incluye elaboración de diseño, ni modificaciones. 
      - Usos sugeridos:  uso intemperie, muros, vidrios, frascos, cajas empaques.`,
    },
  ];

  return (
    <>
      {loading ? (
        <div className="h-[66vh] w-ful flex items-center justify-center">
          <Spinner className="h-32 w-32 "  />
        </div>
      ) : (
        <div className=" max-w-[1440px] mx-auto h-full  p-3">
          <RiArrowLeftSLine cursor={'pointer'}  onClick={() => router.back()}/>
          <h2 className=" text-2xl m-7">{_items.name}</h2>
          <div className="flex p-1 gap-6 ">
            <div className="w-[700px] h-[500px] flex-1">
              <Carousel className="rounded-xl h-ful w-full">
                <img
                  src={_items?.image}
                  alt="image 1"
                  className="h-full w-full object-contain "
                />
              </Carousel>
            </div>
            <div className="flex-1">
              <div className="flex flex-col w-full h-full justify-between">
                <div className="">
                  <h4>Tamaño</h4>
                  <Select>
                    <Option>Material Tailwind HTML</Option>
                  </Select>
                </div>
                <div className="">
                  <h4>Cantidad</h4>
                  <Select>
                    <Option
                      value="sdasd"
                      className=" text-black focus:text-black"
                    >
                      Material Tailwind HTML
                    </Option>
                  </Select>
                </div>
                <div className="">
                  <h4>Tipo de Adhesivo</h4>
                  <Select>
                    <Option>Material Tailwind HTML</Option>
                  </Select>
                </div>
                <div className="">
                  <h4>Corte Entrega Final</h4>
                  <Select>
                    <Option>Material Tailwind HTML</Option>
                  </Select>
                </div>
                <div className="">
                  <h4>Tiempo de producción</h4>
                  <Select>
                    <Option>Material Tailwind HTML</Option>
                  </Select>
                </div>

                <div className="flex flex-col w-full justify-end items-end ">
                  <h5>
                    TOTAL iva inc : $ 23.050 <s>$ 26.445</s>{" "}
                  </h5>
                  <p className="font-bold">Precio unitario:$ 234</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex mt-3 mb-3 w-full h-96">
            <div className="flex flex-col flex-1 w-full h-full">
              <Tabs value="html">
                <TabsHeader>
                  {data.map(({ label, value }) => (
                    <Tab key={value} value={value}>
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody>
                  {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                      {desc}
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
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

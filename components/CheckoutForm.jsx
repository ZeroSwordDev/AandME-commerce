"use client";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function CheckoutForm(value) {
  const [isOpen, setIsOpen] = useState(true);
  const cart = useSelector((state) => state.cart.cart);
  const  totalAmount = cart.reduce((acc, obj) => acc + (obj.quantity * obj.price) , 0)
  const [data, setData] = useState({
    rut: "",
    addrees: "",
    phone: "",
    name: "",
    products: [...cart],
    email: "",
    deliveryMethod: "",
  });

  const handleChange = (e) => {
    e.preventDefault();

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) =>{
    e.preventDefault();
    const res = await axios.post('/api/order', {
      rut: data.rut,
      addrees: data.addrees,
      phone: data.phone,
      name: data.name,
      products: data.products,
      email: data.email,
      userId:'64c03f927900fb183dda7a57',
      deliveryMethod: data.deliveryMethod,
    })
    console.log(res)
  }
  return (
    <div className="w-full flex items-center justify-center overflow-hidden ">
      <Card
        color="transparent"
        shadow={false}
        className="flex items-center justify-center"
      >
        <Typography variant="h4" color="blue-gray">
          Datos Delivery
        </Typography>
        <form className="mt-8 mb-2 w-[70%] " onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-wrap  w-full gap-6">
            <Input size="lg" label="Rut" name="rut" onChange={handleChange} />
            <Input
              size="lg"
              label="Dirreción"
              name="addrees"
              onChange={handleChange}
            />

            <Input
              size="lg"
              label="Phone*"
              name="phone"
              onChange={handleChange}
            />
            <Input
              size="lg"
              label="Full Name*"
              name="name"
              onChange={handleChange}
            />
            <Input
              size="lg"
              label="Email*"
              name="email"
              onChange={handleChange}
            />
            <select
              className="w-full"
              label="Delivery Method*"
              name="deliveryMethod"
              onClick={handleChange}
            >
              <option value="Sucursal">Sucursal</option>
              <option value="Retiro">Retiro</option>
            </select>
            <Typography variant="h4" color="blue-gray">
              Total: ${totalAmount} CLP
            </Typography>
          </div>

          <Button className="mt-6" fullWidth type="submit" >
            Realizar pago
          </Button>
        </form>
      </Card>
    </div>
  );
}
export default CheckoutForm;

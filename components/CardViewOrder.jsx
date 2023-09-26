import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";

const CardViewOrder = ({cart}) => {
  return (
    <Card className="w-[45%] h-48 flex  flex-row overflow-y-auto">
    <CardHeader
      shadow={false}
      floated={false}
      className="m-0 w-[50%]  shrink-0 rounded-r-none"
    >
      <img
        src={cart?.image}
        alt="card-image"
        className="h-full w-full object-cover"
      />
    </CardHeader>
    <CardBody className='flex flex-col items-start'>
      <Typography variant="h6" color="gray" className="mb-4 uppercase">
        {cart?.name}
      </Typography>
      <Typography variant="h6" color="blue-gray" className="mb-2">
        Cantidad: {cart?.quantity}
      </Typography>
      <Typography variant="h6" color="blue-gray" className="mb-2">
        Precio: {cart?.price * cart?.quantity}
      </Typography>
      <Typography variant="h6" color="blue-gray" className="mb-2">
        Tamaño: {cart?.size}
      </Typography>
    </CardBody>
  </Card>
  )
}

export default CardViewOrder
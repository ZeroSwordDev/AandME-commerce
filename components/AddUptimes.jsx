import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Card,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeleteUptimes, fetchGetAddUptimes, fetchGetAllUptimes } from "@/redux/uptimes/uptimesSlice";

const AddUptimes = () => {
  const TABLE_HEAD = ["Name", "Price","Options"];
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();

  const [dataOptions, setDataOptions] = useState({
    name: "",
    price: 0,
  });


  const uptimes = useSelector((state) => state.uptime.uptimes);


  useEffect(() => {
    dispatch(fetchGetAllUptimes());
  }, [uptimes.length]);

  const changeDataProduct = (e) => {
    e.preventDefault();

    setDataOptions({
      ...dataOptions,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchGetAddUptimes({...dataOptions, price: Number(dataOptions.price)}));
    setDataOptions({
      name: "",
      price: 0,
    });
  };

  return (
    <>
      {/* MODAL */}
      <Dialog open={isOpen} size={"lg"} handler={handleOpen}>
        <DialogHeader>Agregar Options </DialogHeader>
        <form onSubmit={handleSubmit} className="h-full">
          <DialogBody divider className="flex w-full h-full flex-col ">
            <div className="flex   items-start gap-6 h-full w-full">
              <div className="flex-1 flex w-full justify-around   gap-4 flex-col h-full ">
                <Input label="Name" name="name" onChange={changeDataProduct} />
                <Input  type='number' label="Price" name="price" onChange={changeDataProduct} />
              </div>
            </div>
         
          </DialogBody>
          {
            <DialogFooter>
              <Button
                variant="text"
                color="red"
                onClick={() => handleOpen(false)}
                className="mr-1"
              >
                <span>Cancel</span>
              </Button>
              <Button
                variant="gradient"
                color="green"
                onClick={() => handleOpen(false)}
                type="submit"
              >
                <span>Confirm</span>
              </Button>
            </DialogFooter>
          }
        </form>
      </Dialog>

      {/* MODAL */}
      <Typography
        variant="small"
        color="blue-gray"
        className="font-normal leading-none opacity-70 text-5xl"
      >
        Uptimes
      </Typography>
      <div className="flex gap-5 mr-4 ml-4">
        <Input label="Search" type="text" className="w-full  h-full" />
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outlined"
          className="flex items-center gap-2"
        >
          <IoMdAdd size={20} />
          Add
        </Button>
      </div>
      <Card className="h-full w-full overflow-y-auto ">
        <table className=" w-full min-w-max  text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100  bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {uptimes?.map(({ id, name, price  }, index) => {
              const isLast = index === uptimes.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal w-24"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal w-24"
                    >
                      {price}
                    </Typography>
                  </td>
                  <td className="flex gap-3 w-full  ">
                    <Button
                      variant="gradient"
                      className="flex items-center gap-2"
                         onClick={() => dispatch(fetchDeleteUptimes(id))}
                    >
                      <IoMdAdd size={20} />
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default AddUptimes;

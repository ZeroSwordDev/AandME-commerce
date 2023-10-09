import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
  Card,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { fetchAddProduct, fetchDeleteProduct, fetchGetAllProduct } from "@/redux/products/productSlice";
import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetAllOptions } from "@/redux/options/optionSlice";

const AddProduct = () => {
  const TABLE_HEAD = ["Name", "desription", "price", "image", "options"];
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const [valueOptions, setValueOptions] = useState([]);

  const [data, setdata] = useState({
    name: "",
    desc: "",
    price: 0,
    image: "",
  /*   sizeIds: [], */
  /*   uptimeid: [], */
    optionsId: [...valueOptions],
   /*  reviewIds: [], */
  });
  const products = useSelector((state) => state.product.products);
  const options = useSelector((state) => state.option.options);

  useEffect(() => {
    dispatch(fetchGetAllProduct());
    dispatch(fetchGetAllOptions());
  }, [products.length]);

  const changeDataProduct = (e) => {
    e.preventDefault();

    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeOptions = (Selected) => {
    const exist = valueOptions.find((p) => p === Selected);
    if (Selected !== "") {
      if (!exist) {
        setValueOptions((prev) => [...prev, Selected]);
      } else {
        setValueOptions(valueOptions.filter((item) => item !== Selected));
      }
    }
    return;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   dispatch(fetchAddProduct(data))

    
  };

  
  return (
    <>
      {/* MODAL */}
      <Dialog open={isOpen} size={"lg"} handler={handleOpen}>
        <DialogHeader>Agregar Producto </DialogHeader>
        <form onSubmit={handleSubmit}>
          <DialogBody divider className="flex w-full h-[550px] flex-col">
            <div className="flex   items-start gap-6 h-full w-full">
              <div className="flex-1 flex w-full justify-around   gap-4 flex-col h-full ">
                <Input label="Name" name="name" onChange={changeDataProduct} />
                <Textarea
                  label="Description"
                  name="desc"
                  onChange={changeDataProduct}
                />
                <Input
                  label="Price"
                  type="number"
                  name="price"
                  onChange={changeDataProduct}
                />
                <div className="relative flex w-full ">
                  <Input
                    label="Image"
                    className="pr-20 w-full"
                    containerProps={{
                      className: "min-w-0",
                    }}
                    name="image"
                    onChange={changeDataProduct}
                  />
                  <Button
                    size="sm"
                    color={"gray"}
                    className="!absolute right-1 top-1 rounded"
                  >
                    Add
                  </Button>
                </div>
              </div>
              <div className="flex-1 gap-4 flex flex-col">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                  alt="nature image"
                />
              </div>
            </div>

            <div className=" flex gap-3 flex-col mt-10 ">
              {/*  <Select label="Sizes">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select>

            <Select label="Uptimes">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select> */}

              <Select label="Options" onChange={handleChangeOptions}>
                {options.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.name}{" "}
                  </Option>
                ))}
              </Select>
            </div>
          </DialogBody>
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
        </form>
      </Dialog>

      {/* MODAL */}
      <Typography
        variant="small"
        color="blue-gray"
        className="font-normal leading-none opacity-70 text-5xl"
      >
        Product
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
      <Card className="h-full w-full  ">
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
            {products?.map(({ id,name, desc, price, image }, index) => {
              const isLast = index === products.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {desc}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {price}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {image}
                    </Typography>
                  </td>
                  <td className="flex gap-3 w-full">
                    <Button
                      variant="outlined"
                      className="flex items-center gap-2"
                    >
                      <IoMdAdd size={20} />
                      Edit
                    </Button>
                    <Button
                      variant="gradient"
                      className="flex items-center gap-2"onClick={() => dispatch(fetchDeleteProduct(id))}
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

export default AddProduct;

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
import {
  fetchAddProduct,
  fetchDeleteProduct,
  fetchGetAllProduct,
} from "@/redux/products/productSlice";
import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetAllOptions } from "@/redux/options/optionSlice";
import { fetchGetAllSizes } from "@/redux/sizes/sizesSlice";
import { fetchGetAllUptimes } from "@/redux/uptimes/uptimesSlice";

const AddProduct = () => {
  const TABLE_HEAD = ["Name", "desription", "price", "image", "options"];
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();

  const [selectedValues, setSelectedValues] = useState({
    options: [],
    sizes: [],
    uptimes: [],
  });

  const [data, setData] = useState({
    name: "",
    desc: "",
    price: 0,
    image: "",
    sizeIds: [],
    uptimeid: [],
    optionsId: [],
    reviewIds: [],
  });

  console.log(data)
  const products = useSelector((state) => state.product.products);
  const options = useSelector((state) => state.option.options);
  const sizes = useSelector((state) => state.sizes.sizes);
  const uptimes = useSelector((state) => state.uptime.uptimes);

  useEffect(() => {
    dispatch(fetchGetAllProduct());
    dispatch(fetchGetAllOptions());
    dispatch(fetchGetAllSizes());
    dispatch(fetchGetAllUptimes());

    if (!isOpen) {
      setSelectedValues({
        options: [],
        sizes: [],
        uptimes: [],
      });

      setData({
        name: "",
        desc: "",
        price: 0,
        image: "",
        sizeIds: [],
        uptimeid: [],
        optionsId: [],
        reviewIds: [],
      });
    }
  }, [products.length, isOpen]);

  const handleChangeOptions = (selected) => {
 const exist = data.optionsId.some(item => item === selected)
    if(!exist) {
        setData({
          ...data,
          optionsId: [...data.optionsId, selected]
        })
    }else{
      setData({
        ...data,
        optionsId:  data.optionsId.filter(item=> item !== selected)
      })
    }
  }
 

  const handleChangeSizes = (selected) => {
    const exist = data.sizeIds.some(item => item === selected)
       if(!exist) {
           setData({
             ...data,
             sizeIds: [...data.sizeIds, selected]
           })
       }else{
         setData({
           ...data,
           sizeIds:  data.sizeIds.filter(item=> item !== selected)
         })
       }
      }
     const handleChangeUptimes = (selected) => {
      const exist = data.uptimeid.some(item => item === selected)
         if(!exist) {
             setData({
               ...data,
               uptimeid: [...data.uptimeid, selected]
             })
         }else{
           setData({
             ...data,
             uptimeid:  data.uptimeid.filter(item=> item !== selected)
           })
         }
         
       }
  

  const changeDataProduct = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchAddProduct(data));
  };

  return (
    <>
      {/* MODAL */}
      <Dialog open={isOpen} size={"lg"} handler={handleOpen}>
        <DialogHeader>Agregar Producto </DialogHeader>
        <form onSubmit={handleSubmit} className="h-full">
          <DialogBody divider className="flex w-full h-full flex-col ">
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
              <Select
                label="Sizes"
                onChange={(id) => handleChangeSizes( id)}
              >
                {sizes?.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.value}
                  </Option>
                ))}
              </Select>
              <Select
                label="Uptimes"
                onChange={(id) => handleChangeUptimes( id)}
              >
                {uptimes?.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                ))}
              </Select>

              <Select
                label="Options"
                onChange={(id) => handleChangeOptions( id)}
              >
                {options?.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                ))}
              </Select>
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
            {products?.map(({ id, name, desc, price, image }, index) => {
              const isLast = index === products.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={id}>
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
                      {desc}
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
                  <td className={classes}>
                    <img
                      src={image}
                      alt=""
                      className="w-24 h-24 object-cover"
                    />
                  </td>
                  <td className="flex gap-3 w-full  ">
                    <Button
                      variant="gradient"
                      className="flex items-center gap-2"
                      onClick={() => dispatch(fetchDeleteProduct(id))}
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

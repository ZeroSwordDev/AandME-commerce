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
} from "@material-tailwind/react";
import { fetchGetAllProduct } from "@/redux/products/productSlice";
import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetAllManufactoring } from "@/redux/manufacturing/Manufacturing";
import { fetchGetAllAditionalOptions } from "@/redux/aditionalOptions/aditionalOptionSlice";
import { fetchDeleteOptions, fetchGetAddOptions } from "@/redux/options/optionSlice";

const AddOptions = () => {
  const TABLE_HEAD = ["Name", "options"];
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();

  const [dataOptions, setDataOptions] = useState({
    name: "",
    aditionalOptionsId: [],
    manufacturingIds: [],
  });

  const manufactoring = useSelector(
    (state) => state.Manufactoring.manufactoring
  );
  const othersOptions = useSelector(
    (state) => state.AditionalOptionSlice.aditionalOptions
  );
  const options = useSelector((state) => state.option.options);

  useEffect(() => {
    dispatch(fetchGetAllProduct());
    dispatch(fetchGetAllManufactoring());
    dispatch(fetchGetAllAditionalOptions());
  }, [options.length]);

  const changeDataProduct = (e) => {
    e.preventDefault();

    setDataOptions({
      ...dataOptions,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeManufactoring = (Selected) => {
    const exist = dataOptions?.valueManufactoring?.find((p) => p === Selected);
    if (Selected !== "") {
      if (!exist) {
        setDataOptions({
          ...dataOptions,
          manufacturingIds: [...dataOptions.manufacturingIds, Selected],
        });
      } else {
        setDataOptions({
          ...dataOptions,
          manufacturingIds: dataOptions.manufacturingIds.filter(
            (item) => item !== Selected
          ),
        });
      }
    }
    return;
  };

  const handleChangeAditional = (Selected) => {
    const exist = dataOptions?.aditionalOptionsId?.find((p) => p === Selected);
    if (Selected !== "") {
      if (!exist) {
        setDataOptions({
          ...dataOptions,
          aditionalOptionsId: [...dataOptions.aditionalOptionsId, Selected],
        });
      } else {
        setDataOptions({
          ...dataOptions,
          aditionalOptionsId: dataOptions.aditionalOptionsId.filter(
            (item) => item !== Selected
          ),
        });
      }
    }
    return;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchGetAddOptions(dataOptions));
    setDataOptions({
      name: "",
      aditionalOptionsId: [],
      manufacturingIds: [],
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
              </div>
            </div>
            <div className=" flex gap-3 flex-col mt-10 ">
              <Select
                label="Aditional Options"
                onChange={handleChangeAditional}
              >
                {othersOptions?.map((item) => (
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                ))}
              </Select>

              <Select label="Material" onChange={handleChangeManufactoring}>
                {manufactoring?.map((item) => (
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
        options
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
            {options?.map(({ id, name  }, index) => {
              const isLast = index === options.length - 1;
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
                  <td className="flex gap-3 w-full  ">
                    <Button
                      variant="gradient"
                      className="flex items-center gap-2"
                         onClick={() => dispatch(fetchDeleteOptions(id))}
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

export default AddOptions;

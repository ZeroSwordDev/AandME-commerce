import { BiSearchAlt2, BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="  max-w-[1420px] h-auto mx-auto px-6 py-6">
      <div className=" flex justify-between items-center mx-6">
        {/* left */}
        <div className="">
          {/* <img src="/logo.png" alt="" /> */}
          <h1 className="text-3xl  md:text-4xl font-bold  ">AandM</h1>
        </div>
        {/* center */}
        <div className="hidden xl:flex items-center px-3 w-[830px]  bg-gray-100 h-8 rounded-lg">
          <input
            type="text"
            placeholder="search"
            className="bg-transparent w-full focus:outline-none "
          />
          <BiSearchAlt2 size={25} />
        </div>
        {/* right */}
        <div className="flex space-x-5 items-center">
          <div className="cursor-pointer  ">
            <div className="relative flex flex-col items-center ">
              <AiOutlineShoppingCart size={25} />
              <p>Cart</p>
              <p className="absolute -top-1 -right-1 h-4 w-4 text-center bg-red-500 rounded-full text-xs text-white">1</p>
            </div>
          </div>
          <div className="cursor-pointer flex flex-col items-center">
            <BiUser size={25} />
            <p>User</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

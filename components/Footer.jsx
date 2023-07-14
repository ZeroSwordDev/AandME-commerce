import React from "react";
import { FaRegCopyright, FaFacebookSquare , FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" h-[180px] w-screen flex flex-col justify-end  bg-black">
      <div className="w-full h-12 mb-8  bg-white">
        <div className="max-w-[1440px] h-full mx-auto flex  items-center justify-between">
          <div className="flex space-x-1 items-center ml-4" >
            <FaRegCopyright />
            <h3>Copyright All Reserved - AandM 2023</h3>
          </div>
          <div className="flex items-center space-x-4 mr-8">
            <FaFacebookSquare  cursor={'pointer'} className=" w-8 h-8
            hover:text-gray-500 duration-100"/>
            <FaYoutube  cursor={'pointer'} className=" w-10 h-10
            hover:text-gray-500 duration-100"/>
            <FaInstagram  cursor={'pointer'}  className="text-black w-8 h-8
            hover:text-gray-500   "/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

const Hero = () => {
  return (
    <div className=" relative   max-w-[1420px] h-screen mx-auto mt-4 ">
      {/* overlay */}

      <div>
        <div className="absolute w-full h-[400px] bg-black/60 rounded-3xl   ">
          <div className="absolute top-[23%] left-20 space-y-2 ">
            <h1 className="text-5xl text-white">
              {" "}
              <span className="text-6xl font-bold">Stickers </span> en Oferta
            </h1>
            <p className="text-3xl text-white">3 x 3 500 Unidades</p>
            <button className="p-3 bg-white rounded-xl ">View now</button>
          </div>
        </div>
        <img
          className="w-full h-[400px] object-cover rounded-3xl  "
          src="https://cdn.pixabay.com/photo/2016/11/13/22/17/print-1822209_1280.jpg"
          alt=""
        />
      </div>

     
    </div>
  );
};

export default Hero;

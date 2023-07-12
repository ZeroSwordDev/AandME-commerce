import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="   max-w-[1440px] h-screen mx-auto mt-4 px-2">
      <div className="relative w-full overflow-hidden left-0 h-[340px] rounded-3xl   ">
        <div className=" absolute w-full h-full bg-black/60 rounded-3xl"></div>

        <div className="absolute top-[23%] left-20 space-y-2 ">
          <h1 className="text-5xl text-white">
            {" "}
            <span className="text-6xl font-bold">Stickers </span> en Oferta
          </h1>
          <p className="text-3xl text-white">3 x 3 500 Unidades</p>
          <button className="p-3 bg-white rounded-xl ">View now</button>
        </div>
        <img
          className="w-full h-[400px] object-cover rounded-3xl  "
          src="https://cdn.pixabay.com/photo/2016/11/13/22/17/print-1822209_1280.jpg"
          alt=""
        />
      </div>
      {/* Categories */}
      <div className=" flex flex-wrap  h-[700px]  items-center  w-full gap-2   lg:h-[230px] space-x-2 mt-2 ">
        <div className="relative  flex-grow overflow-hidden h-52 w-[460px] rounded-xl  ">
          {/* overlay */}
          <div className="absolute bg-purple-900/60  w-full h-full"></div>

          <div className="absolute top-[20%] left-10">
            <h1 className="text-5xl text-white font-semibold">Pendones</h1>
            <p className="text-white text-ms font-light">
              500 Stickers / 1 Metro Cuadrado
            </p>

            <button className="p-2 bg-white rounded-xl mt-5">
              View Product
            </button>
          </div>
          <img
            className=" w-full h-full top-0  object-cover"
            src="https://images.pexels.com/photos/10458835/pexels-photo-10458835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>

        <div className="relative flex-grow h-52 w-[460px] overflow-hidden rounded-xl  ">
          <div className="absolute bg-red-800/60  w-full h-full"></div>

          <div className="absolute top-[20%] left-10">
            <h1 className="text-5xl text-white font-semibold">
              Diseño Grafico
            </h1>
            <p className="text-white text-ms font-light">
              realiza tu diseño con nuesttro editador
            </p>
            <button className="p-2 bg-white rounded-xl mt-5">
              View Product
            </button>
          </div>
          <img
            className=" w-full h-full top-0  object-cover"
            src="https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>

        <div className="relative flex-grow h-52 w-[460px] overflow-hidden rounded-xl ">
          <div className=" absolute top-0 bg-blue-900/50  w-full h-full"></div>
          <div className="absolute top-[20%] left-10">
            <h1 className="text-5xl text-white font-semibold">Tarjeteria</h1>
            <p className="text-white text-ms font-light">
              300/Gramos Tarjetas Couche{" "}
            </p>
            <button className="p-2 bg-white rounded-xl mt-5">
              View Product
            </button>
          </div>
          <img
            className=" w-full h-full top-0  object-cover"
            src="https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

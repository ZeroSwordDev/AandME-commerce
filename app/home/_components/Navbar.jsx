import { BiLogIn, BiLogOut, BiSearchAlt2, BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const Navbar = ({ openDrawer }) => {
  const cart = useSelector((state) => state.cart.cart);
  const router = useRouter();
  const totalCart = cart.reduce((acc, obj) => acc + obj.quantity, 0);

  const { data: session, status } = useSession();
  return (
    <div className="  max-w-[1420px] h-auto mx-auto px-6 py-6">
      <div className=" flex justify-between items-center  lg:mx-6 ">
        {/* left */}
        <div className="text-center cursor-pointer ">
          {/* <img src="/logo.png" alt="" /> */}
          <h1
            className="text-ms  md:text-3xl font-italic  lg:text-2xl"
            onClick={() => router.push("/")}
          >
            Not
            <span className=" font-extrabold bg-purple-600 rounded-xl text-white  border-2   p-2">
              Only a
            </span>
            Desing
          </h1>
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
        <div className="flex space-x-5 items-center ">
          <div className="cursor-pointer  ">
            <div
              onClick={openDrawer}
              className="relative flex flex-col items-center cursor-pointer select-none"
            >
              <AiOutlineShoppingCart size={25} cursor={"pointer"} />
              <p>Cart</p>
              {totalCart > 0 && (
                <div className="flex items-center justify-center absolute -top-1 -right-1 h-5 w-5  rounded-full bg-red-500">
                  <span className="  text-center  text-xs text-white">
                    {totalCart}
                  </span>
                </div>
              )}
            </div>
          </div>
          {status === "authenticated" ? (
            <div
              className="cursor-pointer flex flex-col items-center"
              onClick={() => signOut()}
            >
              <BiLogOut size={25} />
              <p>Logout</p>
            </div>
          ) : (
            <div
              className="cursor-pointer flex flex-col items-center"
              onClick={() => router.push("/login")}
            >
              <BiLogIn size={25} />
              <p>Login</p>
            </div>
          )}
          {session?.user.name && (
            <div
              className="cursor-pointer flex flex-col items-center"
              onClick={() => router.push("/login")}
            >
              <BiUser size={25} />
              <p>{session?.user.name} </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

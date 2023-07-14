import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import SubNavbar from "@/components/SubNavbar";

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden h-screen w-full  ">
      <nav>
        <Navbar />
        <SubNavbar />
      </nav>
      <header>
        <Hero />
        <Products />
      
      </header>
      <footer >
        <div className=" h-[180px] w-screen flex flex-col justify-end text-white bg-black">
          <div className="w-full h-12 mb-8  bg-white">

          </div>
        </div>
      </footer>
    </main>
  );
}

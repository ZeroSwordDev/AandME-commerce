import Footer from "@/components/Footer";
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
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

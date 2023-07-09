import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";

export default function Home() {
  return (

      <main className="h-screen w-full">
      <nav >
        <Navbar />
        <SubNavbar />
      </nav>
      <header className="h-screen" >
        <Hero />
      </header>
      </main>
 
  );
}

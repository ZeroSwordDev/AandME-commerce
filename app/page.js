import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="flex flex-col  h-ful w-full  ">
      <header>
        <Hero />
        <Products />
      </header>
    </main>
  );
}

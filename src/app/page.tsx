import { HeroSection, Products } from "@/components/component";

export default function Home() {
  return (
    <main className="flex-1 container px-4 md:px-6 py-8 md:py-12 grid grid-cols-1 md:grid-cols-[1fr] gap-8">
      <HeroSection />
      <Products />
    </main>
  );
}

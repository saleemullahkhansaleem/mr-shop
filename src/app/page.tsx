import { HeroSection, ProductCard } from "@/components/component";

export default function Home() {
  return (
    <main className="flex-1 container px-4 md:px-6 py-8 md:py-12 grid grid-cols-1 md:grid-cols-[1fr] gap-8">
      <HeroSection />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {[1, 1, 1, 1, 1, 1].map((item, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </main>
  );
}

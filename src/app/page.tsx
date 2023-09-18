import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <section>
        <h2 className="font-semibold text-2xl">Flash Sale</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </main>
  );
}

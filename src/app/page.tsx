import CategoryTile from "@/components/CategoryTile";
import Showcase from "@/components/Showcase";
import { Categories } from "@/lib/types";

export default async function Home() {
  return (
    <main className="min-h-screen p-10">
      <section>
        <h2 className="font-semibold text-2xl">Flash Sale</h2>
        <Showcase numberOfItems={4} columns={4} />
      </section>
      <section>
        <h2 className="font-semibold text-2xl">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
          <CategoryTile type={Categories.men} />
          <CategoryTile type={Categories.women} />
        </div>
      </section>
    </main>
  );
}

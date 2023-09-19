import React from "react";
import Showcase from "@/components/Showcase";
import { Categories } from "@/lib/types";

function Page({ params }: { params: { categoryId: string } }) {
  const category =
    params.categoryId === "mens-clothing" ? Categories.men : Categories.women;

  return (
    <main className="p-10">
      <section>
        <h2 className="font-semibold text-2xl capitalize">{category}</h2>
        <Showcase numberOfItems={8} category={category} />
      </section>
    </main>
  );
}

export default Page;

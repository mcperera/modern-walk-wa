import React from "react";
import Showcase from "@/components/Showcase";
import { Categories } from "@/lib/types";

function Page({ params }: { params: { categoryId: Categories } }) {
  return (
    <main className="p-10">
      <section>
        <h2 className="font-semibold text-2xl capitalize">
          {params.categoryId === Categories.men
            ? Categories.men
            : Categories.women}
        </h2>
        <Showcase numberOfItems={8} category={params.categoryId} />
      </section>
    </main>
  );
}

export default Page;

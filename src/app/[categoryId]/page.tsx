import React from "react";
import Showcase from "@/components/Showcase";
import { Categories } from "@/lib/types";

function Page({ params }: { params: { categoryId: Categories } }) {
  return (
    <main>
      <section>
        <Showcase numberOfItems={8} category={params.categoryId} />
      </section>
    </main>
  );
}

export default Page;

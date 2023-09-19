import React from "react";
import ProductCard from "./ProductCard";
import { Categories } from "@/lib/types";

interface IShowcase {
  numberOfItems: number;
  category?: Categories;
  columns?: number;
}

const getShowcaseData = async (limt: number, category?: string) => {
  const url = `${process.env.FAKE_STORE_API}/products${
    category ? `/category/${category}` : ``
  }?limit=${limt}`;

  const res = await fetch(url, { cache: "no-cache" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

async function Showcase({ numberOfItems, category, columns = 4 }: IShowcase) {
  const data = await getShowcaseData(numberOfItems, category);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gridGap: 16,
      }}
      className="py-10 showcase"
    >
      {data.map((product: any) => {
        return <ProductCard key={product.id} product={...product} />;
      })}
    </div>
  );
}

export default Showcase;

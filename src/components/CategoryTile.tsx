import React from "react";
import Link from "next/link";
import { Categories } from "@/lib/types";

interface ICategoryTile {
  type?: Categories;
}

function CategoryTile({ type = Categories.men }: ICategoryTile) {
  return (
    <Link href={`/${type}`}>
      <div
        className={`${type === Categories.men && "bg-custom-green"} ${
          type === Categories.women && "bg-custom-red"
        } h-44 md:h-60 w-auto flex justify-center items-center rounded-xl`}
      >
        <span className="capitalize text-white font-semibold block text-center text-4xl md:text-5xl">
          {type}
        </span>
      </div>
    </Link>
  );
}

export default CategoryTile;

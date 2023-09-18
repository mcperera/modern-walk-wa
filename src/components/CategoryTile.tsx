import React from "react";
import Link from "next/link";

interface ICategoryTile {
  type?: string;
}

function CategoryTile({ type = "men's clothing" }: ICategoryTile) {
  return (
    <Link href={`/${type}`}>
      <div
        className={`${type === "men's clothing" && "bg-custom-green"} ${
          type === "women's clothing" && "bg-custom-red"
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

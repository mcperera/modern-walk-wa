import React from "react";
import Image from "next/image";
import { Categories } from "@/lib/types";

interface IProductCard {
  product: {
    title: string;
    image: string;
    category: Categories;
    price: number;
    description: string;
  };
}

function ProductCard({ product }: IProductCard) {
  const { title, image, category, price, description } = product;

  return (
    <div className="relative flex flex-col items-center min-h-[400px] w-auto text-center rounded-2xl shadow-xl border-gray-100 border-[1px] cursor-pointer">
      <h3 className="font-semibold text-base md:text-lg line-clamp-1 my-5 mx-7">
        {title}
      </h3>
      <Image
        className="mb-5"
        src={image}
        width={110}
        height={300}
        alt={title}
      />
      <div
        className={`${
          category === Categories.men ? "bg-custom-green" : "bg-custom-red"
        } rounded-2xl py-5 px-6 absolute bottom-0 right-0 left-0`}
      >
        <span className="font-semibold text-custom-blue block mb-2">{`Rs ${price}`}</span>
        <p className="text-sm line-clamp-4">{description}</p>
      </div>
    </div>
  );
}

export default ProductCard;

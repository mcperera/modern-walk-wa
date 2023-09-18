import React from "react";
import Image from "next/image";

const data = {
  id: 3,
  title: "Mens Cotton Jacket",
  price: 55.99,
  description:
    "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  rating: {
    rate: 4.7,
    count: 500,
  },
};

function ProductCard() {
  return (
    <div className="relative flex flex-col items-center h-[400px] w-auto text-center rounded-2xl shadow-xl border-gray-100 border-[1px] cursor-pointer">
      <h3 className="font-semibold text-base md:text-lg p-5 ">{data.title}</h3>
      <Image
        className="mb-5"
        src={data.image}
        width={150}
        height={300}
        alt={data.title}
      />
      <div
        className={`${
          data.category === "men's clothing"
            ? "bg-custom-green"
            : "bg-custom-red"
        } rounded-2xl py-5 px-10 absolute bottom-0 right-0 left-0`}
      >
        <span className="font-semibold text-custom-blue block mb-2">{`Rs ${data.price}`}</span>
        <p className="text-sm line-clamp-4">{data.description}</p>
      </div>
    </div>
  );
}

export default ProductCard;

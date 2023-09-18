import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex justify-center shadow-md p-7">
      <h1 className=" font-semibold text-4xl">
        <Link href={"/"}>Modern Walk</Link>
      </h1>
    </header>
  );
}

export default Header;

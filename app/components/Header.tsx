import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold">Saad&apos;s Store</h1>
        <nav>
          <Link className="px-4 py-2 hover:underline" href="/">
            Home
          </Link>
          <Link className="px-4 py-2 hover:underline" href="#products">
            Products
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

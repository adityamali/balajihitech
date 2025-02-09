import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full top-0 left-0 absolute">
      <div className="flex justify-between items-center bg-primary"></div>
      <div className="flex justify-between items-center px-16 py-8">
        <div className="text-2xl font-bold">
          <div id="logo" className="text-primary-900">
            <Link href={"/"}>Balaji Hi Tech Garment</Link>
          </div>
        </div>
        <div className="flex gap-8">
          <Link href={"/"} className="p-2">
            Home
          </Link>
          <Link href={"/products"} className="p-2">
            Products
          </Link>
          <Link href={"/materials"} className="p-2">
            Materials
          </Link>
          <Link href={"/about"} className="p-2">
            About
          </Link>
          <Link href={"/ethics"} className="p-2">
            Ethics
          </Link>
          <Link href={"/contact"} className="bg-primary py-2 px-4 rounded">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../images/airbnb.svg";
import Searchbar from "./Searchbar";
import Navbar from "./Navbar";

const Header = ({ placeholder }: { placeholder?: string }) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-5">
      <div className="container grid grid-cols-3 relative">
        <Link href="/" className="relative flex items-center h-10 my-auto">
          <Image
            className="object-contain object-left"
            src={Logo}
            alt="logo-img"
            fill
          />
        </Link>
        <Searchbar placeholder={placeholder}/>
        <Navbar/>
      </div>
    </header>
  );
};

export default Header;

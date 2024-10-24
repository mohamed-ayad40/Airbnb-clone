import Image from "next/image";
import React from "react";
import background from "../images/background.webp";

const Banner = () => {
    return <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px]">
        <Image src={background} className="object-cover object-left" fill alt="Banner-img" />
        <div className="absolute top-1/2 w-full text-center">
            <p className="text-sm sm:text-lg mb-2">Not sure where to go? Perfect.</p>
            <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold" type="button">
                I am flexible
            </button>
        </div>
    </div>;
};

export default Banner;

import React from "react";
import { IoIosArrowForward } from "react-icons/io";
const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
const yachts = [
  {
    id: 1,
    name: "Ocean Breeze",
    length: "40 ft",
    capacity: "10 people",
    price: "3500",
    imageUrl: "../../public/Ocean Breeze.png",
  },
  {
    id: 2,
    name: "Serenity Voyager",
    length: "60 ft",
    capacity: "18 people",
    price: "4800",
    imageUrl: "../../public/Serenity Voyager.png",
  },
  {
    id: 3,
    name: "Golden Horizon",
    length: "80 ft",
    capacity: "30 people",
    price: "9800",
    imageUrl: "../../public/Golden Horizon.png",
  },
];
const TopYacht = () => {
  return (
    <section className="flex flex-col gap-6 p-4">
      <span className="p-3 py-2 bg-[#26231D] text-yellow-600 text-sm rounded-full text-center inline-block self-center">
        Our quality yachts
      </span>
      <h2 className="text-white text-[2rem] font-playfair text-center leading-tight">
        Top Luxury Yacht
      </h2>

      <div className="flex gap-6 my-6 flex-col md:flex-row">
        {yachts.map((yacht) => (
          <div className="flex bg-[#1F1F1F] p-4 rounded-lg flex-1 shadow-2xl flex-col max-w-full md:max-w-[33%] border-2 duration-200 border-transparent hover:border-[#FFD585]">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-white text-md font-semibold">
                {yacht.name} <span className="!text-base">{yacht.length}</span>
              </h3>

              <p className="text-gray-200 text-sm">{yacht.capacity}</p>
            </div>
            <img
              src={yacht.imageUrl}
              alt=""
              className="w-[70%]  min-h-40 object-contain object-center self-center"
            />
            <div className="flex justify-between">
              <div>
                <span className="block text-gray-300 text-sm mb-1">From</span>
                <span className="text-white text-sm font-semibold ">
                  {currencyFormatter.format(yacht.price)}
                  <span className="text-gray-300"> / per hour</span>
                </span>
              </div>

              <a
                href="#none"
                className="self-end  text-yellow-400  bookNow flex items-center gap-2"
              >
                Book now <span className="bookNowIcon duration-300 transition-all"><IoIosArrowForward /></span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopYacht;

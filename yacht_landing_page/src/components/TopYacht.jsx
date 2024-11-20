import React from "react";

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
    <section className="flex flex-col gap-6">
      <span className="p-3 py-2 bg-[#26231D] text-yellow-600 text-sm rounded-full text-center inline-block self-center">
        Our quality yachts
      </span>
      <h2 className="text-white text-[2rem] font-playfair text-center leading-tight">
        Top Luxury Yacht
      </h2>

      <div className="flex gap-8">
        {
            yachts.map(yacht=>(
                <div className="flex bg-[#1F1F1F] p-6 rounded-lg flex-1 flex-col max-w-[33%]">
                    <div className="flex items-center justify-between gap-4">
                        <h3 className="text-white text-lg font-semibold">{yacht.name} <span className="!text-base">{yacht.length}</span></h3>
                        
                        <p className="text-gray-200">{yacht.capacity}</p>
                    </div>
                    <img src={yacht.imageUrl} alt="" className='w-[70%]  object-contain object-center self-center' />
                   <div className="flex justify-between">
                     <div>
                        <span className="block">From</span>
                        <span className="text-white  font-semibold">${yacht.price} <span>/ per hour</span></span>
                     </div>

                     <a href="#none" className="self-end">
                     Book now
                     </a>
                   </div>
                </div>
            ))
        }
      </div>
    </section>
  );
};

export default TopYacht;

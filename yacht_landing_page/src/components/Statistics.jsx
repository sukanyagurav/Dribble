import React from "react";

const stats=[
  {
    count:'74+',
    title:'Experienced sailing crew'
  },
  {
    count:'7416+',
    title:'Families enjoyed hoildays'
  },
  {
    count:'99+',
    title:'Boats available for rent'
  },
  {
    count:'400+',
    title:'Fully customizable'
  }
]
const Statistics = () => {
  return (
    <section className="my-20 flex flex-col  mx-auto p-4 gap-4">
      <span className="p-3 py-2 bg-[#26231D] text-yellow-600 text-sm rounded-full text-center inline-block self-center">Our quality yachts</span>
      <h2 className="text-white text-[2rem] font-playfair text-center leading-tight">
        <span  className="block">Open the World</span> <span>of Luxury & Entertainment</span>
      </h2>

      <div className="flex gap-2 mt-8 flex-col md:flex-row stats flex-wrap  ">
        {stats.map(stat=>(
          <div className="flex flex-1 flex-col items-center text-center gap-2 p-8   border-[#FFD585]  md:border-r-2  md:last:border-r-0 md:border-b-0" key={stat.title}> 
            <span className="text-[#FFD585] block text-4xl" >{stat.count}</span>
            <p className="text-white">{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;

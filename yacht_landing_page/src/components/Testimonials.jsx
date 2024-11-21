import React from "react";

const Testimonials = () => {
  return (
    <section className="my-28 p-4">
      <p className="text-gray-500 text-center text-2xl max-w-[460px] mx-auto">
        At AI Ali Yachts we are committed to providing our customers with
        exceptional service and quality.{" "}
        <span className="text-gray-200">
          Since 2013 boat chatters have trusted us with their yachts.
        </span>
      </p>

      <div className="my-12">
        <div className="mt-10 absolute left-0   p-8 border-2 rounded-[100%] mx-auto h-[100vh] w-full border-dashed dashed-border border-[#eab2084c] border-b-transparent ">
        

          <div className="absolute left-10 md:left-[210px]">
            <img
              className="w-14 h-14 rounded-full "
              src="../../public/user1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

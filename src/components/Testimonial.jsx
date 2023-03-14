import React, { Fragment } from "react";

const Testimonial = () => {
  const testmonials = [
    {
      image:
        "https://framerusercontent.com/images/NOxlPZmgcQR4kkzg3A4NjqZuYSU.webp",
      name: "Michael Grass",
      occupation: "Product Designer, Apple",
      title:
        "With this template it's easy to create a beautiful website in no time. I have been using Compact for some time now and it has been working great for me!",
    },
    {
      image:
        "https://framerusercontent.com/images/4EIANjev7LuKhnhOHDsv1sNBN4Y.webp",
      name: "Tom Ward",
      occupation: "Senior Art Director, Tesla",
      title:
        "I have tried a lot of similar products and Compact is the best! I'll recommend it to everyone for sure 🔥",
    },
    {
      image:
        "https://framerusercontent.com/images/o5CxWeo9S23mxGCOjIDR1A4ltc.webp",
      name: "Julie Choo",
      occupation: "Project Manager, Framer",
      title:
        "I highly recommend this Framer template. It has been so important for us as we continue to grow our company 🚀",
    },
  ];

  return (
    <Fragment>
      <div className="bg-[#0e1015] font-['Inter']">
        <div className="text-xl min-h-screen w-[90%] flex items-center justify-center mx-auto">
          <div className="">
            <h3 className="text-center text-[#ecf589] text-sm my-8">
              TESTIMONIALS
            </h3>
            <h1 className="text-center text-[#e3e4e8] text-5xl my-8">
              People love using Compact{" "}
            </h1>
            <p className="text-center text-[#a1a4aa] text-base">
              Here are some nice things our users have said about our template
              (totally not fake).{" "}
            </p>
            <div className="grid gap-4 lg:grid-cols-3 my-8">
              {testmonials.map((testmonial) => (
                <div className="bg-[#14171f] rounded-xl p-10 sm:w-[90%] md:w-[70%] mx-auto lg:w-full">
                  <div className="flex items-center mb-4">
                    <img
                      src={testmonial.image}
                      alt=""
                      className="h-[60px] w-[60px] rounded-full"
                    />
                    <div className="ml-4">
                      <h1 className="text-[#e3e4e8] text-base">
                        {testmonial.name}
                      </h1>
                      <p className="text-[#a1a4aa] text-sm">
                        {testmonial.occupation}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#e3e4e8] text-base">{testmonial.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Testimonial;

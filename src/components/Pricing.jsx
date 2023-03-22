import React, { Fragment } from "react";

const Pricing = () => {
  return (
    <Fragment>
      <div className="font-['Inter'] text-xl min-h-screen w-[90%] flex items-center justify-center mx-auto">
        <div className="">
          <div className="">
            <h3 className="text-center text-[#918cf2] text-sm my-8">PRICING</h3>
            <h1 className="text-center text-[#e3e4e8] text-5xl my-8">
              Simple and transparent pricing
            </h1>
            <p className="text-center text-[#a1a4aa] text-base">
              We have three options for you, if you just want to get inspired
              it's completely free.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3 my-8 items-center">
            <div className="p-8 bg-[#21232c] rounded-3xl text-[#e3e4e8] text-sm">
              <p className="">Adventurer</p>
              <h1 className="text-4xl my-6">Free</h1>
              <p className="text-[#a1a4aa] text-base my-6">
                Perfect for anyone that just wants to get inspired.
              </p>
              <hr />
              <div className="flex my-6">
                <img
                  src="https://framerusercontent.com/images/Rc1gZq5WQNxIbnMSaFsOLzuI0.svg"
                  alt=""
                />
                <p className="ml-2">Preview Only</p>
              </div>
              <div className="flex">
                <img
                  src="https://framerusercontent.com/images/Rc1gZq5WQNxIbnMSaFsOLzuI0.svg"
                  alt=""
                />
                <p className="ml-2">Good Source Of Inspiration</p>
              </div>
            </div>
            <div className="p-8 bg-[#21232c] rounded-3xl text-[#e3e4e8] text-sm">
              <p className="">Startup</p>
              <h1 className="text-4xl my-4">$20</h1>
              <p className="text-[#a1a4aa] text-base my-4">
              Great for Saas businesses, startups and designers.
              </p>
              <hr />
              <div className="flex my-4">
                <img
                  src="https://framerusercontent.com/images/Rc1gZq5WQNxIbnMSaFsOLzuI0.svg"
                  alt=""
                />
                <p className="ml-2">Pay once, use forever</p>
              </div>
              <div className="flex my-4">
                <img
                  src="https://framerusercontent.com/images/Rc1gZq5WQNxIbnMSaFsOLzuI0.svg"
                  alt=""
                />
                <p className="ml-2">Full edit access</p>
              </div>
              <div className="flex my-4">
                <img
                  src="https://framerusercontent.com/images/Rc1gZq5WQNxIbnMSaFsOLzuI0.svg"
                  alt=""
                />
                <p className="ml-2">Hands-on support</p>
              </div>
              <div className="flex my-4">
                <img
                  src="https://framerusercontent.com/images/Rc1gZq5WQNxIbnMSaFsOLzuI0.svg"
                  alt=""
                />
                <p className="ml-2">Built in Framer analytics</p>
              </div>
              <button className="bg-white rounded-lg w-full py-3 text-center text-black my-6 font-bold">Start Using Compact</button>
            </div>
            <div className="p-8 bg-[#21232c] rounded-3xl text-[#e3e4e8] text-sm">
              <p className="">Custom</p>
              <h1 className="text-4xl my-4">Get in touch</h1>
              <p className="text-[#a1a4aa] text-base my-4">
              If you want that personal touch and maybe custom pages too.
              </p>
              <hr />
              <div className="flex my-4">
                <img
                  src="https://framerusercontent.com/images/Rc1gZq5WQNxIbnMSaFsOLzuI0.svg"
                  alt=""
                />
                <p className="ml-2">Full edit access</p>
              </div>
              <div className="flex my-4">
                <img
                  src="https://framerusercontent.com/images/Rc1gZq5WQNxIbnMSaFsOLzuI0.svg"
                  alt=""
                />
                <p className="ml-2">Custom pages</p>
              </div>
              <div className="flex my-4">
                <img
                  src="https://framerusercontent.com/images/Rc1gZq5WQNxIbnMSaFsOLzuI0.svg"
                  alt=""
                />
                <p className="ml-2">Hands-on support</p>
              </div>
              <div className="flex">
                <img
                  src="https://framerusercontent.com/images/Rc1gZq5WQNxIbnMSaFsOLzuI0.svg"
                  alt=""
                />
                <p className="ml-2">Help with implementation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Pricing;

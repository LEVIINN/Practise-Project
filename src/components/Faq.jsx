import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

const Faq = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <section className="text-light text-center mt-[2rem] md:mt-[3rem] ">
        <h5 className="text-[#FF99CC] text-md mt-[1rem]">FAQ</h5>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mt-[2rem]">
          Got questions ?
        </h2>
        <p className="text-[#A1A4AA] mt-[3rem]">
          If you have any other questions - please get in touch at{" "}
          <a
            href="mailto:hello@matnie.com"
            className=" text-light hover:text-[#918cf2]"
          >
            hello@matnie.com
          </a>
        </p>
      </section>

      <section className="text-light my-12">
        <div className="flex justify-between">
          <h3>Do I need this template</h3>
          <button onClick={() => setActive(!active)} className="p-2">
            {active ? <FaTimes /> : <AiOutlinePlus />}
          </button>
        </div>
      </section>
    </>
  );
};

export default Faq;

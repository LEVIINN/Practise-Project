import { useState } from "react";
import IMG from "./images/compact.png";

import { Icon } from "@iconify/react";

const Accordian = ({ header, content }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <section
        className="text-light my-12 mb-[3rem] border-b-[1px] border-midLight w-full md:w-[60%] m-auto"
        onClick={() => setActive(!active)}
      >
        <div className="flex justify-between hover:text-midLight hover:cursor-pointer">
          <h3 className="font-semibold text-md md:text-xl"> {header}?</h3>
          <button className="p-2 text-lg md:text-2xl">
            {active ? (
              <Icon icon="iconoir:cancel" />
            ) : (
              <Icon icon="material-symbols:add" />
            )}
          </button>
        </div>
        {active && (
          <div>
            <p className="font-light duration-300 text-[.9rem] text-midLight py-4">
              {content}
            </p>
          </div>
        )}
      </section>
    </>
  );
};

const Faq = () => {
  const faq = [
    {
      id: 1,
      header: "Do I need this template",
      content: `Do you want to promote your startup or product in the best way
      possible? Are you a Framer designer wanting to get inspired? If
      you answered "Yes" to one of those questions, then there's a big
      chance that you need this template!`,
    },
    {
      id: 2,
      header: "What about other templates",
      content: `There are a lot of templates out there, but are they good enough? This one definitely is!`,
    },
    {
      id: 3,
      header: "Do you have any other templates",
      content: `There are a lot of templates out there, but are they good enough? This one definitely is!`,
    },
  ];

  return (
    <>
      <section className="text-light text-center my-[3rem] md:mt-[3rem] ">
        <h5 className="text-[#FF99CC] text-md mt-[1rem]">FAQ</h5>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mt-0 md:mt-[2rem]">
          Got questions ?
        </h2>
        <p className="text-[#A1A4AA] mt-[1rem] md:mt-[3rem]">
          If you have any other questions - please get in touch at{" "}
          <a
            href="mailto:hello@matnie.com"
            className=" text-light hover:text-[#918cf2]"
          >
            hello@matnie.com
          </a>
        </p>
      </section>
      {faq.map((faqs) => (
        <Accordian key={faqs.id} header={faqs.header} content={faqs.content} />
      ))}

      <footer className="text-light text-center m-8">
        <img src={IMG} alt="COMPACT IMG" className="m-auto p-4" />
        <div className="flex justify-center w-full py-4 ">
          <p className="pr-2">Privacy Policy</p>
          <p className="pl-2">Terms Of services</p>
        </div>
        <div className="flex justify-center w-full py-8 text-2xl text-midLight ">
          <a
            href="https://www.facebook.com/people/Leviinn-Technologies/100090823103737/"
            className="pr-5"
          >
            <Icon
              icon="fa-brands:facebook"
              className="hover:text-light duration-200"
            />
          </a>
          <a href="https://twitter.com/leviinnafrica" className="pr-5">
            <Icon
              icon="fa-brands:twitter"
              className="hover:text-light duration-200"
            />
          </a>
          <a href="AiOutlineGithub" className="pr-5">
            <Icon
              icon="fa-brands:github"
              className="hover:text-light duration-200"
            />
          </a>
          <a href="https://www.linkedin.com/company/leviinn/" className="pr-5">
            <Icon
              icon="fa-brands:linkedin"
              className="hover:text-light duration-200"
            />
          </a>
        </div>
        <p>Designed by Leviinn Team</p>
      </footer>
    </>
  );
};

export default Faq;

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/styles.css";
import { useLayoutEffect } from "react";

export default function Features() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const img1: any = gsap.utils.toArray(".img1");
      const img2: any = gsap.utils.toArray(".img2");
      const imgContainer = gsap.utils.toArray(".image-container");

      imgContainer.forEach((item: any, i) => {
        gsap.fromTo(
          img1[i],
          {
            x: -30,
            y: 30,
          },
          {
            scrollTrigger: {
              trigger: item,
              scrub: 0.5,
            },
            y: 0,
            x: 0,
          }
        );
        gsap.fromTo(
          img2[i],
          {
            x: 30,
            y: -30,
          },
          {
            scrollTrigger: {
              trigger: item,
              scrub: 0.5,
            },
            y: 0,
            x: 0,
          }
        );
      });
      gsap.fromTo(
        ".variant1",
        {
          x: -50,
          y: 50,
        },
        {
          scrollTrigger: {
            trigger: ".variantContainer1",
            scrub: 0.5,
          },
          y: 0,
          x: 0,
        }
      );
      gsap.fromTo(
        ".variant2",
        {
          x: 50,
          y: 50,
        },
        {
          scrollTrigger: {
            trigger: ".variantContainer1",
            scrub: 0.5,
          },
          y: 0,
          x: 0,
        }
      );
      gsap.fromTo(
        ".variant1-2",
        {
          x: 50,
          y: -50,
        },
        {
          scrollTrigger: {
            trigger: ".variantContainer2",
            scrub: 0.5,
          },
          y: 0,
          x: 0,
        }
      );
      gsap.fromTo(
        ".variant2-2",
        {
          x: -50,
          y: 50,
        },
        {
          scrollTrigger: {
            trigger: ".variantContainer2",
            scrub: 0.5,
          },
          y: 0,
          x: 0,
        }
      );
      gsap.fromTo(
        ".variant3",
        {
          y: 50,
        },
        {
          scrollTrigger: {
            trigger: ".variantContainer2",
            scrub: 0.5,
          },
          y: 0,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className=" py-20 font-['Inter'] pt-10 text-center bg-dark min-h-screen w-full">
      <div className="space-y-7">
        <h4 className="text-green text-xs tracking-wider font-semibold">
          FEATURES
        </h4>
        <h4 className="text-light text-4xl md:text-5xl font-medium md:font-semibold">
          What makes Compact so special?
        </h4>
        <h4 className="text-midLight ">
          There are plenty of benefits when using Compact template. We tried to
          list some of them out.
        </h4>
      </div>
      <div className="grid mt-10 md:mt-40 lg:grid-cols-4 md:grid-cols-2 justify-center gap-5">
        <div className="flex flex-col items-center text-center gap-5">
          <img
            src="https://framerusercontent.com/images/USUudjQ4TWZKDNuFARu5DJiYw.svg"
            className="h-[48px] w-[48px] mb-3"
          />
          <h4 className="text-light font-semibold text-xl">
            Save time & resources
          </h4>
          <p className="text-midLight">
            You don't have to spend thousands of dollars to get a nice website
            just to launch your product.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-5">
          <img
            src="	https://framerusercontent.com/images/ydHLRfzVj7Z43qxOLrQ32az2k.svg"
            className="h-[48px] w-[48px] mb-3"
          />
          <h4 className="text-light font-semibold text-xl">
            Easy to customize
          </h4>
          <p className="text-midLight">
            Insert your content, details about your product, connect your domain
            and hit publish. It's simple as that.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-5">
          <img
            src="	https://framerusercontent.com/images/VTI7oKcKrm4V7BCQvfUuMW1oR4.svg"
            className="h-[48px] w-[48px] mb-3"
          />
          <h4 className="text-light font-semibold text-xl">
            Clean & organized
          </h4>
          <p className="text-midLight">
            Compact is built as a one-page website. It uses pre-built color &
            text styles as well as components and interactions. Super easy to
            modify.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-5">
          <img
            src="	https://framerusercontent.com/images/Y955JeQbI2BWhBtIDyKK2VVo.svg"
            className="h-[48px] w-[48px] mb-3"
          />
          <h4 className="text-light font-semibold text-xl">
            Professional & credible
          </h4>
          <p className="text-midLight">
            Just look at it. It's beautiful, easy to setup. It has plenty of
            benefits and startups are using it. What else do you need to
            succeed?
          </p>
        </div>
      </div>
      <div className="grid items-center  md:grid-cols-2 gap-5 w-full pt-20">
        <div className="relative overflow-visible h-[420px] order-2 md:order-none image-container bg-gradient-to-b from-dark to-midDark">
          <img
            src="https://framerusercontent.com/images/9IA1uytkRsqvIi0dW2FcWyXT24.svg"
            className="absolute img1 md:bottom-10 bottom-5 left-5 md:left-10"
          />
          <img
            src="https://framerusercontent.com/images/snhunjenkQbJ0uyVoUfeIvGavk.svg"
            alt=""
            className="absolute img2 md:top-10 top-5 right-5 md:right-10"
          />
        </div>
        <div className="space-y-5 md:space-y-10 text-center order-1 md:order-none md:text-left md:pl-32 md:pr-10">
          <h4 className="text-light md:text-4xl text-3xl font-medium md:font-semibold">
            Animations & effects
          </h4>
          <p className="text-midLight">
            Pre-built animations and effects such as scroll transforms, appear
            animation, component interactions and more. Benefits? A more dynamic
            and engaging website that encourages users to explore the site
            further.
          </p>
        </div>
      </div>
      <div className="grid items-center order-3 md:order-none md:grid-cols-2 gap-5 w-full pt-20 md:pt-56">
        <div className="space-y-5 md:space-y-10 text-center md:text-left md:pr-32">
          <h4 className="text-light md:text-4xl text-3xl font-medium md:font-semibold">
            Desktop, tablet & phone breakpoints
          </h4>
          <p className="text-midLight">
            We made sure that this template is optimized for viewing on any
            device, providing a consistent and optimal experience for users
            regardless of the device they are using.
          </p>
        </div>
        <div className="relative order-4 md:order-none overflow-visible h-[420px] image-container bg-gradient-to-b from-dark to-midDark">
          <img
            src="https://framerusercontent.com/images/EzGWTWzzzlSYlcUVsqb8nOS0fs.svg"
            className="absolute md:h-[309px] !h-auto !w-[60%] img1 md:w-[400px] md:bottom-10 bottom-5 left-5 md:left-10"
          />
          <img
            src="https://framerusercontent.com/images/WUE0fvM6g0QpZ6OQKyOWD7gO74.svg"
            alt=""
            className="absolute md:top-10 !h-40 !w-auto top-5 md:h-[295px] img2 md:w-[132px] right-5 md:right-10"
          />
        </div>
      </div>
      <div className="grid items-center md:grid-cols-2 gap-5 w-full pt-20 md:pt-56">
        <div className="relative order-6 md:order-none overflow-visible h-[420px] variantContainer1 image-container bg-gradient-to-b from-dark to-midDark">
          <img
            src="https://framerusercontent.com/images/cusMo9vcDoohgjddqIrtEFz29E.svg"
            className="absolute variant1 md:top-10 top-5 left-5 md:left-10"
          />
          <img
            src="https://framerusercontent.com/images/mY5xY2nxrIT2VTOVtJHPf2uIY.svg"
            alt=""
            className="absolute variant2 md:bottom-10 bottom-5 right-5 md:right-10"
          />
        </div>
        <div className="space-y-5 order-5 md:order-none md:space-y-10 text-center md:text-left md:pl-32 md:pr-10">
          <h4 className="text-light md:text-4xl text-3xl font-medium md:font-semibold">
            Color & text styles
          </h4>
          <p className="text-midLight">
            Carefully chosen color scheme and text styles guarantees a more
            polished, professional appearance, making this template more
            visually appealing to users. It's also very easy to replace with
            your own font and colors.
          </p>
        </div>
      </div>
      <div className="grid items-center  md:grid-cols-2 gap-5 w-full pt-20 md:pt-56">
        <div className="space-y-5 md:space-y-10 text-center md:text-left md:pr-32">
          <h4 className="text-light order-7 md:order-none md:text-4xl text-3xl font-medium md:font-semibold">
            Components to keep things organised
          </h4>
          <p className="text-midLight">
            Components can be reused throughout a website, reducing the amount
            of work and in result it is easier to maintain. Thanks to components
            every little detail is consistent across the entire template.
          </p>
        </div>
        <div className="relative overflow-visible !h-[420px] variantContainer2 image-container bg-gradient-to-b from-dark to-midDark">
          <div className="absolute order-8 md:order-none h-full top-0 bottom-0 w-full items-center  flex justify-center left-0 m-auto">
            <img
              src="https://framerusercontent.com/images/Oc8nMs35gp5Uu5mIHX7ZsZAslPo.svg"
              className="w-fit variant3 h-fit"
            />
          </div>
          <img
            src="https://framerusercontent.com/images/HXKiKKCqXDGOKOWKtVO0e6Kf8.svg"
            className="absolute variant1-2 md:top-10 top-5 right-5 md:right-10"
          />
          <img
            src="https://framerusercontent.com/images/5Ti2gZI6f6EYBmLyOloqmRIU0.svg"
            alt=""
            className="absolute variant2-2 md:bottom-10 bottom-5 left-5 md:left-10"
          />
        </div>
      </div>
    </div>
  );
}

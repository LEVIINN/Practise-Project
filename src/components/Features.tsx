import gsap from "gsap";
import "../styles/styles.css";

export default function Features() {
  return (
    <div className="px-[5rem] py-20 font-['Inter'] pt-10 text-center bg-dark min-h-screen w-screen">
      <div className="space-y-7">
        <h4 className="text-green text-xs tracking-wider font-semibold">
          FEATURES
        </h4>
        <h4 className="text-light text-5xl font-semibold">
          What makes Compact so special?
        </h4>
        <h4 className="text-midLight ">
          There are plenty of benefits when using Compact template. We tried to
          list some of them out.
        </h4>
      </div>
      <div className="grid mt-40 lg:grid-cols-4 md:grid-cols-2 justify-center gap-5">
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
      <div className="grid items-center grid-cols-2 gap-5 w-full pt-56">
        <div className="relative overflow-visible h-[420px] image-container bg-gradient-to-b from-dark to-midDark">
          <img
            src="https://framerusercontent.com/images/9IA1uytkRsqvIi0dW2FcWyXT24.svg"
            className="absolute bottom-10 left-10"
          />
          <img
            src="https://framerusercontent.com/images/snhunjenkQbJ0uyVoUfeIvGavk.svg"
            alt=""
            className="absolute top-10 right-10"
          />
        </div>
        <div className="space-y-10 text-left pl-32 pr-10">
          <h4 className="text-light text-4xl font-semibold">
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
      <div className="grid items-center grid-cols-2 gap-5 w-full pt-56">
        <div className="space-y-10 text-left pr-32">
          <h4 className="text-light text-4xl font-semibold">
            Desktop, tablet & phone breakpoints
          </h4>
          <p className="text-midLight">
            We made sure that this template is optimized for viewing on any
            device, providing a consistent and optimal experience for users
            regardless of the device they are using.
          </p>
        </div>
        <div className="relative overflow-visible h-[420px] image-container bg-gradient-to-b from-dark to-midDark">
          <img
            src="https://framerusercontent.com/images/EzGWTWzzzlSYlcUVsqb8nOS0fs.svg"
            className="absolute h-[309px] w-[400px] bottom-10 left-10"
          />
          <img
            src="https://framerusercontent.com/images/WUE0fvM6g0QpZ6OQKyOWD7gO74.svg"
            alt=""
            className="absolute top-10 h-[295px] w-[132px] right-10"
          />
        </div>
      </div>
      <div className="grid items-center grid-cols-2 gap-5 w-full pt-56">
        <div className="relative overflow-visible h-[420px] image-container bg-gradient-to-b from-dark to-midDark">
          <img
            src="https://framerusercontent.com/images/cusMo9vcDoohgjddqIrtEFz29E.svg"
            className="absolute top-10 left-10"
          />
          <img
            src="https://framerusercontent.com/images/mY5xY2nxrIT2VTOVtJHPf2uIY.svg"
            alt=""
            className="absolute bottom-10 right-10"
          />
        </div>
        <div className="space-y-10 text-left pl-32 pr-10">
          <h4 className="text-light text-4xl font-semibold">
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
      <div className="grid items-center grid-cols-2 gap-5 w-full pt-56">
        <div className="space-y-10 text-left pr-32">
          <h4 className="text-light text-4xl font-semibold">
            Components to keep things organised
          </h4>
          <p className="text-midLight">
            Components can be reused throughout a website, reducing the amount
            of work and in result it is easier to maintain. Thanks to components
            every little detail is consistent across the entire template.
          </p>
        </div>
        <div className="relative overflow-visible h-[420px] image-container bg-gradient-to-b from-dark to-midDark">
          <div className="absolute h-full top-0 bottom-0 w-full items-center flex justify-center left-0 m-auto">
            <img
              src="https://framerusercontent.com/images/Oc8nMs35gp5Uu5mIHX7ZsZAslPo.svg"
              className="w-fit h-fit"
            />
          </div>
          <img
            src="https://framerusercontent.com/images/HXKiKKCqXDGOKOWKtVO0e6Kf8.svg"
            className="absolute top-10 right-10"
          />
          <img
            src="https://framerusercontent.com/images/5Ti2gZI6f6EYBmLyOloqmRIU0.svg"
            alt=""
            className="absolute bottom-10 left-10"
          />
        </div>
      </div>
    </div>
  );
}

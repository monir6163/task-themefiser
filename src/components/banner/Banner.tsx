/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import dwnld from "../../../public/images/akar-icons_download.png";
import insta from "../../../public/images/akar-icons_instagram-fill.png";
import twitter from "../../../public/images/akar-icons_twitter-fill.png";
import linkedin from "../../../public/images/cib_linkedin-in.png";
import fb from "../../../public/images/fa6-brands_facebook-f.png";
import pp from "../../../public/images/pf-pp.png";
import pint from "../../../public/images/pinterest-p 1 (1).png";

const Banner = () => {
  return (
    <div className="grid grid-cols-12 lg:gap-x-4">
      {/* image part */}
      <div className="col-span-12 lg:col-span-3 bg-pure-black px-2 lg:px-0 mt-16 lg:mt-0">
        <div
          className="hidden lg:block"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <Image src={pp} priority alt="Logo" width={400} height={400} />
        </div>
        <div className="flex justify-center items-center lg:hidden">
          <Image src={pp} priority alt="Logo" width={250} height={250} />
        </div>
        <div className="p-4 bg-pure-black shadow-sm flex gap-x-4 justify-center items-center">
          <div className="bg-common-black rounded-full p-2 size-8 flex justify-center items-center">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              title="facebook"
            >
              <Image src={fb} priority alt="Logo" width={8} height={8} />
            </Link>
          </div>
          <div className="bg-common-black rounded-full p-2 size-8 flex justify-center items-center">
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              title="linkedin"
            >
              <Image
                src={linkedin}
                priority
                alt="Logo"
                width={12}
                height={10}
              />
            </Link>
          </div>
          <div className="bg-common-black rounded-full p-2 size-8 flex justify-center items-center">
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              title="instagram"
            >
              <Image src={insta} priority alt="Logo" width={12} height={10} />
            </Link>
          </div>
          <div className="bg-common-black rounded-full p-2 size-8 flex justify-center items-center">
            <Link
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              title="twitter"
            >
              <Image src={twitter} priority alt="Logo" width={12} height={10} />
            </Link>
          </div>
          <div className="bg-common-black rounded-full p-2 size-8 flex justify-center items-center">
            <Link
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              title="pinterest"
            >
              <Image src={pint} priority alt="Logo" width={12} height={10} />
            </Link>
          </div>
        </div>
      </div>
      {/* intro part */}
      <div className="col-span-12 lg:col-span-9 pl-6 pt-10 relative">
        <p
          className="gradient-text lg:font-bold"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          INTRODUCTION
        </p>
        <h1
          className="text-4xl lg:text-5xl font-bold mt-2.5 lg:leading-[62.5px] lg:w-3/5"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          I`m a Creative Developer & UI/UX Design Expert
        </h1>
        <p
          className="leading-6 font-bold mt-2.5"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          24 years / Robert Smith / UK London
        </p>
        <p
          className="text-pure-off-white mt-6 lg:mt-9 lg:w-3/5 text-justify lg:text-left pr-3 lg:pr-0"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Prolific, full stack web developer with a passion for metrics and
          beating former best-yets. Prototyped 25 new product features per year
          for Flexor, Inc. Decreased rework by 22% and costs by 15%.
          Consistently receive high user experience scores for all web
          development projects, including a 55% increase for Flexor, Inc.
          Passionate about building world class web applications. One of my
          sites received a 2020 Webby for Best Navigation and Structure.
        </p>
        <button
          className="gradient-bg py-2 px-6 mt-6 lg:mt-9 rounded-full flex justify-center items-center font-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span className="flex gap-x-1 justify-center items-center">
            <span>Download CV</span>
            <Image
              src={dwnld}
              alt="arrow"
              width={16}
              height={16}
              className="object-contain"
            />
          </span>
        </button>
        <div className="absolute bottom-5 right-0">
          <div className="relative">
            <img
              src="/images/copy.png"
              alt="line"
              className="hidden lg:block h-96 w-24"
            />
            <p className="absolute rotate-90 text-pure-off-white text-xs lg:text-sm top-32 left-1/2 -translate-x-1/2 whitespace-nowrap">
              © design by themediator developed by get/hugothernes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

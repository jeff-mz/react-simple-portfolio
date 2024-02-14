import React from "react";
import hero from "../images/hero-img.png";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";

function About() {
  return (
    <section className="w-full h-max  flex flex-col mobile:flex-row mobile:justify-between laptop:items-center ">
      <img
        src={hero}
        alt="a developer behind laptop working on website "
        className="max-w-52  mobile:max-w-[40%] mobile:h-auto "
      />
      <div className="mobile:max-w-[50%]">
        <h1 className="w-full text-left font-['Krub'] desktop:leading-normal text-light text-3xl desktop:text-5xl font-bold">
          Nice to meet you! <br /> I'm
          <span className="inline mx-2 underline decoration-wavy decoration-green-pale">
            Jafar Mirzapoor
          </span>
        </h1>
        <p className=" w-full text-left  text-light my-5 text-sm laptop:text-xl desktop:text-2xl ">
          I am a web designer and a front-end developer with passion of creating
          functional, responsive and accessible websites. I have experience in
          working with Wordpress and Shopify and of course Html and Css but I
          wanted to explore more in web development so I decided to become a
          Front-end developer.
        </p>

        <button
          type="button"
          className="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-darkBlue hover:text-white px-3"
        >
          <div className="flex flex-row align-middle">
            <span className="mr-2 desktop:text-xl">Explore My Skills </span>
            <svg
              className="w-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
}

export default About;

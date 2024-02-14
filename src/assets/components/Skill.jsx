import React from "react";
import Skills from "./Skills";

function Skill() {
  return (
    <section className="w-full mt-5">
      <div className="w-full grid grid-cols-1 grid-rows-9 tablet:grid tablet:grid-rows-5  tablet:grid-col-2 laptop:grid-col-3  laptop:grid-rows-3 mobile:bg-orange-600 laptop:bg-lime-500">
        <Skills />
      </div>

      <button
        type="button"
        className="text-green-light bg-darkBlue my-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
      >
        See Projects
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </section>
  );
}

export default Skill;

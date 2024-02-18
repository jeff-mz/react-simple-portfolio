import React from "react";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section className="w-full">
      <div className="w-[100%] grid grid-cols-2 grid-rows-5 mobile:grid-cols-3 mobile:grid-rows-3 text-center ">
        <SkillCard />
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

export default Skills;

import React, { useEffect, useState } from "react";
import data from "../skills.json";

function SkillCard() {
  const [mySkills, setMySkills] = useState([]);
  useEffect(() => {
    setMySkills(data.skills);
  }, []);

  return (
    <div className="w-full mx-auto flex items-center justify-center flex-col lg:grid grid-rows-3 grid-cols-2 gap-2 xl:grid-cols-3 xl:h-[90vh]">
      {mySkills.length < 1 ? (
        <p className=" text-green-pale text-2xl font-bold text-center animate-pulse h-screen">
          Loading...
        </p>
      ) : (
        mySkills.map((skill) => {
          return (
            <div
              key={skill.id}
              className="w-full flex items-start justify-evenly my-4 md:bg-light md:max-lg:rounded-sm md:max-lg:p-4 md:max-lg:justify-between md:max-lg:w-1/2 lg:justify-center lg:py-6 lg:rounded-sm"
            >
              <img
                src={skill.icon}
                alt="development tool"
                className="w-12 mr-6 lg:w-20"
              />
              <div className="mx-4">
                <p className="font-bold text-base text-light md:text-dark-secondary lg:text-2xl">
                  {skill.title}
                </p>
                <div
                  className="flex w-[130px] lg:w-48 h-4 bg-gray-200 rounded-full overflow-hidden my-2 lg:my-6"
                  role="progressbar"
                  aria-valuenow={skill.progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="flex flex-col justify-center rounded-full overflow-hidden bg-green-pale text-xs text-blue-dark text-center whitespace-nowrap dark:bg-blue-500 transition duration-500"
                    style={{ width: `${skill.progress}` }}
                  >
                    {skill.progress}
                  </div>
                </div>
              </div>
              <span className=" text-xs bg-blue-dark p-1 rounded-full text-green-light font-bold lg:p-3">
                {skill.level}
              </span>
            </div>
          );
        })
      )}
    </div>
  );
}

export default SkillCard;

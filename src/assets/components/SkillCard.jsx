import React, { useEffect, useState } from "react";
import data from "../skills.json";

function SkillCard() {
  const [mySkills, setMySkills] = useState([]);
  useEffect(() => {
    setMySkills(data.skills);
  }, []);
  return (
    <>
      {mySkills.length < 1 ? (
        <p className="text-center text-green-light text-xl font-medium tracking-widest animate-pulse ">
          Loading...{" "}
        </p>
      ) : (
        mySkills.map((skill) => {
          return (
            <div className="max-w-[180px] mobile:max-w-[250px] py-3 px-2 m-2 flex flex-col  bg-light rounded-sm">
              <div className="my-2 flex ">
                <img
                  src={skill.icon}
                  alt="developing tool icon "
                  className="max-w-12 mr-2 "
                />
                <p className="font-bold ">
                  {skill.title}
                  <span className="text-sm block font-medium ">
                    {skill.experience}
                  </span>
                </p>
              </div>
              <div className="w-full bg-gray-200 rounded-sm ">
                <div
                  className="bg-green-pale p-0.5 text-[10px] font-medium text-darkBlue text-center  leading-none rounded-sm"
                  style={{ width: `${skill.progress}` }}
                >
                  {skill.progress}
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}

export default SkillCard;

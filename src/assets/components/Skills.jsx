import React, { useEffect, useState } from "react";
import skills from "../skills.json";
function Skills() {
  const [MySkills, setMySkills] = useState([]);
  useEffect(() => {
    setMySkills(skills.skills);
    // console.log(MySkills);
  }, []);

  return (
    <>
      {MySkills.map((skill) => {
        return (
          <div
            key={skill.id}
            className=" w-[100%] mobile:w-[40%] laptop:w-[30%] p-2 bg-slate-300 my-2 flex justify-start  items-start rounded-md"
          >
            <img
              src={skill.icon}
              alt="developing icon"
              className="w-20 h-24 mr-3"
            />
            <div className="w-[90%] h-20 flex items-start flex-col justify-evenly">
              <h3 className=" font-bold text-2xl ">{skill.title}</h3>
              <p className="font-medium text-sm ">{skill.experience}</p>

              <div className=" w-[80%] bg-gray-600 rounded-md">
                <div
                  className="bg-green-light text-xs font-medium text-blue-100 text-center leading-none rounded-md"
                  style={{ width: `${skill.progress}` }}
                >
                  {skill.progress}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Skills;

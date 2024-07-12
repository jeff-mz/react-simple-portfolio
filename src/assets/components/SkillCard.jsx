import { useEffect, useState } from "react";
import data from "../skills.json";

function SkillCard() {
  const [mySkills, setMySkills] = useState([]);
  useEffect(() => {
    setMySkills(data.skills);
  }, []);

  return (
    <div className="container mx-auto mt-10 mb-24 grid gap-6 grid-rows-1 grid-cols-1 md:grid-rows-3 md:grid-cols-2 xl:grid-rows-3  xl:grid-cols-3 ">
      {mySkills.length < 1 ? (
        <p className=" text-green-pale text-2xl font-bold text-center animate-pulse h-screen">
          Loading...
        </p>
      ) : (
        mySkills.map((skill) => {
          return (
            <div
              className="w-[300px] h-[250px] mx-auto bg-gradient-to-r from-slate-700 to-slate-800 pt-8 rounded-t-2xl"
              style={{ position: "relative" }}
              key={skill.id}
            >
              <img
                src={skill.icon}
                alt=""
                className="w-[34px]"
                style={{ position: "absolute", top: "16px ", left: "16px" }}
              />
              <div className=" bg-blue-dark p-4 rounded-t-2xl min-h-[230px]">
                <h2 className="text-xl font-bold my-4 text-slate-200">
                  {skill.title}
                </h2>
                <p className="text-sm my-4 text-slate-200">{skill.desc} </p>
                <hr />
                <p className="text-sm mt-2 text-[#BAD0FF] font-bold">
                  Experience: <span>{skill.level}</span>
                </p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default SkillCard;

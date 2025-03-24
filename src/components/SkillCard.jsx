import { useEffect, useState } from "react";
import data from "../data/skills.json";

function SkillCard() {
  const [mySkills, setMySkills] = useState([]);
  useEffect(() => {
    setMySkills(data.skills);
  }, []);

  return (
    <div className="container mx-auto mt-10 mb-24 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {mySkills.length < 1 ? (
        <p className="text-green-pale text-2xl font-bold text-center animate-pulse h-screen">
          Loading...
        </p>
      ) : (
        mySkills.map((skill) => {
          return (
            <div
              key={skill.id}
              className="group bg-dark-secondary rounded-xl p-6 transition-all duration-300 hover:shadow-xl  hover:-translate-y-1 mx-3"
            >
              {/* Header with Icon and Title */}
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={skill.icon}
                    alt={`${skill.title} icon`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-light">
                    {skill.title}
                  </h2>
                  <span className="text-sm font-medium text-green-pale">
                    Level: {skill.level}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {skill.desc}
              </p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default SkillCard;

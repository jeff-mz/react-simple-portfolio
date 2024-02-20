import React, { useEffect, useState } from "react";
import data from "../projects.json";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const [myProjects, setMyProjects] = useState([]);
  useEffect(() => setMyProjects(data.projects), []);

  return (
    <section className=" container mx-auto p-4 grid grid-cols-1 grid-rows-1 md:max-lg:grid-rows-6 md:max-lg:grid-cols-2 md:max-lg:gap-4 lg:grid-cols-3 lg:grid-rows-4 lg:gap-8">
      {myProjects.length < 1 ? (
        <p className=" text-green-pale text-2xl font-bold text-center animate-pulse h-screen">
          Loading...
        </p>
      ) : (
        myProjects.map((project) => {
          return (
            <div className="w-full bg-dark-secondary my-2">
              <img src={project.img} alt="project image" className="w-full" />
              <div className="w-full flex justify-between my-4">
                <p className="font-bold text-light text-2xl mx-4">
                  {project.title}
                </p>
                <div>
                  <a href={project.source}>
                    <FaGithub className="inline text-2xl text-green-pale hover:text-green-light" />
                  </a>
                  <a href={project.demo}>
                    <FaExternalLinkAlt className="inline text-2xl text-green-pale hover:text-green-light mx-4" />
                  </a>
                </div>
              </div>
              <p className="font-bold text-light text-sm m-4">{project.desc}</p>
            </div>
          );
        })
      )}
    </section>
  );
}

export default Projects;

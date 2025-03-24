import { useEffect, useState } from "react";
import data from "../data/projects.json";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [myProjects, setMyProjects] = useState([]);
  useEffect(() => setMyProjects(data.projects), []);

  return (
    <section className="container mx-auto p-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {myProjects.length < 1 ? (
        <p className="text-green-pale text-2xl font-bold text-center animate-pulse h-screen">
          Loading...
        </p>
      ) : (
        myProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))
      )}
    </section>
  );
}

export default Projects;

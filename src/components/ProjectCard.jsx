/* eslint-disable react/prop-types */
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  const { img, title, desc, source, demo, icons } = project;
  return (
    <div className="group relative bg-light-secondary dark:bg-dark-secondary rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Project Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={`${title} preview`}
          className="object-cover transition-transform duration-300 scale-90 group-hover:scale-95"
        />
        {/* Overlay with links */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={source}
            target="_blank"
            rel="noreferrer"
            className="p-2 bg-green-pale rounded-full hover:bg-green-light transition-colors duration-300"
          >
            <FaGithub className="text-xl text-dark-primary" />
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="p-2 bg-green-pale rounded-full hover:bg-green-light transition-colors duration-300"
          >
            <FaExternalLinkAlt className="text-xl text-dark-primary" />
          </a>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-4">
        <h3 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-2">
          {title}
        </h3>
        <p className="text-base fw-medium text-light-text-secondary dark:text-dark-text-secondary mb-4">
          {desc}
        </p>

        {/* Tech Stack Icons */}
        <div className="flex flex-wrap gap-2">
          {icons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt="tech stack icon"
              className="w-12 h-12 object-contain transition-transform duration-300 hover:scale-110"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

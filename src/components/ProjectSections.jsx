import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Project Sync",
    description:
      "A full stack project management system built with React, Node.js, Express, and Tailwind.",
    image: "/projects/project sync.png",
    tags: ["React", "TailwindCSS", "Node.js", "MongoDB"],
    demoUrl: "https://project-sync-one.vercel.app/",
    githubUrl: "https://github.com/shabbir28/project-sync",
  },
  {
    id: 2,
    title: "Awards UI",
    description: "A modern, sleek landing page built with React and Tailwind.",
    image: "/projects/project2.png",
    tags: ["React", "Tailwind", "Framer Motion"],
    demoUrl: "https://modern-ui-sepia.vercel.app/",
    githubUrl: "https://github.com/shabbir28/modern-ui",
  },
  {
    id: 3,
    title: "Converso",
    description:
      "AI-Powered LMS SaaS Platform for creating and managing online learning",
    image: "/projects/converso.png",
    tags: ["Next.js", "tailwind.css", "shadcn/ui", "supabase"],
    demoUrl: "https://saas-app-gamma-dun.vercel.app/",
    githubUrl: "https://github.com/shabbir28/saas-app ",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-primary">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Some of my highlighted work — designed with precision, performance, and
          modern UI trends.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              whileTap={{ y: -4, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative rounded-2xl p-[2px] bg-gradient-to-br from-primary/40 via-primary/20 to-transparent"
            >
              <div
                className="rounded-2xl h-full flex flex-col 
                bg-white dark:bg-neutral-900
                backdrop-blur border border-gray-200 dark:border-white/10 
                shadow-lg overflow-hidden relative group"
              >
                {/* Image */}
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-52 block overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-active:scale-105"
                  />

                  {/* Overlay with Title */}
                  <div
                    className="absolute inset-0 bg-black/60 opacity-0 
                      group-hover:opacity-100 group-active:opacity-100 
                      transition-opacity duration-500 flex items-center justify-center"
                  >
                    <span
                      className="text-white text-xl font-semibold 
                        opacity-0 group-hover:opacity-100 group-active:opacity-100 
                        transform translate-y-4 group-hover:translate-y-0 group-active:translate-y-0 
                        transition-all duration-500"
                    >
                      {project.title}
                    </span>
                  </div>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 z-10 p-2 rounded-full 
                      bg-white/80 dark:bg-neutral-800/70 shadow 
                      hover:scale-110 active:scale-95 transition-transform"
                >
                  <Github size={18} className="text-primary" />
                </a>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium rounded-full 
                          bg-gray-100 text-gray-700 
                          dark:bg-neutral-700 dark:text-gray-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 flex-1">
                    {project.description}
                  </p>

                  {/* Footer buttons */}
                  <div className="flex space-x-3 mt-6">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 text-sm font-medium text-center rounded-lg 
                        bg-primary text-white hover:bg-primary/90 active:scale-95 transition-all"
                    >
                      <ExternalLink size={16} className="inline mr-1" />
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 text-sm font-medium text-center rounded-lg 
                        bg-gray-200 text-gray-800 hover:bg-gray-300 
                        dark:bg-neutral-700 dark:text-gray-100 dark:hover:bg-neutral-600 
                        active:scale-95 transition-all"
                    >
                      <Github size={16} className="inline mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/shabbir28"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-purple-600 
              text-white font-medium shadow-md hover:shadow-xl hover:scale-105 active:scale-95 
              transition-all inline-block"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Blog Project",
    description: "A blog platform built with React & Tailwind where you can share your thoughts and writings.",
    github: "#", // <-- replace with actual
    live: "#", // <-- add Vercel link later
  },
  {
    title: "Gaming Website",
    description: "A fun gaming website featuring interactive games and dynamic UI.",
    github: "https://github.com/kashishpundir08/Gaming-Website", // <-- replace with actual
    live: "#", // <-- add Vercel link later
  },
  {
    title: "Snake Game",
    description: "A classic Snake game built with html, css and js — try it live!",
    github: "https://github.com/kashishpundir08/Snake-Game", // <-- replace with actual
    live: "https://vercel.com/kashish-pundirs-projects/snake-game/H77p7P4eL2ajPnYNNTmqp3aYMfhF", // <-- replace with your Vercel link
  },
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio showcasing my skills, projects, and contact information.",
    github: "https://github.com/kashishpundir08/Portfolio",
    live: "https://vercel.com/kashish-pundirs-projects/portfolio",
  },
  // {
  //   title: "Todo App",
  //   description: "A simple CRUD Todo application made with React and Tailwind.",
  //   github: "https://github.com/kashishpundir08/YOUR_TODO_APP_REPO",
  //   live: "https://your-vercel-link.vercel.app",
  // },
];

const Project = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-10">My Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
            </div>
            <div className="flex justify-between mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 border rounded-lg hover:bg-gray-100 transition"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                <ExternalLink className="w-4 h-4" /> Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

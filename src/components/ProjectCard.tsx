"use client";

import { useState } from "react";
import { PortfolioProject } from "@/data/content";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectCarousel({
  projects,
}: {
  projects: PortfolioProject[];
}) {
  const [index, setIndex] = useState(0);

  const goPrev = () =>
    setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const goNext = () =>
    setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  if (projects.length === 0) return null;

  return (
    <div className="relative mx-auto max-w-xl">
      <ProjectCard project={projects[index]} />

      <div className="mt-6 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous project"
          className="flex h-9 w-9 items-center justify-center border border-stone-300 text-navy-900 transition hover:border-gold-500 hover:text-gold-600"
        >
          ←
        </button>

        <div className="flex items-center gap-2">
          {projects.map((project, i) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to ${project.title}`}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-gold-500" : "bg-stone-300"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next project"
                    <div className="mt-8">
            <ProjectCarousel projects={portfolioProjects} />
          </div>
  );
}

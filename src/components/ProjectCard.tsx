import { PortfolioProject } from "@/data/content";

export default function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article className="flex h-full flex-col border border-stone-200 p-7">
      {project.isLearningProject ? (
        <span className="mb-4 inline-block w-fit border border-gold-500/50 px-3 py-1 text-xs font-medium text-gold-600">
          Personal Learning Project
        </span>
      ) : null}
      <h3 className="text-lg text-navy-900">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
        {project.description}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="bg-stone-100 px-3 py-1 text-xs text-stone-600"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

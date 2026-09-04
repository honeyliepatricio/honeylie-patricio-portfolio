import { SkillItem } from "@/data/content";

export default function SkillPill({ skill }: { skill: SkillItem }) {
  const isLearning = skill.status === "learning";

  return (
    <li
      className={`flex items-center justify-between gap-3 border px-4 py-3 text-sm ${
        isLearning
          ? "border-gold-600/40 bg-stone-50 text-navy-900"
          : "border-stone-300 bg-stone-200 text-navy-900"
      }`}
    >
      <span>{skill.name}</span>
      <span
        className={`text-xs ${isLearning ? "text-gold-600" : "text-stone-400"}`}
      >
        {isLearning ? "Learning" : "Experienced"}
      </span>
    </li>
  );
}

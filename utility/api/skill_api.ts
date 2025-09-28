import { ISkill } from "@/app/skills/ISkill";


// GET => Prendi tutte le skill
export const getSkills = async () => {
  const response = await fetch("/api/skills");
  if (!response.ok) return { err: true, message: `API error: ${response.status}` };
  return response.json();
};

// POST => Aggiungi una skill
export const createSkill = async (skill: ISkill) => {
  const response = await fetch("/api/skills", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(skill),
  });
  if (!response.ok) return { err: true, message: `API error: ${response.status}` };
  return response.json();
};

// DELETE => Elimina una skill
export const deleteSkill = async (skillName: string) => {
  const response = await fetch(`/api/skills?skill=${encodeURIComponent(skillName)}`, {
    method: "DELETE",
  });
  if (!response.ok) return { err: true, message: `API error: ${response.status}` };
  return response.json();
};

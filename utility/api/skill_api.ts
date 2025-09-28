import { ISkill } from "@/app/skills/ISkill";

// Legge il token dai cookie del browser
const getToken = () => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];
};

// GET => Prendi tutte le skill (pubblico, non richiede token)
export const getSkills = async () => {
  const response = await fetch("/api/skills");
  if (!response.ok) return { err: true, message: `API error: ${response.status}` };
  return response.json();
};

// POST => Aggiungi una skill (richiede token)
export const createSkill = async (skill: ISkill) => {
  const token = getToken();
  const response = await fetch("/api/skills", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token || "",
    },
    body: JSON.stringify(skill),
  });
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    return { err: true, message: data.error || `API error: ${response.status}` };
  }
  return response.json();
};

// DELETE => Elimina una skill (richiede token)
export const deleteSkill = async (skillName: string) => {
  const token = getToken();
  const response = await fetch(`/api/skills?skill=${encodeURIComponent(skillName)}`, {
    method: "DELETE",
    headers: {
      "Authorization": token || "",
    },
  });
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    return { err: true, message: data.error || `API error: ${response.status}` };
  }
  return response.json();
};

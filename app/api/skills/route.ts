// app/api/skills/route.ts
import { NextRequest, NextResponse } from "next/server";
import { ISkill } from "@/app/skills/ISkill";

// Dati in memoria (puoi sostituire con DB)
let skills: ISkill[] = [
  { name: "React", percent: 90 },
  { name: "CSS", percent: 75 },
  { name: "Next.js", percent: 60 },
  { name: "JavaScript", percent: 85 },
  { name: "Angular", percent: 70 },
];

// GET => restituisce tutte le skill
export async function GET() {
  return NextResponse.json({ skills });
}

// POST => aggiunge una nuova skill
export async function POST(req: NextRequest) {
  try {
    const skill: ISkill = await req.json();
    skills.push(skill);
    return NextResponse.json({ success: true, skill });
  } catch (error) {
    return NextResponse.json({ err: true, message: "Invalid data" }, { status: 400 });
  }
}

// DELETE => elimina una skill (query param)
export async function DELETE(req: NextRequest) {
  const skillName = req.nextUrl.searchParams.get("skill");
  if (!skillName) {
    return NextResponse.json({ err: true, message: "Skill name required" }, { status: 400 });
  }
  skills = skills.filter((s) => s.name !== skillName);
  return NextResponse.json({ success: true });
}

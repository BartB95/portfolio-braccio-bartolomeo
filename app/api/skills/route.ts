// app/api/skills/route.ts
import { NextRequest, NextResponse } from "next/server";
import { ISkill } from "@/app/skills/ISkill";

let skills: ISkill[] = [
  { name: "React", percent: 90 },
  { name: "CSS", percent: 75 },
  { name: "Next.js", percent: 60 },
  { name: "JavaScript", percent: 85 },
  { name: "Angular", percent: 70 },
];

export async function GET() {
  return NextResponse.json({ skills });
}

export async function POST(req: NextRequest) {
  const token = req.headers.get("Authorization");
  if (token !== process.env.OWNER_TOKEN) {
    return NextResponse.json({ err: true, message: "Accesso negato" }, { status: 403 });
  }

  try {
    const skill: ISkill = await req.json();
    skills.push(skill);
    return NextResponse.json({ success: true, skill });
  } catch {
    return NextResponse.json({ err: true, message: "Dati non validi" }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  const token = req.headers.get("Authorization");
  if (token !== process.env.OWNER_TOKEN) {
    return NextResponse.json({ err: true, message: "Accesso negato" }, { status: 403 });
  }

  const skillName = req.nextUrl.searchParams.get("skill");
  if (!skillName) {
    return NextResponse.json({ err: true, message: "Nome skill richiesto" }, { status: 400 });
  }

  skills = skills.filter((s) => s.name !== skillName);
  return NextResponse.json({ success: true });
}

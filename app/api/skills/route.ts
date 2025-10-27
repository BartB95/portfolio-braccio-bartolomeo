// app/api/skills/route.ts
import { NextResponse } from "next/server";

import { Skill } from "@/models/modelsSkill";
import { connectDB } from "@/lib/lib.mongodb";

export async function GET() {
  await connectDB();
  const skills = await Skill.find().sort({ name: 1 });
  return NextResponse.json({ skills });
}

export async function POST(request: Request) {
  const { name, percent, iconName, color } = await request.json();
  await connectDB();
  const skill = await Skill.create({ name, percent, iconName, color });
  return NextResponse.json({ skill });
}


export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const skillName = searchParams.get("skill");
  await connectDB();
  await Skill.findOneAndDelete({ name: skillName });
  return NextResponse.json({ success: true });
}

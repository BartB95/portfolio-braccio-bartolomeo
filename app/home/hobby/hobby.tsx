import React from "react";
import { ISkill } from "@/app/skills/ISkill";
import CircularSkillChart from "@/app/Shared/components/CircularSkillChart";

type IHobby = ISkill & { icon: string };

// Array di hobby con percentuale di tempo dedicata e icona emoji
const hobbies: IHobby[] = [
  { name: "Lavoro", percent: 50, icon: "💼" },
  { name: "Sport", percent: 15, icon: "🏋️‍♂️" },
  { name: "Social", percent: 10, icon: "📱" },
  { name: "Cucina", percent: 15, icon: "🍳" },
  { name: "Lettura", percent: 10, icon: "📚" },
];

const HobbySection = () => {

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
     {hobbies.map((hobby) => (
        <CircularSkillChart
          key={hobby.name}
          skill={hobby}
          animated={true}
          icon={hobby.icon} // passa l'icona direttamente
        />
      ))}
    </div>
  );
};

export default HobbySection;

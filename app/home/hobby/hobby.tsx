import React, { useMemo, useState } from "react";
import { ISkill } from "@/app/skills/ISkill";
import CircularSkillChart from "@/app/Shared/components/CircularSkillChart";
import { DragDropList } from "@/app/Shared/components/DragDrop";

type IHobby = ISkill & { icon: string };

const hobbies: IHobby[] = [
  { name: "Lavoro", percent: 50, icon: "💼" },
  { name: "Sport", percent: 15, icon: "🏋️‍♂️" },
  { name: "Social", percent: 10, icon: "📱" },
  { name: "Cucina", percent: 15, icon: "🍳" },
  { name: "Lettura", percent: 10, icon: "📚" },
];

const HobbySection = React.memo(() => {
  
const hobbiesMemo = useMemo(() => hobbies, []);
  const [hobbyList, setHobbyList] = useState<IHobby[]>(hobbiesMemo);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      <DragDropList
        items={hobbyList}
        onChange={setHobbyList}
        renderItem={(hobby) => (
          <CircularSkillChart
            key={hobby.name}
            skill={hobby}
            animated={true}
            icon={hobby.icon}
          />
        )}
      />
    </div>
  );
});

export default HobbySection;

"use client";

import { useState } from "react";
import { ISkill } from "./ISkill";
import { prm_CreateSkill, prm_DeleteSkill } from "../api/skills/apiSkill";
import CircularSkillChart from "../Shared/components/CircularSkillChart";
import FilterSearch from "../Shared/components/FilterSearch";
import { keyframes, styled } from "@mui/system";
import { useGlobalStore } from "../State/GlobalContext";
import { DragDropList } from "../Shared/components/DragDrop";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled("div")({
  width: "100%",
  maxWidth: "1200px",
  padding: "30px",
  borderRadius: "16px",
  background: "rgba(0, 0, 0, 0.35)", // trasparente per far vedere il background globale
  backdropFilter: "blur(3px) saturate(180%)",
  WebkitBackdropFilter: "blur(15px) saturate(180%)",
  border: "1px solid rgba(255, 255, 255, 0.15)", // bordo leggero per definire il vetro
  color: "#f0f0f5",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  animation: `${fadeIn} 0.7s ease-out forwards`, // corretto in oggetti JS
  "@media (max-width: 768px)": {
    padding: "20px",
    borderRadius: "12px",
  },
  "@media (max-width: 480px)": {
    padding: "15px",
    borderRadius: "10px",
  },
});

const Header = styled("h3")({
  display: "flex",
  marginBottom: "20px",
  fontSize: "32px",
  color: "#0b3d91",
  justifyContent: "center",
});

const Input = styled("input")({
  height: "50px",
  padding: "0 30px",
  borderRadius: "12px",
  background: "#f0f0f5", // input scuro
  boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
  backdropFilter: "blur(10px)",
  fontFamily: "'Poppins', sans-serif",
  fontSize: 16,
  outline: "none",
  border: "1px solid #4a4a6a", // bordo professionale
  color: "#0f0f10ff", // testo chiaro
  "&:focus": {
    boxShadow: "0 0 0 2px rgba(255,215,0,0.6)", // focus dorato
  },
  "&::placeholder": {
    color: "#b0b0c1", // placeholder leggermente chiaro
    opacity: 1,
  },
  "@media (max-width: 600px)": {
    transform: "translateY(-22px)",
  },
});

const SmallInput = styled("input")({
  height: "50px",
  padding: "0 20px",
  width: "100px",
  borderRadius: "12px",
  "&:focus": {
    boxShadow: "0 0 0 2px rgba(255,215,0,0.6)", // focus dorato
  },
  "&::placeholder": {
    color: "#b0b0c1", // placeholder leggermente chiaro
    opacity: 1,
  },
  "@media (max-width: 600px)": {
    transform: "translateY(-22px)",
  },
});

const Button = styled("button")<{ hovered: boolean; cursor: "default" | "pointer" | "grab" }>(({ hovered, cursor }) => ({
  height: "50px",
  padding: "0 20px",
  borderRadius: "12px",
  background: "linear-gradient(135deg, #4a90e2, #0070f3)", // blu professionale
  color: "#ffffff",
  fontFamily: "'Poppins', sans-serif",
  fontSize: 16,
  border: "none",
  cursor: cursor ?? "default",
  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
  transition: "transform 0.2s",
  transform: hovered ? "scale(1.05)" : "scale(1)",
  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
  "@media (max-width: 600px)": {
    marginTop: "-42px",
  },
}));

const FormRow = styled("div")({
  display: "flex",
  gap: "12px",
  alignItems: "center",
  justifyContent: "center", // ⬅ centra tutti gli elementi orizzontalmente
  flexWrap: "wrap",
  marginBottom: "20px",
});

const SkillGrid = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  flex: "1",
});

type Props = {
  initialSkills: ISkill[];
};

const SkillsClient = ({ initialSkills }: Props) => {
  const [skills, setSkills] = useState<ISkill[]>(initialSkills);
  const [searchInput, setSearchInput] = useState("");
  const [newSkill, setNewSkill] = useState("");
  const [newSkillPercent, setNewSkillPercent] = useState(50);
  const [loading, setLoading] = useState(false);
  const [animated, setAnimated] = useState(true);
  const { state, dispatch } = useGlobalStore();

  const isHovered = state.hoveredId === "button";
  const cursor = state.cursor;

  const addSkill = async () => {
    if (!newSkill.trim()) return;
    setLoading(true);
    try {
      await prm_CreateSkill({ name: newSkill, percent: newSkillPercent });
      setSkills((prev) => [...prev, { name: newSkill, percent: newSkillPercent }]);
      setNewSkill("");
      setNewSkillPercent(50);
    } catch (err) {
      console.error("Error creating skill:", err);
    } finally {
      setLoading(false);
    }
  };

  const removeSkill = async (skillName: string) => {
    try {
      await prm_DeleteSkill(skillName);
      setSkills((prev) => prev.filter((s) => s.name !== skillName));
    } catch (err) {
      console.error("Error deleting skill:", err);
    }
  };

  const filteredSkills = skills.filter((skill) => skill.name.toLowerCase().includes(searchInput.toLowerCase()));

  return (
    <Container>
      <Header>📚 Le mie Competenze</Header>
      <span style={{ color: "#E6E2C8" }}>Le percentuali indicano le tecnologie con cui mi sento più sicuro e competente.</span>

      <FormRow>
        <FilterSearch searchInput={searchInput} setSearchInput={setSearchInput} containerSx={{ marginBottom: 23 }} />

        <Input type="text" value={newSkill} placeholder="Aggiungi skill" onChange={(e) => setNewSkill(e.target.value)} />

        <SmallInput type="number" value={newSkillPercent} onChange={(e) => setNewSkillPercent(Number(e.target.value))} placeholder="%" min={0} max={100} />

        <Button
          onClick={addSkill}
          cursor={cursor}
          hovered={isHovered}
          onMouseEnter={() => {
            dispatch({ type: "SET_HOVER", payload: "button" });
            dispatch({ type: "SET_CURSOR", payload: "pointer" });
          }}
          onMouseLeave={() => {
            dispatch({ type: "SET_CURSOR", payload: "default" });
            dispatch({ type: "CLEAR_HOVER" });
          }}
          disabled={loading}
        >
          {loading ? "..." : "Inserisci"}
        </Button>
      </FormRow>

      <SkillGrid>
        <DragDropList
          items={filteredSkills}
          onChange={(newOrder) => setSkills(newOrder)}
          renderItem={(skill) => <CircularSkillChart key={skill.name} skill={skill} animated={animated} onDelete={removeSkill} />}
        />
      </SkillGrid>
    </Container>
  );
};

export default SkillsClient;

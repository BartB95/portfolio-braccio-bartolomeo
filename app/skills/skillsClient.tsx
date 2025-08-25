"use client";

import { useState } from "react";
import { ISkill } from "./ISkill";
import { prm_CreateSkill, prm_DeleteSkill } from "../api/skills/apiSkill";
import CircularSkillChart from "../Shared/components/CircularSkillChart";
import FilterSearch from "../Shared/components/FilterSearch";
import { makeStyles } from "@mui/styles";

interface Props {
  initialSkills: ISkill[];
}

const useStyles = makeStyles(() => ({
  container: {
    fontFamily: "'Poppins', sans-serif",
    color: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
  },
  header: {
    display: "flex",
    marginBottom: "20px",
    fontSize: "32px",
  },
  input: {
    height: "50px",
    padding: "0 20px",
    borderRadius: "12px",
    background: "white",
    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
    backdropFilter: "blur(10px)",
    fontFamily: "'Poppins', sans-serif",
    fontSize: 16,
    outline: "none",
    border: "none",
    color: "#121212",
    "&:focus": {
      boxShadow: "0 0 0 2px rgba(255,179,71,0.6)",
    },
    "&::placeholder": {
      color: "#3C3C4399",
      opacity: 1,
    },
  },
  smallInput: {
    width: "100px",
  },
  button: {
    height: "50px",
    padding: "0 20px",
    borderRadius: "12px",
    background: "white",
    color: "#121212",
    fontFamily: "'Poppins', sans-serif",
    fontSize: 16,
    border: "none",
    cursor: "pointer",
    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },
  },
  formRow: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  skillGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
}));

export default function SkillsClient({ initialSkills }: Props) {
  const c = useStyles();

  const [skills, setSkills] = useState<ISkill[]>(initialSkills);
  const [searchInput, setSearchInput] = useState("");
  const [newSkill, setNewSkill] = useState("");
  const [newSkillPercent, setNewSkillPercent] = useState(50);
  const [loading, setLoading] = useState(false);
  const [animated, setAnimated] = useState(true);

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

  const filteredSkills = skills.filter((skill) =>
    skill.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className={c.container}>
      <h3 className={c.header}>📚 Le mie Competenze</h3>

      <div className={c.formRow}>
        <FilterSearch searchInput={searchInput} setSearchInput={setSearchInput} containerSx={{ marginBottom: 23 }} />

        <input
          type="text"
          value={newSkill}
          placeholder="Aggiungi skill"
          onChange={(e) => setNewSkill(e.target.value)}
          className={c.input}
        />

        <input
          type="number"
          value={newSkillPercent}
          onChange={(e) => setNewSkillPercent(Number(e.target.value))}
          placeholder="%"
          min={0}
          max={100}
          className={`${c.input} ${c.smallInput}`}
        />

        <button onClick={addSkill} disabled={loading} className={c.button}>
          {loading ? "..." : "Aggiungi"}
        </button>
      </div>

      <div className={c.skillGrid}>
        {filteredSkills.map((skill) => (
          <CircularSkillChart key={skill.name} skill={skill} animated={animated} onDelete={removeSkill} />
        ))}
      </div>
    </div>
  );
}

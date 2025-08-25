// skillsPromise.ts

import { createSkill, deleteSkill, getSkills } from "@/utility/api/skill_api";
import { ISkill } from "../../skills/ISkill";

export const prm_GetSkills = () => 
  new Promise(async (resolve, reject) => {
    try {
      const payload: any = await getSkills();
      payload.err ? reject(payload.message) : resolve(payload);
    } catch (error) {
      reject(error);
    }
  });

export const prm_CreateSkill = (skill: ISkill) => 
  new Promise(async (resolve, reject) => {
    try {
      const payload: any = await createSkill(skill);
      payload.err ? reject(payload.message) : resolve(payload);
    } catch (error) {
      reject(error);
    }
  });

export const prm_DeleteSkill = (skillName: string) => 
  new Promise(async (resolve, reject) => {
    try {
      const payload: any = await deleteSkill(skillName);
      payload.err ? reject(payload.message) : resolve(payload);
    } catch (error) {
      reject(error);
    }
  });

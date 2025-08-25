import { getPeople } from "@/utility/api/ssg_api";

export const getPeopleData = async () => {
  const data = await getPeople();
  return data.data; // Estraggo solo l’array delle persone
};

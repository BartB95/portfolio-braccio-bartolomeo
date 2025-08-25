import { getPeopleData } from "../api/ssg/apiSSG";
import PeopleList from "./people";

const PeopleSSGPage = async () => {
  const people = await getPeopleData();

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif", color: "#333" }}>
      <PeopleList people={people} />
    </div>
  );
};

export default PeopleSSGPage;

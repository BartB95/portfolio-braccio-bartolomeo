import getPeopleSSR from "@/utility/api/ssr_api";
import PeopleSSR from "./people";

const PeopleSSRPage = async () => {
  const data = await getPeopleSSR();
  const people = data.data;

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif", color: "#333" }}>
      <PeopleSSR people={people} />
    </div>
  );
};
export default PeopleSSRPage

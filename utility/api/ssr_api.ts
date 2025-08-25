const getPeopleSSR = async () => {
  // Per SSR, usiamo cache: "no-store" per garantire che venga eseguito ad ogni richiesta
  const res = await fetch("https://fakerapi.it/api/v1/persons?_quantity=5", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Errore nel recupero dati");
  }

  return res.json();
};
export default getPeopleSSR;

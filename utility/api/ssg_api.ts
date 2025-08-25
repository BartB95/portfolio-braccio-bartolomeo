// lib/api/getPeople.ts
export const getPeople = async () => {
  const res = await fetch("https://fakerapi.it/api/v1/persons?_quantity=5", {
    next: { revalidate: 60 }, // SSG con ISR ogni 60 sec
  });

  if (!res.ok) {
    throw new Error("Errore nel recupero dati");
  }

  return res.json();
};

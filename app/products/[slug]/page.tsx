type Props = {
  params: { slug: string };
};

interface Prodotto {
  id: number;
  titolo: string;
  descrizione: string;
  categoria: string;
  prezzo: number;
}

// 🔹 Dati locali simulati in italiano
const prodotti: Prodotto[] = [
  { id: 1, titolo: "Laptop Super", descrizione: "Un portatile potente per ogni esigenza.", categoria: "Elettronica", prezzo: 1200 },
  { id: 2, titolo: "Smartphone Fantastico", descrizione: "Telefono cellulare con fotocamera eccellente.", categoria: "Elettronica", prezzo: 800 },
  { id: 3, titolo: "Zaino da Montagna", descrizione: "Resistente e capiente per le tue escursioni.", categoria: "Accessori", prezzo: 90 },
  { id: 4, titolo: "Orologio Elegante", descrizione: "Orologio da polso in acciaio inox.", categoria: "Moda", prezzo: 250 },
  { id: 5, titolo: "Cuffie Wireless", descrizione: "Audio cristallino e senza fili.", categoria: "Elettronica", prezzo: 150 },
];

// 🔹 Next.js la usa a build time per generare gli URL statici
export async function generateStaticParams() {
  return prodotti.map(p => ({
    slug: p.id.toString(),
  }));
}

// 🔹 Pagina dinamica del prodotto
export default function ProductPage({ params }: Props) {
  const product = prodotti.find(p => p.id.toString() === params.slug)!;
  const currentIndex = prodotti.findIndex(p => p.id.toString() === params.slug);

  const prev = prodotti[currentIndex - 1];
  const next = prodotti[currentIndex + 1];

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", fontFamily: "sans-serif", lineHeight: "1.6" }}>
      <h1 style={{ textAlign: "center" }}>🛍️ {product.titolo}</h1>
      <p style={{ fontStyle: "italic", color: "#555" }}>{product.categoria}</p>
      <p>{product.descrizione}</p>
      <p style={{ fontWeight: "bold" }}>💰 Prezzo: €{product.prezzo}</p>
      
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>
        {prev ? (
          <a href={`/products/${prev.id}`} style={{ textDecoration: "none", fontWeight: "bold" }}>
            ← {prev.titolo}
          </a>
        ) : <div></div>}
        {next ? (
          <a href={`/products/${next.id}`} style={{ textDecoration: "none", fontWeight: "bold" }}>
            {next.titolo} →
          </a>
        ) : <div></div>}
      </div>

      <p style={{ marginTop: "20px", textAlign: "center", color: "#532b" }}>
        Questa è una <strong>pagina dinamica</strong> generata grazie a Next.js con rotta [slug].
      </p>
    </div>
  );
}

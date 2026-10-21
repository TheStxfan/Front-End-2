type TypeAbbigliamento = {
  id: number;
  nome: string;
  marca: string;
  tipo: string;
  prezzo: number;
  categoria: "cappelli" | "magliette" | "pantaloni" | "calze";
  colore: string;
  disponibile: boolean;
  description?: string;
};

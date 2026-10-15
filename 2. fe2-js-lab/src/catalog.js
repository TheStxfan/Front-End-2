export const filtraPerPrezzo = (prodotti, prezzoMinoreDi) => {
  return prodotti.filter((prodotto) => prodotto.price < prezzoMinoreDi);
};

export const filtraPerCategoria = (prodotti, categoria) => {
  return prodotti.filter((prodotto) => prodotto.category == categoria);
};

export const etichetteCatalogo = (prodotti) => {
  return prodotti.map((prodotto) => ({
    testo: prodotto.title,
    prezzo: prodotto.price,
  }));
};

export const logEtichette = (etichette) => {
  etichette.forEach((etichetta) =>
    console.log(`${etichetta.testo}, ${etichetta.prezzo}`),
  );
};

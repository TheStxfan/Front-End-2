export const creaCarrelloVuoto = () => [];

export const aggiungi = (carrello, prodotto, quantita = 1) => {
  const indice = carrello.findIndex((riga) => riga.id === prodotto.id);

  // Se il prodotto esiste già, aggiorna la quantità senza modificare il carrello originale.
  if (indice !== -1) {
    return carrello.map((riga, i) => {
      if (i === indice) {
        return { ...riga, quantita: riga.quantita + quantita };
      }
      return riga;
    });
  } else {
    carrello = [
      ...carrello,
      {
        id: prodotto.id,
        title: prodotto.title,
        price: prodotto.price,
        quantita,
      },
    ];
    return carrello;
  }
};

export const totaleCarrello = (carrello) => {
  let totaleCarrello = 0;
  carrello.forEach((prodotto) => {
    totaleCarrello += prodotto.price * prodotto.quantita;
  });
  return totaleCarrello;
};

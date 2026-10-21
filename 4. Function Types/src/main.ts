type TypeProdotto = {
  title: string;
  price: number;
};

const stampante = <T>(value: T): string => {
  console.log(value);
  return value.toString();
};

const prodotto: TypeProdotto = {
  price: 5,
  title: "Sciarpa",
};

stampante(prodotto);

// scrivere le funzioni asincrone per fare tutte le operazioni crud sulle api del fake store per i prodotto tipizzandolo
// getAllProducts
// GetProduct
// Delete
// Post
// Put

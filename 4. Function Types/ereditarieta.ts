type TypeProductBase = {
  title: string;
  price: number;
};

type TypeProduct = { id: number } & TypeProductBase;

const prodotto: TypeProduct = {
  id: 0,
  title: "blabla",
  price: 99,
};

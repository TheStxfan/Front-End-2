export type TypeProduct = {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type TypeProductWithId = {
  id: number;
} & TypeProduct;

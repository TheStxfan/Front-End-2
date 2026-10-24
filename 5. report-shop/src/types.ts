export type TypeProductWithoutId = {
  title: "string";
  price: number;
  description: string;
  category: string;
  image: string;
};

export type TypeProductWithId = {
  id: number;
} & TypeProductWithoutId;

export type TypeCart = {
  id: number;
  userId: number;
  date: string;
  products: TypeCartProduct;
  __v: number;
};

export type TypeCartProduct = {
  productId: number;
  quantity: number;
};

export type TypeUser = {
  id: number;
  username: string;
  email: string;
  password: string;
};

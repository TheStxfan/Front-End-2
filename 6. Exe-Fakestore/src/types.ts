export type TypeProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type TypeCart = {
  id: number;
  userId: number;
  products: TypeProduct[];
};

export type TypeUser = {
  id: number;
  username: string;
  email: string;
  password: string;
};

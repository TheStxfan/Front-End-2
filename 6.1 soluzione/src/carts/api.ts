import type { TypeCart } from "./types";

export const getCarts = async (): Promise<TypeCart[]> => {
  const response = await fetch(`https://fakestoreapi.com/carts`);
  const data = await response.json();
  return data;
};

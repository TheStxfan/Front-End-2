import type { TypeProduct } from "./types";

export const getProduct = async (productId: number): Promise<TypeProduct[]> => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`,
  );
  const data = await response.json();
  return data;
};

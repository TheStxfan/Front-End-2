import type { TypeProduct, TypeCart, TypeUser } from "./types";

export const callApi = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error: Couldn't get Data.");
    }
    const result: T = await response.json();
    return result;
  } catch (e: unknown) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};

export const apiProducts = await callApi<TypeProduct[]>(
  "https://fakestoreapi.com/products",
);
export const apiCarts = await callApi<TypeCart[]>(
  "https://fakestoreapi.com/carts",
);
export const apiUsers = await callApi<TypeUser[]>(
  "https://fakestoreapi.com/users",
);

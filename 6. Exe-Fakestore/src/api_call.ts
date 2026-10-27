import type { TypeProduct, TypeCart, TypeUser } from "./types";

export const getProducts = async (): Promise<TypeProduct[]> => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Error: Couldn't get Products.");
    }
    const products: TypeProduct[] = await response.json();
    return products;
  } catch (e: unknown) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};

export const getCarts = async (): Promise<TypeCart[]> => {
  try {
    const response = await fetch("https://fakestoreapi.com/carts");
    if (!response.ok) {
      throw new Error("Error: Couldn't get Carts.");
    }
    const carts: TypeCart[] = await response.json();
    return carts;
  } catch (e: unknown) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};

export const getUsers = async (): Promise<TypeUser[]> => {
  try {
    const response = await fetch("https://fakestoreapi.com/users");
    if (!response.ok) {
      throw new Error("Error: Couldn't get Users.");
    }
    const users: TypeUser[] = await response.json();
    return users;
  } catch (e: unknown) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};

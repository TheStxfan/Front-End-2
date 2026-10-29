import type { TypeCart, TypeProduct, TypeUser } from "./types";

export const callApi = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error: Couldn't get Data.");
    }

    console.log(url);

    const textResult = await response.text();

    if (!textResult) {
      throw new Error("Error: An item with that id does not exist.");
    }

    const result = JSON.parse(textResult);

    return result;
  } catch (e: unknown) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};

export const getProducts = async (
  id?: number,
): Promise<TypeProduct[] | TypeProduct> => {
  const products = await callApi<TypeProduct | TypeProduct[]>(
    `https://fakestoreapi.com/products/${id !== undefined ? id : ""}`,
  );
  return products;
};

export const getCarts = async (id?: number): Promise<TypeCart[] | TypeCart> => {
  const products = await callApi<TypeCart | TypeCart[]>(
    `https://fakestoreapi.com/carts/${id !== undefined ? id : ""}`,
  );
  return products;
};

export const getUsers = async (id?: number): Promise<TypeUser[] | TypeUser> => {
  const products = await callApi<TypeUser | TypeUser[]>(
    `https://fakestoreapi.com/users/${id !== undefined ? id : ""}`,
  );
  return products;
};

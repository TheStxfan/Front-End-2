import type {
  Result,
  TypeCart,
  TypeCartProduct,
  TypeProductWithId,
  TypeProductWithoutId,
  TypeUser,
} from "./types";

export const getAllProducts = async (): Promise<TypeProductWithId[]> => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Error: Cannot get all products.");
    }
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      throw new Error(error.message);
    }
  }
};

export const getAllCarts = async (): Promise<TypeCart[]> => {
  try {
    const response = await fetch("https://fakestoreapi.com/carts");
    if (!response.ok) {
      throw new Error("Error: Cannot get carts.");
    }
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      throw new Error(error.message);
    }
  }
};

export const getAllUsers = async (): Promise<TypeUser[]> => {
  try {
    const response = await fetch("https://fakestoreapi.com/users");
    if (!response.ok) {
      throw new Error("Error: Cannot get users.");
    }
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      throw new Error(error.message);
    }
  }
};

export const getProductById = (
  id: number,
  catalogo: TypeProductWithId[],
): Result<TypeProductWithId> => {
  let prodotto: TypeProductWithId = catalogo[id - 1];
  if (prodotto) {
    return {
      success: true,
      data: prodotto,
    };
  } else {
    return {
      success: false,
      error: `Error: A product with id ${id} does not exist.`,
    };
  }
};

// export const getCartPriceById = (
//   id: number,
//   carts: TypeCart[],
//   catalogo: TypeProductWithId[],
// ): number => {};

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
  if (!prodotto) {
    return {
      success: false,
      error: `Error: Cannot find product with id ${id}.`,
    };
  }
  return {
    success: true,
    data: prodotto,
  };
};

export const getCartPriceById = (
  id: number,
  carts: TypeCart[],
  catalogo: TypeProductWithId[],
): Result<number> => {
  let totalCartPrice: number = 0;

  const cart: TypeCart = carts[id - 1];
  if (!cart) {
    return {
      success: false,
      error: `Error: Cannot find cart with id ${id}.`,
    };
  }

  for (const product of cart.products) {
    const result: Result<TypeProductWithId> = getProductById(
      product.productId,
      catalogo,
    );

    if (result.success === true) {
      const productPrice: number = result.data.price;
      const quantity: number = product.quantity;
      totalCartPrice += productPrice * quantity;
    } else {
      return { success: false, error: result.error };
    }
  }

  return { success: true, data: totalCartPrice };
};

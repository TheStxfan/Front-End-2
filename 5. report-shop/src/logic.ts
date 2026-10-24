import { getAllCarts, getAllProducts, getAllUsers } from "./api_call";
import type { Result, TypeCart, TypeProductWithId, TypeUser } from "./types";

// Api Calls
const products: TypeProductWithId[] = await getAllProducts();
const carts: TypeCart[] = await getAllCarts();
const users: TypeUser[] = await getAllUsers();

// Main Logic
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
): Result<string> => {
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

  return {
    success: true,
    data: `Carrello ${id} (utente ${cart.userId}): ${totalCartPrice} €`,
  };
};

// Secondary Logic (Simplified for main)
export const getProduct = (id: number): TypeProductWithId | string => {
  const productById: Result<TypeProductWithId> = getProductById(id, products);
  return productById.success === true ? productById.data : productById.error;
};

export const getCartPrice = (id: number): number | string => {
  const cartPriceById: Result<string> = getCartPriceById(id, carts, products);
  return cartPriceById.success === true
    ? cartPriceById.data
    : cartPriceById.error;
};

export const getUsers = (): TypeUser[] => {
  return users;
};

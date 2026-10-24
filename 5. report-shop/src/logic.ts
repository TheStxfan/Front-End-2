import {
  getAllCarts,
  getAllProducts,
  getAllUsers,
  getCartPriceById,
  getProductById,
} from "./api_call";
import type { Result, TypeCart, TypeProductWithId, TypeUser } from "./types";

// Api Calls
const products: TypeProductWithId[] = await getAllProducts();
const carts: TypeCart[] = await getAllCarts();
const users: TypeUser[] = await getAllUsers();

// Logic
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

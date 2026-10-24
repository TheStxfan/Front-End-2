import {
  getAllProducts,
  getAllCarts,
  getAllUsers,
  getProductById,
} from "./api_call.js";
import type {
  Result,
  TypeCart,
  TypeProductWithId,
  TypeProductWithoutId,
  TypeUser,
} from "./types.js";

// Get All

const products: TypeProductWithId[] = await getAllProducts();
const carts: TypeCart[] = await getAllCarts();
const users: TypeUser[] = await getAllUsers();

// Console Logs

// console.log(products);
// console.log(JSON.stringify(carts[0], null, 2));
// console.log(users);

// Product By Id

const productById: Result<TypeProductWithId> = getProductById(21, products);
console.log(
  productById.success === true ? productById.data : productById.error,
);

import {
  getAllProducts,
  getAllCarts,
  getAllUsers,
  getProductById,
} from "./api_call.js";
import type {
  TypeCart,
  TypeProductWithId,
  TypeProductWithoutId,
  TypeUser,
} from "./types.js";

const products: TypeProductWithId[] = await getAllProducts();
const carts: TypeCart[] = await getAllCarts();
const users: TypeUser[] = await getAllUsers();

// console.log(products);
console.log(JSON.stringify(carts[0], null, 2));
// console.log(users);

// const productById: TypeProductWithId | string = getProductById(1, products);
// const

// console.log(productById);

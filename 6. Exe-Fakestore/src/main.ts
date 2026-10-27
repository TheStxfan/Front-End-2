import { getCarts, getProducts, getUsers } from "./api_call";
import type { TypeCart, TypeProduct, TypeUser } from "./types";

// const products: TypeProduct[] = await getProducts();
// console.log(JSON.stringify(products[0], null, 2));

// const carts: TypeCart[] = await getCarts();
// console.log(JSON.stringify(carts[0], null, 2));

const users: TypeUser[] = await getUsers();
console.log(JSON.stringify(users[0], null, 2));

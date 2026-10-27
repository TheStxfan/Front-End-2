import { getAllTimeTopProducts, getLastMonthCarts } from "./logic";
import type { TypeCart, TypeProduct, TypeUser } from "./types";

// --- DEBUG: DISPLAY SINGLE ELEMENTS --- //

// const products: TypeProduct[] = await getProducts();
// console.log(JSON.stringify(products[0], null, 2));

// const carts: TypeCart[] = await getCarts();
// console.log(JSON.stringify(carts[0], null, 2));

// const users: TypeUser[] = await getUsers();
// console.log(JSON.stringify(users[0], null, 2));

// --- Date --- //

// const today = new Date();
// const monthAgo = new Date(today);
// monthAgo.setMonth(monthAgo.getMonth() - 1);
// console.log(today, monthAgo);

// --- CODE --- //

const allTimeTopProducts: TypeProduct[] = await getAllTimeTopProducts();

console.log(allTimeTopProducts);

const lastMonthCarts: TypeCart[] = await getLastMonthCarts();

console.log(lastMonthCarts);

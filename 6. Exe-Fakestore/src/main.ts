=import { getTopProductsQty } from "./logic";

// --- DEBUG: DISPLAY SINGLE ELEMENTS --- //

// const products: TypeProduct[] = await getProducts();
// console.log(JSON.stringify(products[0], null, 2));

// const carts: TypeCart[] = await getCarts();
// console.log(JSON.stringify(carts, null, 2));

// const users: TypeUser[] = await getUsers();
// console.log(JSON.stringify(users[0], null, 2));

// --- Date --- //

// const today = new Date();
// const monthAgo = new Date(today);
// monthAgo.setMonth(monthAgo.getMonth() - 1);
// console.log(today, monthAgo);

// --- Map --- //

// const mappa = new Map<number, number>();
// let id = 0;
// mappa.set(id, 5);
// console.log(mappa.get(id));

// --- CODE --- //

// --- Report 1 --- //

const productQty = getTopProductsQty();

console.log(productQty);

const productQtyLastMonth = getTopProductsQty(true);

console.log(productQtyLastMonth);

// --- Report 2 --- //

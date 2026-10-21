import { getProducts } from "./api_call.js";
// import type { TypeProductList } from "./models.js";
import type { TypeProduct } from "./models.js";

const listaProdotti: TypeProduct[] = await getProducts();

console.log(listaProdotti[0].title);

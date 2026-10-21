import {
  getProducts,
  postProduct,
  getProductFromId,
  putProductFromId,
  deleteProductFromId,
} from "./api_call.js";
import type { TypeProduct, TypeProductWithId } from "./models.js";

// ------------------------------------ //

// GET Products

// const products: TypeProduct[] | unknown = await getProducts();
//
// console.log(products);

// ------------------------------------ //

// POST Product (crea prodotto)

// let newProduct: TypeProduct = {
//   title: "newProduct",
//   price: 999999999,
//   description: "blabla",
//   category: "man's clothing",
//   image:
//     "https://www.digital-coach.com/wp-content/uploads/2021/10/Come-ricercare-unimmagine-online.jpg",
// };

// const postedProductResponse: TypeProduct[] | unknown = await postProduct(newProduct);

// console.log(postedProduct);

// ------------------------------------ //

// PUT Product (aggiorna prodotto)

// let updatedProduct: TypeProductWithId = {
//   id: 2,
//   title: "updatedProduct",
//   //   price: 999999999,
//   //   description: "blabla",
//   category: "man's clothing",
//   image:
//     "https://www.digital-coach.com/wp-content/uploads/2021/10/Come-ricercare-unimmagine-online.jpg",
// };

// const updatedProductResponse = await putProductFromId(updatedProduct);

// console.log(updatedProductResponse);

// ------------------------------------ //

// DELETE Product

const productDeletionResponse = await deleteProductFromId(2);

console.log(productDeletionResponse);

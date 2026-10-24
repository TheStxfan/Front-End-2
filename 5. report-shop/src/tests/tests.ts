import { getCartPriceById, getProductById } from "../api_call";
import type {
  Result,
  TypeCart,
  TypeCartProduct,
  TypeProductWithId,
} from "../types";

let totalTests: number = 0;

// TypeProductWithId
const prodotto1: TypeProductWithId = {
  category: "1",
  description: "1",
  id: 1,
  image: "1",
  price: 3,
  title: "1",
};

const prodotto2: TypeProductWithId = {
  category: "2",
  description: "2",
  id: 2,
  image: "2",
  price: 2,
  title: "2",
};

// TypeCartProduct

const cartProduct1: TypeCartProduct = {
  productId: prodotto1.id,
  quantity: 10,
};

const cartProduct2: TypeCartProduct = {
  productId: prodotto2.id,
  quantity: 10,
};

// TypeCart

const cart1: TypeCart = {
  __v: 1,
  date: "1",
  id: 1,
  products: [cartProduct1, cartProduct2],
  userId: 1,
};

// TypeProductWithId[]

const productList: TypeProductWithId[] = [prodotto1, prodotto2];

// TypeCart[]

const cartList: TypeCart[] = [cart1];

// ------------------- Tests ------------------- //

// Main Variables
let test: unknown = null;
let expected: unknown = null;
let id: number = 0;

// getProductById() - correct product id
id = 2;
let productByIdCorrect: Result<TypeProductWithId> = getProductById(
  id,
  productList,
);

test = JSON.stringify(productByIdCorrect);

expected = JSON.stringify({
  success: true,
  data: {
    category: "2",
    description: "2",
    id: 2,
    image: "2",
    price: 2,
    title: "2",
  },
});

if (test === expected) {
  console.log(`Test ${++totalTests} result: Success`);
} else {
  console.log(`Test ${++totalTests} result: Failed`);
}

// getProductById() - incorrect product id
id = 3;
let productByIdIncorrect: Result<TypeProductWithId> = getProductById(
  id,
  productList,
);

test = JSON.stringify(productByIdIncorrect);

expected = JSON.stringify({
  success: false,
  error: `Error: Cannot find product with id ${id}.`,
});

if (test === expected) {
  console.log(`Test ${++totalTests} result: Success`);
} else {
  console.log(`Test ${++totalTests} result: Failed`);
}

// getCartPriceById() - correct cart id
id = 1;
let cartPriceById: Result<string> = getCartPriceById(id, cartList, productList);

test =
  cartPriceById.success === true ? cartPriceById.data : cartPriceById.error;

expected = `Carrello ${id} (utente ${cartList[id - 1].userId}): 50 €`;

if (test === expected) {
  console.log(`Test ${++totalTests} result: Success`);
} else {
  console.log(`Test ${++totalTests} result: Failed`);
}

// getCartPriceById() - incorrect cart id
id = 2;
cartPriceById = getCartPriceById(id, cartList, productList);

test =
  cartPriceById.success === true ? cartPriceById.data : cartPriceById.error;

expected = `Error: Cannot find cart with id ${id}.`;

if (test === expected) {
  console.log(`Test ${++totalTests} result: Success`);
} else {
  console.log(`Test ${++totalTests} result: Failed`);
}

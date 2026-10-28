import { apiCarts } from "./api_call";
import type { TypeCart } from "./types";

const getLastMonth = (lastCartDate: Date): Date => {
  const monthBefore = new Date(lastCartDate);
  monthBefore.setMonth(monthBefore.getMonth() - 1);
  return monthBefore;
};

const getDateDescendingCarts = (): TypeCart[] => {
  const orderedCarts = apiCarts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return orderedCarts;
};

const getLastMonthCarts = (): TypeCart[] => {
  const dateDescendingCarts: TypeCart[] = getDateDescendingCarts();
  const dateCarts = dateDescendingCarts.filter((cart) => {
    const cartDate = new Date(cart.date);
    return cartDate >= getLastMonth(new Date(dateDescendingCarts[0].date));
  });
  return dateCarts;
};

const createProductQtyMap = (): Map<number, number> => {
  const productQty = new Map<number, number>();
  return productQty;
};

const getProductQty = (lastMonth = false): Map<number, number> => {
  const productQty = createProductQtyMap();
  const filteredCarts = lastMonth ? getLastMonthCarts() : apiCarts;
  for (let cart of filteredCarts) {
    for (let product of cart.products) {
      if (productQty.get(product.productId)) {
        productQty.set(
          product.productId,
          productQty.get(product.productId) + product.quantity,
        );
      } else {
        productQty.set(product.productId, product.quantity);
      }
    }
  }
  return productQty;
};

export const getTopProductsQty = (lastMonth = false): Map<number, number> => {
  const productQtyMap = lastMonth ? getProductQty(true) : getProductQty();
  const topOrderedProducts = new Map(
    [...productQtyMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3),
  );
  return topOrderedProducts;
};

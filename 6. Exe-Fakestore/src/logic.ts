import { getCarts, getProducts } from "./api_call";
import type { TypeCart, TypeProduct } from "./types";

const getLastMonth = (lastCartDate: Date): Date => {
  const monthBefore = new Date(lastCartDate);
  monthBefore.setMonth(monthBefore.getMonth() - 1);
  return monthBefore;
};

const getCountDescendingProducts = async (): Promise<TypeProduct[]> => {
  const products: TypeProduct[] = await getProducts();
  const ordered: TypeProduct[] = products.sort(
    (a, b) => b.rating.count - a.rating.count,
  );
  return ordered;
};

const getDateDescendingCarts = async (): Promise<TypeCart[]> => {
  const carts: TypeCart[] = await getCarts();
  const orderedCarts: TypeCart[] = carts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return orderedCarts;
};

export const getAllTimeTopProducts = async (): Promise<TypeProduct[]> => {
  const descendingProducts: TypeProduct[] = await getCountDescendingProducts();
  let topThree: TypeProduct[] = descendingProducts.slice(0, 3);
  return topThree;
};

export const getLastMonthCarts = async (): Promise<TypeCart[]> => {
  const dateDescendingCarts: TypeCart[] = await getDateDescendingCarts();
  const dateCarts: TypeCart[] = dateDescendingCarts.filter((cart) => {
    const cartDate = new Date(cart.date);
    return cartDate >= getLastMonth(new Date(dateDescendingCarts[0].date));
  });
  return dateCarts;
};

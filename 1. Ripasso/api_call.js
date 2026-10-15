export const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const prods = await res.json();
  return prods;
};

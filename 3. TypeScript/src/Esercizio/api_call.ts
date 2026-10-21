export const getProducts = async () => {
  try {
    const result = await fetch("https://fakestoreapi.com/products");
    if (!result.ok) {
      throw new Error("Error: Cannot get products.");
    }
    const data = await result.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

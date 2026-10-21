import type { TypeProduct, TypeProductWithId } from "./models.js";

export const getProducts = async (): Promise<TypeProduct[] | unknown> => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Error: Cannot get products.");
    }
    const product = await response.json();
    return product;
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      console.log(error.message);
    }
  }
};

export const postProduct = async (
  product: TypeProduct,
): Promise<TypeProduct | unknown> => {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error("Error: Cannot post product.");
    }
    const postedProduct = await response.json();
    return postedProduct;
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      console.log(error.message);
    }
  }
};

export const getProductFromId = async (
  id: number,
): Promise<TypeProduct | unknown> => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error("Error: Cannot post product.");
    }
    const postedProduct = await response.json();
    return postedProduct;
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      console.log(error.message);
    }
  }
};

export const putProductFromId = async (
  product: TypeProductWithId,
): Promise<TypeProduct | unknown> => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${product.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      },
    );
    if (!response.ok) {
      throw new Error("Error: Cannot post product.");
    }
    const postedProduct = await response.json();
    return postedProduct;
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      console.log(error.message);
    }
  }
};

export const deleteProductFromId = async (
  id: number,
): Promise<TypeProduct | unknown> => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error: Cannot post product.");
    }
    const postedProduct = await response.json();
    return postedProduct;
  } catch (error: unknown) {
    if (error instanceof TypeError) {
      console.log(error.message);
    }
  }
};

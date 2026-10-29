import type { TypeCart } from "../carts/types";
import type { TypeProductRanking } from "../products";

// /**
//  * @description
//  * 1. La funzione legge i dati di tutti i carrelli dell'API
//  * 2.
//  *
//  */

export const getRankingReport = async (
  carts: TypeCart[],
): Promise<TypeProductRanking> => {
  const carts = await getCarts();
};

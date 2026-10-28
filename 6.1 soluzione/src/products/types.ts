export type TypeProductRating = {
  rate: number;
  count: number;
};

export type TypeProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type TypeProductRankingItem = {
  ranking: number;
  productId: number;
  title: string;
  category: string;
  price: number;
  purchaseQty: number;
  revenue: number;
};

export type TypeProductRanking = {
  title: string;
  createdAt: string;
  dateLast: string;
  interval: string[];
  products: TypeProductRankingItem[];
};

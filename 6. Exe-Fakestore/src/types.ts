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

export type TypeCart = {
  id: number;
  userId: number;
  date: string;
  products: {
    productId: number;
    quantity: number;
  }[];
  __v: number;
};

export type TypeUser = {
  address: {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  __v: number;
};

export type TypeProductReportItem = {
  rank: number;
  productId: number;
  title: string;
  category: string;
  price: number;
  purchaseQty: number;
  revenue: number;
};

export type TypeProductReport = {
  title: string;
  createdOn: string;
  lastDate: string;
  interval: { startDate: Date; endDate: Date };
  products: TypeProductReportItem[];
};

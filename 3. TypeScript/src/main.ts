const cosa: string = "Big Tasty";

const numero: number = 20;

const bool: boolean = true;

const borraccia: {
  capacita: number;
  colore: string;
  marca: string;
  termica: boolean;
} = {
  capacita: 3,
  colore: "rosso",
  marca: "Decathlon",
  termica: true,
};

type TypeBorraccia = {
  capacita: number;
  colore: string;
  marca: string;
  termica: boolean;
};

const borraccia2: TypeBorraccia = {
  capacita: 3,
  colore: "blu",
  marca: "Decathlon",
  termica: true,
};

const borraccia3: TypeBorraccia = {
  capacita: 2,
  colore: "verde",
  marca: "Decathlon",
  termica: false,
};

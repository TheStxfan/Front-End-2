// Define products
const prodotti = [
  {
    taglia: "M",
    colore: ["rosso", "blu"],
    materiale: ["lana", "polyestere"],
    id: 1,
    prezzo: 29.99,
    genere: "uomo",
    marca: "nike",
    inStock: "67",
    categoria: "felpa",
    nome: "Nike Predator",
  },
  {
    taglia: "M",
    colore: ["rosso", "blu"],
    materiale: ["lana", "polyestere"],
    id: 1,
    prezzo: 29.99,
    genere: "uomo",
    marca: "nike",
    inStock: "67",
    categoria: "felpa",
    nome: "Nike Gucci",
  },
  {
    taglia: "M",
    colore: ["rosso", "blu"],
    materiale: ["lana", "polyestere"],
    id: 1,
    prezzo: 29.99,
    genere: "uomo",
    marca: "nike",
    inStock: "67",
    categoria: "felpa",
    nome: "Nike Geox",
  },
  {
    taglia: "M",
    colore: ["rosso", "blu"],
    materiale: ["lana", "polyestere"],
    id: 1,
    prezzo: 29.99,
    genere: "uomo",
    marca: "nike",
    inStock: "67",
    categoria: "felpa",
    nome: "Nike Safari",
  },
  {
    taglia: "M",
    colore: ["rosso", "blu"],
    materiale: ["lana", "polyestere"],
    id: 1,
    prezzo: 29.99,
    genere: "uomo",
    marca: "nike",
    inStock: "67",
    categoria: "felpa",
    nome: "Nike Alien",
  },
];

// List products

// for (let i in prodotti) {    // for sconsigliato in questo caso
//   console.log(prodotti[i].nome);
// }

// ForEach - si usa per accedere a ogni oggetto all'interno di un array
// prodotti.forEach((prodotto, index) => {
//   console.log(prodotto.nome);
// });

// Map - si usa per accedere a ogni elemento all'interno di un oggetto
// const prodottiUI = prodotti.map((prodotto, index) => {
//   nome = prodotto.nome;
//   prezzo = prodotto.prezzo;

//   console.log(index, nome, prezzo);
// });

// Map con return
// const prodottiUI = prodotti.map((prodotto, index) => {
//   return {
//     nome: prodotto.nome,
//     prezzo: prodotto.prezzo,
//     disponibile: prodotto.inStock > 0,
//   };
// });

// console.log(prodottiUI);

// Async functions
// 1
// const res = await fetch("https://fakestoreapi.com/products");
// const prods = await res.json();
// console.log(prods);

// 2
// const res = await (await fetch("https://fakestoreapi.com/products")).json();
// console.log(res[1].id);

// 3
// const getProducts = async () => {
//   const res = await fetch("https://fakestoreapi.com/products");
//   const prods = await res.json();
//   return prods;
// };

// 4
import { getProducts } from "./api_call.js";
console.log(await getProducts());

import { caricaProdotti } from "./api.js";
import { creaCarrelloVuoto, aggiungi, totaleCarrello } from "./cart.js";
import {
  filtraPerPrezzo,
  etichetteCatalogo,
  filtraPerCategoria,
  logEtichette,
} from "./catalog.js";

const prodotti = await caricaProdotti();

// Mostra prodotti caricati totali
console.log(`Prodotti caricati: ${prodotti.length}`);

// Crea lista filtrata per prezzo
const filtratiPerPrezzo = filtraPerPrezzo(prodotti, 50);

// console.log(filtratiPerPrezzo);

// Crea lista filtrata per categoria
const filtratiPerCategoria = filtraPerCategoria(
  filtratiPerPrezzo,
  "men's clothing",
);

// Stampa lista filtrata
console.log(filtratiPerCategoria);

// Crea nuova lista - testo, prezzo
const etichette = etichetteCatalogo(filtratiPerCategoria);

// Stampa etichette
logEtichette(etichette);

// Inizializza carrello
let carrello = creaCarrelloVuoto();

// Aggiunge prodotti al carrello
carrello = aggiungi(carrello, filtratiPerCategoria[0], 3);
carrello = aggiungi(carrello, filtratiPerCategoria[1], 2);

// Stampa totale carrello
console.log(totaleCarrello(carrello));

import { PRODUCTS } from "$lib/data/products";
import { writable } from "svelte/store";
const productsStore = writable(PRODUCTS)
export default productsStore
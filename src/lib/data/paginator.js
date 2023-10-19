import { PRODUCTS } from "./products";

export const PRODUCTS_PER_PAGE = 15;
export const TOTAL_PAGES = Math.ceil(PRODUCTS.length / PRODUCTS_PER_PAGE);

export function getProductsByPage(pageNumber) {
  const startIndex = (pageNumber - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;

  return PRODUCTS.slice(startIndex, endIndex);
}
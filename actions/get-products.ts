import { Product } from "@/types";

const DEFAULT_PAGE_SIZE = 24;
const DEFAULT_PAGE = 1;

export async function getProducts() {
  let data = null;

  try {
    const request = await fetch(
      `http://localhost:3000/products?pageNumber=${DEFAULT_PAGE}&pageSize=${DEFAULT_PAGE_SIZE}`
    );

    if (request.ok) {
      data = (await request.json()) as Product[];
    } else {
      throw new Error("Failed to load products");
    }
  } catch (error) {
    throw new Error("Failed to load products");
  }
  return data;
}

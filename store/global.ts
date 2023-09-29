import { Product } from "@/types";
import { create } from "zustand";

type GlobalStore = {
  orderList: Product[];
  productList: Product[];
  add: (product: Product) => void;
  remove: (productId: string) => void;
};

export const useGlobalStore = create<GlobalStore>((set) => ({
  orderList: [] as Product[],
  productList: [] as Product[],
  add: (product) =>
    set((state) => ({ ...state, orderList: [...state.orderList, product] })),
  remove: (productId) =>
    set((state) => ({
      ...state,
      orderList: state.orderList.filter((product) => product.id !== productId),
    })),
}));

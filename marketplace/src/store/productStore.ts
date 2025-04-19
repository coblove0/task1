import { create } from 'zustand';
import { store } from './reduxStore';
import { setProducts } from './reduxStore';
import { mobxStore } from './poductStoreMobx';
import { INITIAL_STATE } from 'const';

type TStatus = 'На оформлении' | 'Оформлен' | null;

export interface ProductStore {
  products: TProduct[];
  addToCart: (id: number) => void;
  removeProduct: (id: number) => void;
  syncWithRedux: () => void;
}

export type TProduct = {
  id: number;
  name: string;
  pic: string;
  inCart: boolean;
  status?: TStatus;
};

export const useProductStore = create<ProductStore>((set) => ({
  products: INITIAL_STATE,
  addToCart: (id) =>
    set((state) => {
      const updatedProducts = state.products.map((product) =>
        product.id === id
          ? { ...product, inCart: !product.inCart, status: 'На оформлении' as TStatus }
          : product,
      );
      mobxStore.setProducts(updatedProducts);
      store.dispatch(setProducts(updatedProducts)); // Синхронизация с Redux
      return { products: updatedProducts };
    }),
  removeProduct: (id) =>
    set((state) => {
      const updatedProducts = state.products.map((product) =>
        product.id === id ? { ...product, inCart: false, status: null } : product,
      );
      store.dispatch(setProducts(updatedProducts)); // Синхронизация с Redux
      return { products: updatedProducts };
    }),
  syncWithRedux: () => {
    const reduxProducts = store.getState().products.products;
    mobxStore.syncWithRedux();
    set({ products: reduxProducts });
  },
}));

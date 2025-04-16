import { create } from 'zustand';
import { store } from './reduxStore';
import { setProducts } from './reduxStore';

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
};

const INITIAL_STATE: TProduct[] = [
  { id: 1, name: 'Геродот', pic: '/images/gerodot.webp', inCart: false },
  { id: 2, name: 'Ностромо', pic: '/images/nostromo.webp', inCart: false },
  { id: 3, name: 'Неизвестный', pic: '/images/platinovaya-selezenka.webp', inCart: false },
  { id: 4, name: 'Тысячелетний сокол', pic: '/images/sokol.webp', inCart: false },
  { id: 5, name: 'USS Enterprise', pic: '/images/uss-enterprise.webp', inCart: false },
  { id: 6, name: 'Ямато', pic: '/images/yamato.webp', inCart: false },
];

export const useProductStore = create<ProductStore>((set) => ({
  products: INITIAL_STATE,
  addToCart: (id) =>
    set((state) => {
      const updatedProducts = state.products.map((product) =>
        product.id === id ? { ...product, inCart: !product.inCart } : product,
      );
      store.dispatch(setProducts(updatedProducts)); // Синхронизация с Redux
      return { products: updatedProducts };
    }),
  removeProduct: (id) =>
    set((state) => {
      const updatedProducts = state.products.map((product) =>
        product.id === id ? { ...product, inCart: false } : product,
      );
      store.dispatch(setProducts(updatedProducts)); // Синхронизация с Redux
      return { products: updatedProducts };
    }),
  syncWithRedux: () => {
    const reduxProducts = store.getState().products.products;
    set({ products: reduxProducts });
  },
}));

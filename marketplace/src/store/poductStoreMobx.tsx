import { makeAutoObservable } from 'mobx';
import { store } from './reduxStore';

class ProductStoreMobX {
  products = [];

  constructor() {
    makeAutoObservable(this);
  }

  setProducts(products: any[]) {
    this.products = products;
  }

  updateProductStatus(id: number, status: 'На оформлении' | 'Оформлен' | null) {
    this.products = this.products.map((product) =>
      product.id === id ? { ...product, status } : product,
    );
  }

  syncWithRedux() {
    const reduxProducts = store.getState().products.products;
    this.products = reduxProducts.map((product) => ({
      ...product,
      status: this.products.find((p) => p.id === product.id)?.status || null,
    }));
  }
}

export const mobxStore = new ProductStoreMobX();

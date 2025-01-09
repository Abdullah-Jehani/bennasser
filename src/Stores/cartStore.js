import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
  state: () => ({
    cart: [],
  }),
  actions: {
    addProduct(product) {
      const existingProduct = this.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += product.quantity;
        existingProduct.totalPrice += product.totalPrice;
      } else {
        this.cart.push(product);
      }
    },
    removeProduct(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
    },
    clearCart() {
      this.cart = [];
    },
  },
  getters: {
    cartTotal() {
      return this.cart.reduce((total, item) => total + item.totalPrice, 0);
    },
  },
});

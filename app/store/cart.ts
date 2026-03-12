import { create } from "zustand";
import type { ProductCart } from "../types";

type CartStore = {
    products: ProductCart[];
    totalPrice: number;
    addProduct: (product: ProductCart) => void;
    removeProduct: (name: string) => void;
    increaseCount: (name: string) => void;
    decreaseCount: (name: string) => void;
}

export const useCart = create<CartStore>()((set) => ({
    products: [],
    totalPrice: 0,
    addProduct: (product) => set((state) => ({ products: [...state.products, product], totalPrice: state.totalPrice + product.price })),
    removeProduct: (name) => set((state) => {
        const existingProduct = state.products.find(product => product.name === name);
        const removedPrice = existingProduct ? existingProduct.price * existingProduct.count : 0
        return {
            products: state.products.filter(product => product.name !== name),
            totalPrice: state.totalPrice - removedPrice
        }
    }),
    increaseCount: (name) => set((state) => {
        const existingProduct = state.products.find(product => product.name === name);
        return {
            products: state.products.map(product => product.name === name ? {
                ...product,
                count: product.count + 1
            } : product),
            totalPrice: state.totalPrice + (existingProduct?.price || 0)
        }
    }),
    decreaseCount: (name) => set((state) => {
        const existingProduct = state.products.find(product => product.name === name);
        return {
            products: state.products.map(product => product.name === name && product.count > 1 ? {
                ...product,
                count: product.count - 1
            } : product),
            totalPrice: state.totalPrice - (existingProduct?.price || 0)
        }
    })
}))
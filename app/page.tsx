"use client"

import ProductCard from "./components/ProductCard";
import productData from "./data.json";
import ProductCart from "./components/ProductCart";
import { useCart } from "./store/cart";

export default function Home() {
  const { addProduct, decreaseCount, increaseCount, products: productsCart } = useCart();

  return (
    <main className="flex items-center justify-center bg-zinc-50 font-sans py-(--spacing-300) px-(--spacing-300) lg:py-(--spacing-500) lg:px-(--spacing-500) xl:py-(--spacing-1100) xl:px-(--spacing-500)">
      <div className="flex flex-col xl:flex-row justify-center gap-(--spacing-400)">
        <div className="grid gap-(--spacing-400)">
          <h1 className="text-preset-1 text-(--color-rose-900) font-bold">Deserts</h1>
          <div id="product_grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-(--spacing-300) gap-y-(--spacing-300) lg:gap-y-(--spacing-400)">
            {productData.map(product => {
              const cartItem = productsCart.find(item => item.name === product.name);

              return (
                <ProductCard
                  key={product.name}
                  productData={product}
                  cartData={cartItem}
                  isCartItem={!!cartItem}
                  onAddToCart={addProduct}
                  onProductCountDecrease={decreaseCount}
                  onProductCountIncrease={increaseCount}
                />
              )
            })}
          </div>
        </div>
        <ProductCart />
      </div>
    </main>
  );
}

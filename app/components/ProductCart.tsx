import Image from "next/image"
import { useCart } from "../store/cart";
import type { ProductCart } from "../types";
import RemoveButton from "./buttons/RemoveButton";
import Button from "./buttons/Button";

const DividerLine = () => <div className="w-full h-px bg-(--color-rose-100)" />

const CartInfo = () => (
    <div className="w-full p-(--spacing-200) bg-(--color-rose-50) rounded-(--spacing-100) flex items-center justify-center gap-(--spacing-100)">
        <Image src="/images/icon-carbon-neutral.svg" alt="Carbon-neutral" width={20} height={20} />
        <p className="text-(--color-rose-900) text-preset-4">This is a <span className="text-preset-4-bold">carbon-neutral</span> delivery</p>
    </div>
)

const EmptyCart = () => (
    <div className="flex flex-col items-center w-full py-(--spacing-200) gap-(--spacing-200)">
        <Image src="/images/illustration-empty-cart.svg" alt="Empty Cart" width={128} height={128} />
        <span className="text-preset-4-bold text-(--color-rose-500) font-normal">Your added items will appear here</span>
    </div>
)

const CartView = ({
    products,
    onItemRemove
}: {
    products: ProductCart[],
    onItemRemove: (name: string) => void;
}) => (
    <div className="py-(--spacing-300) flex flex-col gap-(--spacing-200)">
        {products.map((product, index) => (
            <div key={product.name}>
                <div className={`flex items-center justify-between ${index !== products.length - 1 ? "pb-(--spacing-200)" : ""}`} >
                    <div className="inline-flex flex-col gap-(--spacing-100)">
                        <h5 className="text-preset-4-bold text-(--color-rose-900)">{product.name}</h5>
                        <div className="flex items-center gap-(--spacing-100)">
                            <span className="text-preset-4-bold text-(--color-red) w-5.25 self-start">{`${product.count}x`}</span>
                            <span className="text-preset-4 text-(--color-rose-500)">{`@ $${product.price.toFixed(2)}`}</span>
                            <span className="text-preset-4-bold text(--color-rose-500)">{`$${(product.price * product.count).toFixed(2)}`}</span>
                        </div>
                    </div>
                    <RemoveButton onClick={() => onItemRemove(product.name)} />
                </div>
                {index !== products.length - 1 && (
                    <DividerLine />
                )}
            </div>
        ))}
    </div>
)

const ProductCart = () => {
    const { products, totalPrice, removeProduct } = useCart();

    return (
        <div id="cart" className="p-(--spacing-300) bg-white w-full min-w-69.75 xl:max-w-[384px] self-start">
            <h3 className="text-preset-2 font-bold text-(--color-red)">{`Your Cart (${products.length})`}</h3>
            {products.length > 0 ? (
                <>
                    <CartView products={products} onItemRemove={removeProduct} />
                    <DividerLine />
                    <div className="flex items-center justify-between text-(--color-rose-900) py-(--spacing-300)">
                        <h4 className="text-preset-4">Order Total</h4>
                        <span className="text-preset-2">{`$${totalPrice.toFixed(2)}`}</span>
                    </div>
                    <CartInfo />
                    <Button className="w-full mt-(--spacing-300)">Confirm Order</Button>
                </>
            ) : <EmptyCart />}

        </div>
    )
}

export default ProductCart;
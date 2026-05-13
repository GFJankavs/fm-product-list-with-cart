import Image from "next/image";
import AddToCartButton from "./buttons/AddToCartButton";
import type { ProductCart, ProductData } from "../types";

const ProductCard = ({
    productData,
    cartData,
    isCartItem,
    onAddToCart,
    onProductCountDecrease,
    onProductCountIncrease,
}: {
    productData: ProductData;
    cartData: ProductCart | undefined;
    isCartItem: boolean;
    onAddToCart: (product: ProductCart) => void;
    onProductCountIncrease: (productName: string) => void;
    onProductCountDecrease: (productName: string) => void;
}) => {
    const {
        category,
        image: { desktop: imgSrc, thumbnail: imgThumb },
        price,
        name: title,
    } = productData;

    return (
        <div
            id="product_card"
            className="flex flex-col gap-[calc(var(--spacing-200)+22px)]"
        >
            <div className="relative">
                <Image
                    src={imgSrc}
                    alt={title}
                    width={327}
                    height={240}
                    className="rounded-(--spacing-100)"
                />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <AddToCartButton
                        isCartItem={isCartItem}
                        itemCount={cartData?.count || 1}
                        onCartAdd={() =>
                            onAddToCart({
                                count: 1,
                                name: title,
                                price,
                                img: imgThumb,
                            })
                        }
                        onAmountDecrease={() => onProductCountDecrease(title)}
                        onAmountIncrease={() => onProductCountIncrease(title)}
                    />
                </div>
            </div>
            <div className="grid gap-(--spacing-50)">
                <span className="text-preset-4 text-(--color-rose-500)">
                    {category}
                </span>
                <h5 className="text-preset-3 text-(--color-rose-900)">
                    {title}
                </h5>
                <span className="text-preset-3 text-(--color-red)">{`$${price.toFixed(2)}`}</span>
            </div>
        </div>
    );
};

export default ProductCard;

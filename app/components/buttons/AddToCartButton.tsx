"use client";

import Image from "next/image";
import type { ButtonHTMLAttributes, ReactNode } from "react"
import AmountIcon from "../icons/AmountIcon";

const DefaultButton = ({ ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button className="min-w-40 group p-(--spacing-150) rounded-full inline-flex justify-center items-center gap-(--spacing-100) bg-white border border-(--color-rose-400) hover:border-(--color-red) cursor-pointer" {...rest}>
        <Image src="/images/icon-add-to-cart.svg" alt="Cart Icon" width={20} height={20} />
        <span className="text-preset-4-bold text-black group-hover:text-(--color-red)">Add to Cart</span>
    </button>
)

const ActiveButton = ({ children, onAdd, onSubtract }: {
    children: ReactNode;
    onSubtract: () => void;
    onAdd: () => void;
}) => (
    <div className="text-white min-w-40 p-(--spacing-150) bg-(--color-red) inline-flex justify-between items-center rounded-full">
        <AmountIcon variant="subtract" onClick={onSubtract} />
        <span className="text-preset-4-bold">{children}</span>
        <AmountIcon variant="add" onClick={onAdd} />
    </div>
)

const AddToCartButton = ({
    isCartItem,
    onCartAdd,
    onAmountDecrease,
    onAmountIncrease,
    itemCount
}: {
    itemCount: number;
    onAmountIncrease: () => void;
    onAmountDecrease: () => void;
    isCartItem: boolean;
    onCartAdd: () => void;
}) => (
    <div>
        {isCartItem ? (
            <ActiveButton
                onAdd={onAmountIncrease}
                onSubtract={onAmountDecrease}
            >
                {itemCount}
            </ActiveButton>
        ) : <DefaultButton
            onClick={onCartAdd}
        />}
    </div>
)

export default AddToCartButton;
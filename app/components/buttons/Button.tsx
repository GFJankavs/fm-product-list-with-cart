import type { ButtonHTMLAttributes } from "react";

const Button = ({ children, className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
        className={`py-(--spacing-200) px-(--spacing-300) bg-(--color-red) hover:bg-(--color-red-hover) text-white rounded-[999px] cursor-pointer text-preset-3 ${className}`}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button;
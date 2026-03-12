import { ButtonHTMLAttributes } from "react";

const AmountIcon = ({
    variant,
    ...rest
}: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    variant: "add" | "subtract"
}) => (
    <button id="btn-amount" className="w-5 h-5 rounded-full border-white bg-transparent [&_path]:fill-white hover:[&_path]:fill-(--color-red) hover:bg-white cursor-pointer flex items-center justify-center" {...rest}>
        {variant === "add" ? (
            <svg id="increment" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="currentColor" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" /></svg>
        ) : (
            <svg id="decrement" xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="currentColor" d="M0 .375h10v1.25H0V.375Z" /></svg>
        )}
    </button>
);

export default AmountIcon;
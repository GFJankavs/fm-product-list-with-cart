import { ButtonHTMLAttributes } from "react";

const RemoveButton = ({ ...rest }: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">) => (
    <button
        className="w-5 h-5 inline-flex justify-center items-center border rounded-full text-(--color-rose-400) hover:text-black cursor-pointer"
        {...rest}
    >
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
            <path d="M7.75 8.75L4.375 5.375L1 8.75L0 7.75L3.375 4.375L0 1L1 0L4.375 3.375L7.75 0L8.75 1L5.375 4.375L8.75 7.75L7.75 8.75Z" fill="currentColor" />
        </svg>
    </button>
)

export default RemoveButton;
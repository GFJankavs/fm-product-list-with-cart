export type ProductData = {
    image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
    };
    name: string;
    category: string;
    price: number;
};

export type ProductCart = {
    name: string;
    price: number;
    count: number;
    img: string;
};

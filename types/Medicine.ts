export type  Medicine = {
    id: string;
    name: string;
    price: number;
    image: any;
    category: string;
    discount?: number;
    stock?: number;
    productDetails?: ProductDetails;
}

type ProductDetails = {
    brand: string;
    expires: string;
    countryOfOrigin?: string;
    description?: string;
    howToUse?: string;
    ingredients?: string;
}
import { emptyError, ResponseType } from "../../Types/serviceTypes";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export const fetchProductsService = async (): Promise<ResponseType<ProductType[]|null>> => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      return emptyError
    }
    const data: ProductType[] = await res.json();
    return {
      response: data,
      responseIndicator: "success",
      statusCode: "200",
      responseMessage: "Products fetched successfully",
    };
  } catch (error) {
    return emptyError
  }
};
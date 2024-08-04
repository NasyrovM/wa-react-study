import { AxiosPromise } from "axios";
import { Product } from "./models";
import { apiInstance } from "./base";

const BASE_URL = "/products";

export type GetProductListParams = {
    limit?: number;
    skip?: number;
}

export type ProductResponse =
{
    products : Product[]
}

export const getProductList = (
    params?:GetProductListParams
):AxiosPromise<ProductResponse> => {
    return apiInstance.get(BASE_URL, { params })
};
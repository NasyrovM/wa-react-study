import { createSelector, createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { normalize, schema } from "normalizr";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { dummy, Product } from "shared/api";
import { products } from "shared/api/dummy";
import { ProductResponse } from "shared/api/dummy/products";

type NormalizedProducts = Record<number, Product>;

export const productSchema = new schema.Entity<Product>("products");

export const normalizeProducts = (data: Product[]) => 
    normalize<Product, { products: NormalizedProducts }>(data, [productSchema]);

export type QueryConfig = {
    limit?: number;
    skip?: number;
};

export const initialState: {
    data: NormalizedProducts;
    queryConfig?: QueryConfig;
} = {
    data: {},
    queryConfig: {},
}

const PRODUCT_LIST_QUERY_KEY = "products";

export const getProductListAsync = 
    (params?: dummy.products.GetProductListParams) => (dispatch: Dispatch) => 
        useQuery<AxiosResponse<ProductResponse>>(
            PRODUCT_LIST_QUERY_KEY,
            () => dummy.products.getProductList(params),
            {
                onSuccess: ({ data }) => {
                    console.log(data.products);
                    dispatch(productModel.actions.setProductList(data.products));
                },
                refetchOnWindowFocus: false,
            }
        );

export const productModel = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProductList: (state, { payload }: PayloadAction<Product[]>) => {
            let a = normalizeProducts(payload).entities.products;
            state.data = a;
        },
    },
});

export const getProductList = () => 
    useSelector(
        createSelector(
            (state: RootState) => state.products.data,
            (
                products: RootState["products"]["data"]
            ) => Object.values(products)
        )
    );
    
export const isProductsEmpty = (): boolean =>
    useSelector(
        createSelector(
            (state: RootState) => state.products.data,
            (products) => Object.keys(products).length === 0
        )
    );
      
export const reducer = productModel.reducer;
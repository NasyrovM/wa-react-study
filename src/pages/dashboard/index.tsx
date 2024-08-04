import { productModel } from "entities/product";
import { useDispatch } from "react-redux";

export function DashboardPage()
{
    return (
        <>
        <h1>Dashboard</h1>
        <div>
            {PageContent()}
        </div>
        </>
    );

    function PageContent(){
        const dispatch = useDispatch();

        const { isFetching } = productModel.getProductListAsync()(dispatch);

        const isEmpty = productModel.isProductsEmpty();
        const products = productModel.getProductList();
        
        if (isFetching)    return (<p>loading...</p>);

        if (isEmpty) return (<p>not task foud</p>);

        return products.map(product => (<div>{ product.title }</div>));
    }
}

export function ProdComponent()
{
    return(<div>hello</div>);
}
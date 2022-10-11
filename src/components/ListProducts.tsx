import React from "react";
import { ProductList } from "../types/product";
import { Product } from "./Product";
import { GridElements } from "../styles/listProducts";

interface Props { products : ProductList }


export const ListProducts = ({products} : Props) => {

    return (
        <GridElements>
            {products.map(itemProduct => <Product product = {itemProduct}></Product>)}
        </GridElements>
    );

}
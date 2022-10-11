import React from "react";
import { ProductType } from "../types/product";
import {ContainerProduct } from '../styles/product'

interface Props {
    product: ProductType
}

export const Product = ({product} : Props) => {
    return(
    <ContainerProduct>
        <h3>{product.name}</h3>
        <p><strong>{product.marca}</strong></p>
        <h4>{product.price}</h4>
        <h4>{product.stock}</h4>
    </ContainerProduct>);
}
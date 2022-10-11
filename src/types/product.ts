export type ProductType = {
    name: string,
    marca: string,
    stock: number,
    price: number,
}

export type ProductList = Array<ProductType>

export type FirstThree = {
    product: Array<ProductType>,
    count: number
}
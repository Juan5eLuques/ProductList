import { ProductList } from "../types/product";
import { data } from "../utils/data";

export const getFilter = ( mount : number ) : ProductList | [] => {
    return data.filter(item => item.price>mount)
}
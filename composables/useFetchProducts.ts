import * as IProduct from '~/core/models/IProduct'
import {baseUrl} from "~/core/constants";

export const useFetchProducts = () => {
    const updateProduct = async(id:number, body:IProduct.Item) => {
        await $fetch(baseUrl + `/${id}`, {method:'PUT', body})
    }
    return {updateProduct}
}

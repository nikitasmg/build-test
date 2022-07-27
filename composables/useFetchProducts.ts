import * as IProduct from '~/core/models/IProduct'
import {useFetch} from "#app";
import {Routes} from "~/core/enums";
import {baseUrl} from "~/core/constants";

export const useFetchProducts = (route: Routes) => {
    const {data, error, pending, refresh} = useFetch<IProduct.Item[], boolean>(baseUrl + route ,{key:route})
    const addToFavorite = async (body: IProduct.Item) => {
        await $fetch(baseUrl + Routes.FAVORITE, {method: 'POST',body})
    }
    const addToDeals = async (body: IProduct.Item) => {
        await $fetch(baseUrl + Routes.DEALS, {method: 'POST', body})
    }
    return {data, error, pending,refresh, addToDeals, addToFavorite}
}

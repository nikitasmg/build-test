import * as IProduct from '~/core/models/IProduct'
import {useFetch} from "#app";
import {Routes} from "~/core/enums";
import {baseUrl} from "~/core/constants";

export const useFetchProducts = () => {

    const getProducts = (): IProduct.Promise => {
        const {data, error, pending} = useFetch<IProduct.Item[], boolean>(baseUrl + Routes.PRODUCTS)
        return {data, error, pending}
    }

    const getFavorite = (): IProduct.Promise => {
        const {data, error, pending} = useFetch<IProduct.Item[], boolean>(baseUrl + Routes.FAVORITE)
        return {data, error, pending}
    }

    const getDeals = (): IProduct.Promise => {
        const {data, error, pending} = useFetch<IProduct.Item[], boolean>(baseUrl + Routes.DEALS)
        return {data, error, pending}
    }

    const addToFavorite = async (body: IProduct.Item) => {
        await $fetch(baseUrl + Routes.FAVORITE, {method: 'POST', body: {body}})
    }
    const addToDeals = async (body: IProduct.Item) => {
        await $fetch(baseUrl + Routes.DEALS, {method: 'POST', body: {body}})
    }
    return {getProducts, getDeals, getFavorite, addToDeals, addToFavorite}
}

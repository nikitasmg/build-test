import {useFetch, useRoute} from "#app";
import * as IProduct from "~/core/models/IProduct";
import {baseUrl} from "~/core/constants";
import * as Enums from '~/core/enums'

export const useFilterProducts = (): IProduct.Promise => {
    const {name} = useRoute()
    const {data, error, pending, refresh} = useFetch<IProduct.Item[], boolean>(baseUrl, {watch: [() => name]})

    if (name === 'favorite') {
        refresh().then(() => {
            data.value = data.value?.filter(el => el.favorite)
        })
    } else if (name === 'deals') {
        refresh().then(() => {
            data.value = data.value?.filter(el => el.status === Enums.ProductStatus.PAID || el.status === Enums.ProductStatus.DEAL)
        })
    }
    return {data, error, pending}
}
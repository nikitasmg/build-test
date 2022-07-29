import {Ref} from "@vue/reactivity";
import {ProductStatus} from "~/core/enums";

export interface Item {
    id: number,
    type: string,
    name: string,
    city: string,
    seller: string,
    category: string,
    description: string,
    price: number,
    count: number,
    image: string,
    status: ProductStatus,
    favorite: boolean,
}

export interface Promise {
    data: Ref<Item[]>,
    error: Ref<boolean>,
    pending: Ref<boolean>
}
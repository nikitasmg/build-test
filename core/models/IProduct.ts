import {Ref} from "@vue/reactivity";

export interface Item {
    type: string,
    name: string,
    city: string,
    seller: string,
    category: string,
    description: string,
    price: number,
    count: number,
    image: string,
}

export interface Promise {
    data: Ref<Item[]>,
    error: Ref<boolean>,
    pending: Ref<boolean>
}
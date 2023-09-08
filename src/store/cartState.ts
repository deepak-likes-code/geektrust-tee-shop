import { atom } from "recoil";
import { ItemInterface } from "../types/interfaces";

export const cartState = atom({
    key: 'cartState',
    default: [] as ItemInterface[]
})
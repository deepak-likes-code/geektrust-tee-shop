import { atom } from "recoil";
import { ItemInterface } from "../types/interfaces";

export const itemState = atom({
    key: 'itemState',
    default: [] as ItemInterface[]
})
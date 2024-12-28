import {Item} from "./Item.ts";

export interface ItemCategory {
    id: number;
    title: string;
    colorList?: Item[];
}
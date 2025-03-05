import {Item} from "./Item";

export interface ItemCategory {
    id: number;
    title: string;
    colorList?: Item[];
}
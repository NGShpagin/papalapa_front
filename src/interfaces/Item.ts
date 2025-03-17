import {Image} from "./Image";

export interface Item {
    id: number;
    title: string;
    nmId: number;
    colorName: string;
    colorValue: string;
    price: number;
    wbUrl: string;
    imageList?: Image[];
}
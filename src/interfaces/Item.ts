import {Image} from "./Image";

export interface Item {
    id: number;
    title: string;
    colorName: string;
    colorValue: string;
    price: number;
    wbUrl: string;
    imageList?: Image[];
}
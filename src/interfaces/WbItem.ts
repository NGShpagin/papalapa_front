import {WbItemSize} from "./WbItemSize.ts";

export interface WbItem {
    nmID: number;
    vendorCode: string;
    sizes: WbItemSize[];
    currencyIsoCode4217: string;
    discount: number;
    clubDiscount: number;
    editableSizePrice: boolean;
}
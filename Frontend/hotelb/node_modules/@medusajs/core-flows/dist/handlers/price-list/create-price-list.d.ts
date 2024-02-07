import { CreatePriceListDTO, PriceListDTO } from "@medusajs/types";
import { WorkflowArguments } from "@medusajs/workflows-sdk";
type Result = {
    priceList: PriceListDTO;
}[];
type Input = {
    tag?: string;
    priceList: CreatePriceListDTO;
}[];
export declare function createPriceLists({ container, data, }: WorkflowArguments<{
    priceLists: Input;
}>): Promise<Result>;
export declare namespace createPriceLists {
    var aliases: {
        priceLists: string;
    };
}
export {};

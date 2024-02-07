import { PriceListDTO, PriceListPriceDTO, UpdatePriceListDTO } from "@medusajs/types";
import { WorkflowArguments } from "@medusajs/workflows-sdk";
type Result = {
    priceLists: PriceListDTO[];
};
export declare function updatePriceLists({ container, data, }: WorkflowArguments<{
    priceLists: UpdatePriceListDTO[];
    priceListPricesMap: Map<string, PriceListPriceDTO[]>;
}>): Promise<Result>;
export declare namespace updatePriceLists {
    var aliases: {
        payload: string;
    };
}
export {};

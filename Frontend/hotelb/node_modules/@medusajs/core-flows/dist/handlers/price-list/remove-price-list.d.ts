import { PriceListDTO } from "@medusajs/types";
import { WorkflowArguments } from "@medusajs/workflows-sdk";
export declare function removePriceLists({ container, data, }: WorkflowArguments<{
    price_lists: {
        price_list: PriceListDTO;
    }[];
}>): Promise<{
    price_list: PriceListDTO;
}[]>;
export declare namespace removePriceLists {
    var aliases: {
        priceLists: string;
    };
}

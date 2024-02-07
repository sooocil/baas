import { PriceListPriceDTO, UpdatePriceListDTO, WorkflowTypes } from "@medusajs/types";
import { WorkflowArguments } from "@medusajs/workflows-sdk";
type Result = {
    priceLists: UpdatePriceListDTO[];
    priceListPricesMap: Map<string, PriceListPriceDTO[]>;
};
export declare function prepareUpdatePriceLists({ container, data, }: WorkflowArguments<{
    price_lists: WorkflowTypes.PriceListWorkflow.UpdatePriceListWorkflowDTO[];
}>): Promise<Result>;
export declare namespace prepareUpdatePriceLists {
    var aliases: {
        payload: string;
    };
}
export {};

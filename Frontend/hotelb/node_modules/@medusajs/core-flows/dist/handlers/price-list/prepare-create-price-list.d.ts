import { CreatePriceListDTO, PriceListWorkflow } from "@medusajs/types";
import { WorkflowArguments } from "@medusajs/workflows-sdk";
type Result = {
    tag?: string;
    priceList: CreatePriceListDTO;
}[];
export declare function prepareCreatePriceLists({ container, data, }: WorkflowArguments<{
    price_lists: (PriceListWorkflow.CreatePriceListWorkflowDTO & {
        _associationTag?: string;
    })[];
}>): Promise<Result | void>;
export declare namespace prepareCreatePriceLists {
    var aliases: {
        payload: string;
    };
}
export {};

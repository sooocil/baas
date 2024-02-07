import { WorkflowArguments } from "@medusajs/workflows-sdk";
type Result = {
    priceSetIds: string[];
    priceListId: string;
};
export declare function prepareRemoveProductPrices({ container, data, }: WorkflowArguments<{
    product_ids: string[];
    price_list_id: string;
}>): Promise<Result | void>;
export {};

import { WorkflowArguments } from "@medusajs/workflows-sdk";
type Result = {
    priceSetIds: string[];
    priceListId: string;
};
export declare function prepareRemoveVariantPrices({ container, data, }: WorkflowArguments<{
    variant_ids: string[];
    price_list_id: string;
}>): Promise<Result | void>;
export {};

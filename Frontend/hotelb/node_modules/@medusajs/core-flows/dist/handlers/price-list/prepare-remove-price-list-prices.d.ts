import { WorkflowArguments } from "@medusajs/workflows-sdk";
type Result = {
    moneyAmountIds: string[];
    priceListId: string;
};
export declare function prepareRemovePriceListPrices({ container, data, }: WorkflowArguments<{
    money_amount_ids: string[];
    price_list_id: string;
}>): Promise<Result | void>;
export declare namespace prepareRemovePriceListPrices {
    var aliases: {
        payload: string;
    };
}
export {};

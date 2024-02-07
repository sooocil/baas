import { WorkflowArguments } from "@medusajs/workflows-sdk";
type Result = {
    deletedPriceIds: string[];
};
export declare function removePrices({ container, data, }: WorkflowArguments<{
    moneyAmountIds: string[];
}>): Promise<Result>;
export declare namespace removePrices {
    var aliases: {
        payload: string;
    };
}
export {};

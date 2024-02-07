import { WorkflowArguments } from "@medusajs/workflows-sdk";
export declare function removePriceListPriceSetPrices({ container, data, }: WorkflowArguments<{
    priceSetIds: string[];
    priceListId: string;
}>): Promise<string[]>;

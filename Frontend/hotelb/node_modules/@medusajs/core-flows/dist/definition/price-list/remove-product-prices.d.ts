import { WorkflowTypes } from "@medusajs/types";
export declare enum RemoveProductPricesActions {
    prepare = "prepare",
    removePriceListPriceSetPrices = "removePriceListPriceSetPrices"
}
export declare const removePriceListProductPrices: import("@medusajs/workflows-sdk").MainExportedWorkflow<WorkflowTypes.PriceListWorkflow.RemovePriceListProductsWorkflowInputDTO, string[]>;

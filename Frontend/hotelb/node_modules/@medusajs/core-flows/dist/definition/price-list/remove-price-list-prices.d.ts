import { WorkflowTypes } from "@medusajs/types";
export declare enum RemovePriceListPricesActions {
    prepare = "prepare",
    removePriceListPrices = "removePriceListPrices"
}
export declare const removePriceListPrices: import("@medusajs/workflows-sdk").MainExportedWorkflow<WorkflowTypes.PriceListWorkflow.RemovePriceListPricesWorkflowInputDTO, string[]>;

import { WorkflowTypes } from "@medusajs/types";
export declare enum RemoveVariantPricesActions {
    prepare = "prepare",
    removePriceListPriceSetPrices = "removePriceListPriceSetPrices"
}
export declare const removePriceListVariantPrices: import("@medusajs/workflows-sdk").MainExportedWorkflow<WorkflowTypes.PriceListWorkflow.RemovePriceListVariantsWorkflowInputDTO, string[]>;

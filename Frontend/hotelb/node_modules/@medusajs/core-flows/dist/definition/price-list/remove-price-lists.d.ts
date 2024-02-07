import { WorkflowTypes } from "@medusajs/types";
export declare enum RemovePriceListActions {
    removePriceList = "removePriceList"
}
export declare const removePriceLists: import("@medusajs/workflows-sdk").MainExportedWorkflow<WorkflowTypes.PriceListWorkflow.RemovePriceListWorkflowInputDTO, {
    price_list_ids: string[];
}>;

import { WorkflowTypes } from "@medusajs/types";
export declare enum UpdatePriceListActions {
    prepare = "prepare",
    updatePriceList = "updatePriceList"
}
export declare const updatePriceLists: import("@medusajs/workflows-sdk").MainExportedWorkflow<WorkflowTypes.PriceListWorkflow.UpdatePriceListWorkflowInputDTO, {
    priceList: WorkflowTypes.PriceListWorkflow.UpdatePriceListWorkflowDTO;
}[]>;

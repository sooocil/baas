import { PricingTypes, WorkflowTypes } from "@medusajs/types";
export declare enum CreatePriceListActions {
    prepare = "prepare",
    createPriceList = "createPriceList"
}
export declare const createPriceLists: import("@medusajs/workflows-sdk").MainExportedWorkflow<WorkflowTypes.PriceListWorkflow.CreatePriceListWorkflowInputDTO, {
    priceList: PricingTypes.CreatePriceListDTO;
}[]>;

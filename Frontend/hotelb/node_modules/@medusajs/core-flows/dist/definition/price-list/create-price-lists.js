"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPriceLists = exports.CreatePriceListActions = void 0;
const orchestration_1 = require("@medusajs/orchestration");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const definitions_1 = require("../../definitions");
const handlers_1 = require("../../handlers");
var CreatePriceListActions;
(function (CreatePriceListActions) {
    CreatePriceListActions["prepare"] = "prepare";
    CreatePriceListActions["createPriceList"] = "createPriceList";
})(CreatePriceListActions || (exports.CreatePriceListActions = CreatePriceListActions = {}));
const workflowSteps = {
    next: {
        action: CreatePriceListActions.prepare,
        noCompensation: true,
        next: {
            action: CreatePriceListActions.createPriceList,
        },
    },
};
const handlers = new Map([
    [
        CreatePriceListActions.prepare,
        {
            invoke: (0, workflows_sdk_1.pipe)({
                inputAlias: CreatePriceListActions.prepare,
                merge: true,
                invoke: {
                    from: CreatePriceListActions.prepare,
                },
            }, handlers_1.PriceListHandlers.prepareCreatePriceLists),
        },
    ],
    [
        CreatePriceListActions.createPriceList,
        {
            invoke: (0, workflows_sdk_1.pipe)({
                invoke: {
                    from: CreatePriceListActions.prepare,
                    alias: handlers_1.PriceListHandlers.createPriceLists.aliases.priceLists,
                },
            }, handlers_1.PriceListHandlers.createPriceLists),
            compensate: (0, workflows_sdk_1.pipe)({
                invoke: {
                    from: CreatePriceListActions.createPriceList,
                    alias: handlers_1.PriceListHandlers.removePriceLists.aliases.priceLists,
                },
            }, handlers_1.PriceListHandlers.removePriceLists),
        },
    ],
]);
orchestration_1.WorkflowManager.register(definitions_1.Workflows.CreatePriceList, workflowSteps, handlers);
exports.createPriceLists = (0, workflows_sdk_1.exportWorkflow)(definitions_1.Workflows.CreatePriceList, CreatePriceListActions.createPriceList);
//# sourceMappingURL=create-price-lists.js.map
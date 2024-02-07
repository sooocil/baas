"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePriceListProductPrices = exports.RemoveProductPricesActions = void 0;
const orchestration_1 = require("@medusajs/orchestration");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const definitions_1 = require("../../definitions");
const handlers_1 = require("../../handlers");
var RemoveProductPricesActions;
(function (RemoveProductPricesActions) {
    RemoveProductPricesActions["prepare"] = "prepare";
    RemoveProductPricesActions["removePriceListPriceSetPrices"] = "removePriceListPriceSetPrices";
})(RemoveProductPricesActions || (exports.RemoveProductPricesActions = RemoveProductPricesActions = {}));
const workflowSteps = {
    next: {
        action: RemoveProductPricesActions.prepare,
        noCompensation: true,
        next: {
            action: RemoveProductPricesActions.removePriceListPriceSetPrices,
            noCompensation: true,
        },
    },
};
const handlers = new Map([
    [
        RemoveProductPricesActions.prepare,
        {
            invoke: (0, workflows_sdk_1.pipe)({
                inputAlias: RemoveProductPricesActions.prepare,
                merge: true,
                invoke: {
                    from: RemoveProductPricesActions.prepare,
                },
            }, handlers_1.PriceListHandlers.prepareRemoveProductPrices),
        },
    ],
    [
        RemoveProductPricesActions.removePriceListPriceSetPrices,
        {
            invoke: (0, workflows_sdk_1.pipe)({
                merge: true,
                invoke: {
                    from: RemoveProductPricesActions.prepare,
                    alias: handlers_1.PriceListHandlers.createPriceLists.aliases.priceLists,
                },
            }, handlers_1.PriceListHandlers.removePriceListPriceSetPrices),
        },
    ],
]);
orchestration_1.WorkflowManager.register(definitions_1.Workflows.RemovePriceListProductPrices, workflowSteps, handlers);
exports.removePriceListProductPrices = (0, workflows_sdk_1.exportWorkflow)(definitions_1.Workflows.RemovePriceListProductPrices, RemoveProductPricesActions.removePriceListPriceSetPrices);
//# sourceMappingURL=remove-product-prices.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePriceListVariantPrices = exports.RemoveVariantPricesActions = void 0;
const orchestration_1 = require("@medusajs/orchestration");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const definitions_1 = require("../../definitions");
const handlers_1 = require("../../handlers");
var RemoveVariantPricesActions;
(function (RemoveVariantPricesActions) {
    RemoveVariantPricesActions["prepare"] = "prepare";
    RemoveVariantPricesActions["removePriceListPriceSetPrices"] = "removePriceListPriceSetPrices";
})(RemoveVariantPricesActions || (exports.RemoveVariantPricesActions = RemoveVariantPricesActions = {}));
const workflowSteps = {
    next: {
        action: RemoveVariantPricesActions.prepare,
        noCompensation: true,
        next: {
            action: RemoveVariantPricesActions.removePriceListPriceSetPrices,
            noCompensation: true,
        },
    },
};
const handlers = new Map([
    [
        RemoveVariantPricesActions.prepare,
        {
            invoke: (0, workflows_sdk_1.pipe)({
                inputAlias: RemoveVariantPricesActions.prepare,
                merge: true,
                invoke: {
                    from: RemoveVariantPricesActions.prepare,
                },
            }, handlers_1.PriceListHandlers.prepareRemoveVariantPrices),
        },
    ],
    [
        RemoveVariantPricesActions.removePriceListPriceSetPrices,
        {
            invoke: (0, workflows_sdk_1.pipe)({
                merge: true,
                invoke: {
                    from: RemoveVariantPricesActions.prepare,
                    alias: handlers_1.PriceListHandlers.createPriceLists.aliases.priceLists,
                },
            }, handlers_1.PriceListHandlers.removePriceListPriceSetPrices),
        },
    ],
]);
orchestration_1.WorkflowManager.register(definitions_1.Workflows.RemovePriceListVariantPrices, workflowSteps, handlers);
exports.removePriceListVariantPrices = (0, workflows_sdk_1.exportWorkflow)(definitions_1.Workflows.RemovePriceListVariantPrices, RemoveVariantPricesActions.removePriceListPriceSetPrices);
//# sourceMappingURL=remove-variant-prices.js.map
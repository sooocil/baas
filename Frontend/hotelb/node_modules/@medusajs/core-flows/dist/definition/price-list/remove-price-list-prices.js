"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePriceListPrices = exports.RemovePriceListPricesActions = void 0;
const orchestration_1 = require("@medusajs/orchestration");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const definitions_1 = require("../../definitions");
const handlers_1 = require("../../handlers");
var RemovePriceListPricesActions;
(function (RemovePriceListPricesActions) {
    RemovePriceListPricesActions["prepare"] = "prepare";
    RemovePriceListPricesActions["removePriceListPrices"] = "removePriceListPrices";
})(RemovePriceListPricesActions || (exports.RemovePriceListPricesActions = RemovePriceListPricesActions = {}));
const workflowSteps = {
    next: {
        action: RemovePriceListPricesActions.prepare,
        noCompensation: true,
        next: {
            action: RemovePriceListPricesActions.removePriceListPrices,
            noCompensation: true,
        },
    },
};
const handlers = new Map([
    [
        RemovePriceListPricesActions.prepare,
        {
            invoke: (0, workflows_sdk_1.pipe)({
                inputAlias: RemovePriceListPricesActions.prepare,
                merge: true,
                invoke: {
                    from: RemovePriceListPricesActions.prepare,
                },
            }, handlers_1.PriceListHandlers.prepareRemovePriceListPrices),
        },
    ],
    [
        RemovePriceListPricesActions.removePriceListPrices,
        {
            invoke: (0, workflows_sdk_1.pipe)({
                merge: true,
                invoke: {
                    from: RemovePriceListPricesActions.prepare,
                },
            }, handlers_1.PriceListHandlers.removePrices),
        },
    ],
]);
orchestration_1.WorkflowManager.register(definitions_1.Workflows.RemovePriceListPrices, workflowSteps, handlers);
exports.removePriceListPrices = (0, workflows_sdk_1.exportWorkflow)(definitions_1.Workflows.RemovePriceListPrices, RemovePriceListPricesActions.removePriceListPrices);
//# sourceMappingURL=remove-price-list-prices.js.map
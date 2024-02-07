"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePriceLists = exports.UpdatePriceListActions = void 0;
const orchestration_1 = require("@medusajs/orchestration");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const definitions_1 = require("../../definitions");
const handlers_1 = require("../../handlers");
var UpdatePriceListActions;
(function (UpdatePriceListActions) {
    UpdatePriceListActions["prepare"] = "prepare";
    UpdatePriceListActions["updatePriceList"] = "updatePriceList";
})(UpdatePriceListActions || (exports.UpdatePriceListActions = UpdatePriceListActions = {}));
const workflowSteps = {
    action: UpdatePriceListActions.prepare,
    noCompensation: true,
    next: {
        next: {
            noCompensation: true,
            action: UpdatePriceListActions.updatePriceList,
        },
    },
};
const handlers = new Map([
    [
        UpdatePriceListActions.prepare,
        {
            invoke: (0, workflows_sdk_1.pipe)({
                inputAlias: UpdatePriceListActions.prepare,
                merge: true,
                invoke: {
                    from: UpdatePriceListActions.prepare,
                },
            }, handlers_1.PriceListHandlers.prepareUpdatePriceLists),
        },
    ],
    [
        UpdatePriceListActions.updatePriceList,
        {
            invoke: (0, workflows_sdk_1.pipe)({
                inputAlias: UpdatePriceListActions.updatePriceList,
                merge: true,
                invoke: {
                    from: UpdatePriceListActions.prepare,
                },
            }, handlers_1.PriceListHandlers.updatePriceLists),
        },
    ],
]);
orchestration_1.WorkflowManager.register(definitions_1.Workflows.UpdatePriceLists, workflowSteps, handlers);
exports.updatePriceLists = (0, workflows_sdk_1.exportWorkflow)(definitions_1.Workflows.UpdatePriceLists, UpdatePriceListActions.updatePriceList);
//# sourceMappingURL=update-price-lists.js.map
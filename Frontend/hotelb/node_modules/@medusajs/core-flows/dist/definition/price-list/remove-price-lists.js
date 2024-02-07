"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePriceLists = exports.RemovePriceListActions = void 0;
const orchestration_1 = require("@medusajs/orchestration");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const handlers_1 = require("../../handlers");
const definitions_1 = require("../../definitions");
var RemovePriceListActions;
(function (RemovePriceListActions) {
    RemovePriceListActions["removePriceList"] = "removePriceList";
})(RemovePriceListActions || (exports.RemovePriceListActions = RemovePriceListActions = {}));
const workflowSteps = {
    next: {
        action: RemovePriceListActions.removePriceList,
        noCompensation: true,
    },
};
const handlers = new Map([
    [
        RemovePriceListActions.removePriceList,
        {
            invoke: (0, workflows_sdk_1.pipe)({
                inputAlias: RemovePriceListActions.removePriceList,
                merge: true,
                invoke: {
                    from: RemovePriceListActions.removePriceList,
                },
            }, handlers_1.PriceListHandlers.removePriceLists),
        },
    ],
]);
orchestration_1.WorkflowManager.register(definitions_1.Workflows.DeletePriceLists, workflowSteps, handlers);
exports.removePriceLists = (0, workflows_sdk_1.exportWorkflow)(definitions_1.Workflows.DeletePriceLists, RemovePriceListActions.removePriceList, async (data) => {
    return {
        price_lists: data.price_lists.map((priceListId) => ({
            price_list: { id: priceListId },
        })),
    };
});
//# sourceMappingURL=remove-price-lists.js.map
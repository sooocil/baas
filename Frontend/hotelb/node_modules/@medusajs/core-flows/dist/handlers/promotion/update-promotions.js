"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePromotionsStep = exports.updatePromotionsStepId = void 0;
const modules_sdk_1 = require("@medusajs/modules-sdk");
const utils_1 = require("@medusajs/utils");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
exports.updatePromotionsStepId = "update-promotions";
exports.updatePromotionsStep = (0, workflows_sdk_1.createStep)(exports.updatePromotionsStepId, async (data, { container }) => {
    const promotionModule = container.resolve(modules_sdk_1.ModuleRegistrationName.PROMOTION);
    const { selects, relations } = (0, utils_1.getSelectsAndRelationsFromObjectArray)(data);
    const dataBeforeUpdate = await promotionModule.list({ id: data.map((d) => d.id) }, { relations, select: selects });
    const updatedPromotions = await promotionModule.update(data);
    return new workflows_sdk_1.StepResponse(updatedPromotions, dataBeforeUpdate);
}, async (dataBeforeUpdate, { container }) => {
    if (!dataBeforeUpdate) {
        return;
    }
    const promotionModule = container.resolve(modules_sdk_1.ModuleRegistrationName.PROMOTION);
    // TODO: This still requires some sanitation of data and transformation of
    // shapes for manytomany and oneToMany relations. Create a common util.
    await promotionModule.update(dataBeforeUpdate);
});
//# sourceMappingURL=update-promotions.js.map
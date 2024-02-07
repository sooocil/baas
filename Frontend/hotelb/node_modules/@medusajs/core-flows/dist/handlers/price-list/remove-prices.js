"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePrices = void 0;
const modules_sdk_1 = require("@medusajs/modules-sdk");
async function removePrices({ container, data, }) {
    const { moneyAmountIds } = data;
    const pricingService = container.resolve(modules_sdk_1.ModuleRegistrationName.PRICING);
    await pricingService.deleteMoneyAmounts(moneyAmountIds);
    return {
        deletedPriceIds: moneyAmountIds,
    };
}
exports.removePrices = removePrices;
removePrices.aliases = {
    payload: "payload",
};
//# sourceMappingURL=remove-prices.js.map
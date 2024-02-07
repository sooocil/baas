"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePriceLists = void 0;
const modules_sdk_1 = require("@medusajs/modules-sdk");
async function updatePriceLists({ container, data, }) {
    const { priceLists: priceListsData, priceListPricesMap } = data;
    const pricingService = container.resolve(modules_sdk_1.ModuleRegistrationName.PRICING);
    const priceLists = await pricingService.updatePriceLists(priceListsData);
    const addPriceListPricesData = [];
    const moneyAmountsToUpdate = [];
    for (const [priceListId, prices] of priceListPricesMap.entries()) {
        const moneyAmountsToCreate = [];
        for (const price of prices) {
            if (price.id) {
                moneyAmountsToUpdate.push(price);
            }
            else {
                moneyAmountsToCreate.push(price);
            }
        }
        addPriceListPricesData.push({
            priceListId,
            prices: moneyAmountsToCreate,
        });
    }
    if (addPriceListPricesData.length) {
        await pricingService.addPriceListPrices(addPriceListPricesData);
    }
    if (moneyAmountsToUpdate.length) {
        await pricingService.updateMoneyAmounts(moneyAmountsToUpdate);
    }
    return { priceLists };
}
exports.updatePriceLists = updatePriceLists;
updatePriceLists.aliases = {
    payload: "updatePriceLists",
};
//# sourceMappingURL=update-price-lists.js.map
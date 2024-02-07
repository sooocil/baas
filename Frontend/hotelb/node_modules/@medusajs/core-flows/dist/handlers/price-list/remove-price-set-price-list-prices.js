"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePriceListPriceSetPrices = void 0;
const modules_sdk_1 = require("@medusajs/modules-sdk");
const prepare_create_price_list_1 = require("./prepare-create-price-list");
async function removePriceListPriceSetPrices({ container, data, }) {
    const { priceSetIds, priceListId } = data;
    const pricingService = container.resolve(modules_sdk_1.ModuleRegistrationName.PRICING);
    const priceSetMoneyAmounts = await pricingService.listPriceSetMoneyAmounts({
        price_set_id: priceSetIds,
        price_list_id: [priceListId],
    }, {
        relations: ["money_amount"],
        take: null,
    });
    const moneyAmountIDs = priceSetMoneyAmounts
        .map((priceSetMoneyAmount) => priceSetMoneyAmount.money_amount?.id)
        .filter((moneyAmountId) => !!moneyAmountId);
    await pricingService.deleteMoneyAmounts(moneyAmountIDs);
    return moneyAmountIDs;
}
exports.removePriceListPriceSetPrices = removePriceListPriceSetPrices;
prepare_create_price_list_1.prepareCreatePriceLists.aliases = {
    payload: "payload",
};
//# sourceMappingURL=remove-price-set-price-list-prices.js.map
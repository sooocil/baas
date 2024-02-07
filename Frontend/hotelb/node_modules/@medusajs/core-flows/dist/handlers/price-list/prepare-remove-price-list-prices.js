"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareRemovePriceListPrices = void 0;
const modules_sdk_1 = require("@medusajs/modules-sdk");
async function prepareRemovePriceListPrices({ container, data, }) {
    const pricingService = container.resolve(modules_sdk_1.ModuleRegistrationName.PRICING);
    const { price_list_id: priceListId, money_amount_ids: moneyAmountIdsToDelete, } = data;
    const moneyAmounts = await pricingService.listMoneyAmounts({ id: moneyAmountIdsToDelete }, {
        relations: [
            "price_set_money_amount",
            "price_set_money_amount.price_list",
        ],
        take: null,
    });
    const moneyAmountIds = moneyAmounts
        .filter((moneyAmount) => moneyAmount?.price_set_money_amount?.price_list?.id === priceListId)
        .map((ma) => ma.id);
    return { moneyAmountIds, priceListId };
}
exports.prepareRemovePriceListPrices = prepareRemovePriceListPrices;
prepareRemovePriceListPrices.aliases = {
    payload: "payload",
};
//# sourceMappingURL=prepare-remove-price-list-prices.js.map
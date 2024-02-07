"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePriceLists = void 0;
const modules_sdk_1 = require("@medusajs/modules-sdk");
async function removePriceLists({ container, data, }) {
    const pricingService = container.resolve(modules_sdk_1.ModuleRegistrationName.PRICING);
    await pricingService.deletePriceLists(data.price_lists.map(({ price_list }) => price_list.id));
    return data.price_lists;
}
exports.removePriceLists = removePriceLists;
removePriceLists.aliases = {
    priceLists: "priceLists",
};
//# sourceMappingURL=remove-price-list.js.map
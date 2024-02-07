"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPriceLists = void 0;
const modules_sdk_1 = require("@medusajs/modules-sdk");
async function createPriceLists({ container, data, }) {
    const pricingService = container.resolve(modules_sdk_1.ModuleRegistrationName.PRICING);
    return await Promise.all(data.priceLists.map(async (item) => {
        const [priceList] = await pricingService.createPriceLists([
            item.priceList,
        ]);
        return { tag: item.tag ?? priceList.id, priceList };
    }));
}
exports.createPriceLists = createPriceLists;
createPriceLists.aliases = {
    priceLists: "priceLists",
};
//# sourceMappingURL=create-price-list.js.map
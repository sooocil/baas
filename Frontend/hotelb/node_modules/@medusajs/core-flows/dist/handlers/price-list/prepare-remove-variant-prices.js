"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareRemoveVariantPrices = void 0;
const prepare_create_price_list_1 = require("./prepare-create-price-list");
async function prepareRemoveVariantPrices({ container, data, }) {
    const remoteQuery = container.resolve("remoteQuery");
    const { price_list_id, variant_ids } = data;
    const variables = {
        variant_id: variant_ids,
        take: null,
    };
    const query = {
        product_variant_price_set: {
            __args: variables,
            fields: ["variant_id", "price_set_id"],
        },
    };
    const productsWithVariantPriceSets = await remoteQuery(query);
    const priceSetIds = productsWithVariantPriceSets.map((variantPriceSet) => variantPriceSet.price_set_id);
    return { priceSetIds, priceListId: price_list_id };
}
exports.prepareRemoveVariantPrices = prepareRemoveVariantPrices;
prepare_create_price_list_1.prepareCreatePriceLists.aliases = {
    payload: "payload",
};
const defaultAdminProductRemoteQueryObject = {
    fields: ["id"],
    variants: {
        price: {
            fields: ["variant_id", "price_set_id"],
        },
    },
};
//# sourceMappingURL=prepare-remove-variant-prices.js.map
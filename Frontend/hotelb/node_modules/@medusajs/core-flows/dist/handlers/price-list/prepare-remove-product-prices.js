"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareRemoveProductPrices = void 0;
const prepare_create_price_list_1 = require("./prepare-create-price-list");
async function prepareRemoveProductPrices({ container, data, }) {
    const remoteQuery = container.resolve("remoteQuery");
    const { price_list_id, product_ids } = data;
    const variables = {
        id: product_ids,
        take: null,
    };
    const query = {
        product: {
            __args: variables,
            ...defaultAdminProductRemoteQueryObject,
        },
    };
    const productsWithVariantPriceSets = await remoteQuery(query);
    const priceSetIds = productsWithVariantPriceSets
        .map(({ variants }) => variants.map(({ price }) => price.price_set_id))
        .flat();
    return { priceSetIds, priceListId: price_list_id };
}
exports.prepareRemoveProductPrices = prepareRemoveProductPrices;
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
//# sourceMappingURL=prepare-remove-product-prices.js.map
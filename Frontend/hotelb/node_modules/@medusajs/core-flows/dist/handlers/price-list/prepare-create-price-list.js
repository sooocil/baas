"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareCreatePriceLists = void 0;
const utils_1 = require("@medusajs/utils");
async function prepareCreatePriceLists({ container, data, }) {
    const remoteQuery = container.resolve("remoteQuery");
    const regionService = container.resolve("regionService");
    const { price_lists } = data;
    const variantIds = price_lists
        .map((priceList) => priceList.prices.map((price) => price.variant_id))
        .flat();
    const variables = {
        variant_id: variantIds,
        take: null,
    };
    const query = {
        product_variant_price_set: {
            __args: variables,
            fields: ["variant_id", "price_set_id"],
        },
    };
    const variantPriceSets = await remoteQuery(query);
    const variantIdPriceSetIdMap = new Map(variantPriceSets.map((variantPriceSet) => [
        variantPriceSet.variant_id,
        variantPriceSet.price_set_id,
    ]));
    const variantsWithoutPriceSets = [];
    for (const variantId of variantIds) {
        if (!variantIdPriceSetIdMap.has(variantId)) {
            variantsWithoutPriceSets.push(variantId);
        }
    }
    if (variantsWithoutPriceSets.length) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `No priceSet exist for variants: ${variantsWithoutPriceSets.join(", ")}`);
    }
    const regionIds = price_lists
        .map(({ prices }) => prices?.map((price) => price.region_id) ?? [])
        .flat(2);
    const regions = await regionService.list({ id: regionIds }, {});
    const regionIdCurrencyCodeMap = new Map(regions.map((region) => [
        region.id,
        region.currency_code,
    ]));
    return price_lists.map((priceListDTO) => {
        priceListDTO.title ?? (priceListDTO.title = priceListDTO.name);
        const { _associationTag, name, prices, ...rest } = priceListDTO;
        const priceList = rest;
        priceList.rules ?? (priceList.rules = {});
        priceList.prices =
            prices?.map((price) => {
                const price_set_id = variantIdPriceSetIdMap.get(price.variant_id);
                const rules = {};
                if (price.region_id) {
                    rules.region_id = price.region_id;
                }
                return {
                    currency_code: regionIdCurrencyCodeMap.get(price.region_id) ??
                        price.currency_code,
                    amount: price.amount,
                    min_quantity: price.min_quantity,
                    max_quantity: price.max_quantity,
                    price_set_id,
                    rules,
                };
            }) ?? [];
        return { priceList, tag: _associationTag };
    });
}
exports.prepareCreatePriceLists = prepareCreatePriceLists;
prepareCreatePriceLists.aliases = {
    payload: "payload",
};
//# sourceMappingURL=prepare-create-price-list.js.map
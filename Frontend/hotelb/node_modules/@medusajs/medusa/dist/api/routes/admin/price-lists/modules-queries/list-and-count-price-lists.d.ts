import { FilterablePriceListProps, MedusaContainer } from "@medusajs/types";
import { FindConfig } from "../../../../../types/common";
import { PriceList } from "../../../../../models";
export declare function listAndCountPriceListPricingModule({ filters, listConfig, container, }: {
    container: MedusaContainer;
    filters?: FilterablePriceListProps;
    listConfig?: FindConfig<PriceList>;
}): Promise<[PriceList[], number]>;

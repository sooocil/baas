import { SoftDeletableEntity } from "../interfaces";
export declare class CartSalesChannel extends SoftDeletableEntity {
    id: string;
    cart_id: string;
    sales_channel_id: string;
    /**
     * @apiIgnore
     */
    private beforeInsert;
}

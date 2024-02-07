import { WorkflowArguments } from "@medusajs/workflows-sdk";
type HandlerInputData = {
    cart: {
        id: string;
    };
    sales_channel: {
        sales_channel_id: string;
    };
};
declare enum Aliases {
    Cart = "cart",
    SalesChannel = "sales_channel"
}
export declare function detachCartFromSalesChannel({ container, data, }: WorkflowArguments<HandlerInputData>): Promise<void>;
export declare namespace detachCartFromSalesChannel {
    var aliases: typeof Aliases;
}
export {};

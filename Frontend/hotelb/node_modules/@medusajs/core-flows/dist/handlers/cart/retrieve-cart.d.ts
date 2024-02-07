import { legacy_CartDTO } from "@medusajs/types";
import { WorkflowArguments } from "@medusajs/workflows-sdk";
type HandlerInputData = {
    cart: {
        id: string;
    };
    config: {
        retrieveConfig: {
            select: string[];
            relations: string[];
        };
    };
};
declare enum Aliases {
    Cart = "cart",
    Config = "config"
}
export declare function retrieveCart({ container, context, data, }: WorkflowArguments<HandlerInputData>): Promise<legacy_CartDTO>;
export declare namespace retrieveCart {
    var aliases: typeof Aliases;
}
export {};

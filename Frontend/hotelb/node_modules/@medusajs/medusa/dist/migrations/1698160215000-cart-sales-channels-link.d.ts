import { MigrationInterface, QueryRunner } from "typeorm";
export declare const featureFlag: string[];
export declare class CartSalesChannelsLink1698160215000 implements MigrationInterface {
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}

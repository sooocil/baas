"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminPromotionRoutesMiddlewares = void 0;
var utils_1 = require("@medusajs/utils");
var middlewares_1 = require("../../../api/middlewares");
var QueryConfig = __importStar(require("./query-config"));
var validators_1 = require("./validators");
exports.adminPromotionRoutesMiddlewares = [
    {
        matcher: "/admin/promotions*",
        middlewares: [(0, middlewares_1.isFeatureFlagEnabled)(utils_1.MedusaV2Flag.key)],
    },
    {
        method: ["GET"],
        matcher: "/admin/promotions",
        middlewares: [
            (0, middlewares_1.transformQuery)(validators_1.AdminGetPromotionsParams, QueryConfig.listTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/promotions",
        middlewares: [(0, middlewares_1.transformBody)(validators_1.AdminPostPromotionsReq)],
    },
    {
        method: ["GET"],
        matcher: "/admin/promotions/:id",
        middlewares: [
            (0, middlewares_1.transformQuery)(validators_1.AdminGetPromotionsPromotionParams, QueryConfig.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/promotions/:id",
        middlewares: [(0, middlewares_1.transformBody)(validators_1.AdminPostPromotionsPromotionReq)],
    },
];
//# sourceMappingURL=middlewares.js.map
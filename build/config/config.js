"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
require("dotenv").config();
const dbConfig = {
    PORT: process.env.PORT,
    MONGODB_URL: process.env.MONGODB_URL,
    REDIS_URL: process.env.REDIS_URL
};
exports.dbConfig = dbConfig;
//# sourceMappingURL=config.js.map
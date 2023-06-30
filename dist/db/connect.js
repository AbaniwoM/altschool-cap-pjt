"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDb = void 0;
const mongoose = require("mongoose");
const { dbConfig } = require("../config/config");
function connectToDb() {
    mongoose.set("strictQuery", false);
    mongoose.connect(dbConfig.MONGODB_URL);
    mongoose.connection.on("connected", () => {
        console.log("Mongodb connected successfully!");
    });
    mongoose.connection.on("error", (err) => {
        console.log(err);
    });
}
exports.connectToDb = connectToDb;
//# sourceMappingURL=connect.js.map
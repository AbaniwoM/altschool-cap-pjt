const mongoose = require("mongoose");
import { dbConfig } from "../config/config";

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

export {
    connectToDb
}
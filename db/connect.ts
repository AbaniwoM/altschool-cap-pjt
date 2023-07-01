const mongoose = require("mongoose");
const { dbConfig } = require("../config/config");

async function connectToDb() {
    mongoose.set("strictQuery", false);
    try {
    await mongoose.connect(dbConfig.MONGODB_URL).then(() => {
       console.log("Mongodb connected successfully!");
   
    })} catch(error) {
       console.log(error)
    }
}

export {
    connectToDb
}
const mongoose = require("mongoose");
const { dbConfig } = require("../config/config");

async function connectToDb( app ) {
    // mongoose.set("strictQuery", false);
    try {
    await mongoose.connect(dbConfig.MONGODB_URL).then(() => {
       console.log("Mongodb connected successfully!");
       app.listen(dbConfig.PORT, () => {
        console.log(`Server started on http://localhost:${dbConfig.PORT}`);
       });
    })} catch(error) {
       console.log(error)
    }
}

export {
    connectToDb
}
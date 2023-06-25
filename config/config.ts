require("dotenv").config();

const dbConfig = {
    PORT: process.env.PORT,  
    MONGODB_URL: process.env.MONGODB_URL,
    REDIS_URL: process.env.REDIS_URL
}

export {
    dbConfig
}
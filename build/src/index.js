"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// const CONFIG = require("./config/config.ts");
// const connectToDb = require("./db/mongodb");
const { connectToDb } = require("../db/connect");
const { dbConfig } = require("../config/config");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const ShortUrl = require("../models/shortUrl");
// import * as redis from 'redis';
const { Redis } = require("ioredis");
const app = express();
//Redis
const url = dbConfig.REDIS_URL || 'redis://localhost:6379';
const redisClient = new Redis(url);
// Check if the Redis client is connected
// console.log(redisClient);
redisClient.on('ready', () => {
    console.log('Redis client connected');
});
// Check if there was an error connecting to Redis
redisClient.on('error', (err) => {
    console.error('Error connecting to Redis:', err);
});
// Close the Redis connection
process.on('SIGINT', () => {
    redisClient.quit();
    process.exit();
});
//Connect to MongoDB Database
connectToDb();
// Setting the view engine
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.get("/", async (req, res) => {
    const shortUrls = await ShortUrl.find();
    res.render("index", { shortUrls: shortUrls });
    // const cachedValue = await redisClient.get(shortUrls)
    // if (cachedValue) {
    //   console.log('cached value got returned')
    //   return new Response(cachedValue)
    // } else {
    //   return new Response('Error');
    // }
});
app.post('/shortUrls', async (req, res) => {
    await ShortUrl.create({ full: req.body.fullUrl });
    res.redirect('/');
});
//Rate Limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
// Apply the rate limiting middleware to all requests
app.use(limiter);
// Security middleware
app.use(helmet());
app.get('/:shortUrl', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
    if (shortUrl == null)
        return res.sendStatus(404);
    shortUrl.clicks++;
    shortUrl.save();
    res.redirect(shortUrl.full);
});
app.listen(dbConfig.PORT, () => {
    console.log(`Server started on http://localhost:${dbConfig.PORT}`);
});
//# sourceMappingURL=index.js.map
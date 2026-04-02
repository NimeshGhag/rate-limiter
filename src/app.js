const express = require("express");

const limiter = require("./middlewares/limiter.middleware");

const authRoutes = require("./routes/auth.route");

const app = express();

app.use(express.json());

app.use(limiter); // Apply the rate limiter to all routes

app.use("/api/auth", limiter, authRoutes); // Apply the rate limiter to the auth routes

module.exports = app;

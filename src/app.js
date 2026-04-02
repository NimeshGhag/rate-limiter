const express = require("express");

const limiter = require("./middlewares/limiter.middleware");

const authRoutes = require("./routes/auth.route");

const app = express();

app.use(express.json());

app.use(limiter);

app.use("/api/auth", limiter, authRoutes);

module.exports = app;

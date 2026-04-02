const express = require("express");

const limiter = require("../middlewares/limiter.middleware");


const router = express.Router();

router.get("/register", limiter, (req, res) => {
    res.send("Register route");
});

module.exports = router;

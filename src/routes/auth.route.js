const express = require("express");

const limiter = require("../middlewares/limiter.middleware");


const router = express.Router();

// Apply the rate limiter to this specific route
router.get("/register", limiter, (req, res) => { 
    res.send("Register route");
});

module.exports = router;

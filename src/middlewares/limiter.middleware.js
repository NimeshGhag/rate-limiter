const { rateLimit } = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 1 * 6 * 1000,
  max: 5,
  message: "Too many request, Try again after some time",
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = limiter;
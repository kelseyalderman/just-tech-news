// This file collects the API endpoints and gives them their prefixed name

const router = require("express").Router();

// prefixes routes in user-routes.js with the path /users
const userRoutes = require("./user-routes.js");

router.use("/users", userRoutes);

module.exports = router;

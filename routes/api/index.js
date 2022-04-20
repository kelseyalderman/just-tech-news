// This file collects the API endpoints and gives them their prefixed name

const router = require("express").Router();

// prefixes routes in user-routes.js with the path /users and routes in post-routes.js with the path /posts
const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);

module.exports = router;

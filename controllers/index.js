// Collects the packaged group of API endpoints and prefixes them with the path /api

const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);

// If we make a request to any endpoint that doesn't exist, we'll receive a 404 error indicating we have requested an incorrect resource
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;

// When we import the routes to server.js, they'll be packaged and ready to go, rather than importing multiple files for different endpoints

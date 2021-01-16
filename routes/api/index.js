const router = require("express").Router();
const healthRoutes = require("./health");

// Book routes
router.use("/health", healthRoutes);

module.exports = router;

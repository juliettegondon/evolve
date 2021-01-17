const router = require("express").Router();
const healthRoutes = require("./health");
const exerciseRoutes = require("./exercise");


// Book routes
router.use("/health", healthRoutes);
router.use("/exercise", exerciseRoutes);

module.exports = router;

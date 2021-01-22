const router = require("express").Router();
const healthRoutes = require("./health");
const exerciseRoutes = require("./exercise");
const userRoutes = require("./user");
const mindRoutes = require("./mind");


// Book routes
router.use("/health", healthRoutes);
router.use("/exercise", exerciseRoutes);
router.use("/user", userRoutes);
router.use("/mind", mindRoutes);

// app.use("/users", require("./routes/user/userRouter"));

module.exports = router;

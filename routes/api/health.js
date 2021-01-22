const router = require("express").Router();
const healthController = require("../../controllers/healthController");

// Matches with "/api/health"
router.route("/")
  .get(healthController.findAll)
  .post(healthController.create);

// Matches with "/api/health/:id"
router
  .route("/:yearWeek")
  .get(healthController.findByYearWeek)
  .put(healthController.update)
  .patch(healthController.update)
  .delete(healthController.remove);

module.exports = router;

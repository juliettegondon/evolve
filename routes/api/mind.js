const router = require("express").Router();
const mindController = require("../../controllers/healthController");

// Matches with "/api/health"
router.route("/")
  .get(mindController.findAll)
  .post(mindController.create);

// Matches with "/api/health/:id"
router
  .route("/:yearWeek")
  .get(mindController.findByYearWeek)
  .put(mindController.update)
  .delete(mindController.remove);

module.exports = router;

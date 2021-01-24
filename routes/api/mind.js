const router = require("express").Router();
const mindController = require("../../controllers/mindController");

// Matches with "/api/mind"
router.route("/")
  .get(mindController.findAll)
  .post(mindController.create);

// Matches with "/api/mind/:id"
router
  .route("/mind/:email/")
  .get(mindController.findByEmail)
  .put(mindController.update)
  .delete(mindController.remove);

module.exports = router;

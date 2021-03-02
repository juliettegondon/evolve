const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .post(userController.create);


  // alert('Elmer Fudd')


// Matches with "/api/user/:id"
router
  .route("/:email")
  .get(userController.findByEmail)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
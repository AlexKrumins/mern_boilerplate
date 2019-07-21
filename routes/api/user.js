const router = require("express").Router();
const userController = require("../../controllers/userController");
// var passport = require("../../config/passport");

// Matches with "/api/user/signup"
router.route("/signup")
  .post(userController.create);

router.route("/logout")
  .get(userController.logout)


module.exports = router;

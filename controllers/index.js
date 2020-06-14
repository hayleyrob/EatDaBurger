//bring in express router
const router = require("express").Router();

//routes for burgers
router.use("/api", require("./burgers_controller.js"));
//routes for views
router.use(require("./viewRoutes.js"));

//export out routes
module.exports = router;

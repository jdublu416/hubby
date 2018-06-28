const router = require("express").Router();
const apiRoutes = require("./user");

// Book routes
router.use("/user", apiRoutes);

module.exports = router;

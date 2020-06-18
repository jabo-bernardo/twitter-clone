const { Router } = require("express");
const router = new Router();

/* Routes */
// Homepage
router.get("/", (req, res) => {
    res.render("main/index");
});

module.exports = router;
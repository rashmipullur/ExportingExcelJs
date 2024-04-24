const express = require("express");
const exportUser = require('../controller/user.controller')

const router = express.Router();


/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get('/downloadExcel', exportUser)

module.exports = router;

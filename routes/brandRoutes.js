const express = require("express")
const router = express.Router()
const getAllBrands = require("../controllers/BrandController");

router.route("/").get(getAllBrands)

module.exports = router
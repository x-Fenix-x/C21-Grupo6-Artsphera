const express = require("express");
const indexController = require("../controllers/indexController");
const router = express.Router();

/* Index */
router.get("/", indexController.index);
router.get("/carrito", indexController.carrito);

module.exports = router;

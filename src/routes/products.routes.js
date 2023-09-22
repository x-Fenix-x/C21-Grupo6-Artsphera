const express = require("express");
const { detail,	add, create, edit, update, products, remove, search } = require("../controllers/productsController");

const router = express.Router();
const upload = require("../middlewares/upload");
const productAddValidator = require('../validations/productAddValidator');

/* Productos */
router
	.get("/", products)
	.get("/category/:category", products)
	.get("/search", search)
	.get("/detail/:id", detail)
	.get("/add", add)
	.post("/add", upload.array("images"), productAddValidator, create)
	.get("/edit/:id", edit)
	.put("/update/:id", upload.array("images"), update)
	.delete("/delete/:id", remove);

module.exports = router;

const express = require("express");
const {
	detail,
	add,
	create,
	edit,
	update,
	products,
	remove,
} = require("../controllers/productsController");

const router = express.Router();
const upload = require("../middlewares/upload")

/* Productos */
router
	.get("/", products)
	.get("/detail/:id", detail)
	.get("/add", add)
	.post("/add",upload.array("images"), create)
	.get("/edit/:id", edit)
	.put("/update/:id", update, upload.array("images"))
	.delete("/delete/:id", remove);

module.exports = router;

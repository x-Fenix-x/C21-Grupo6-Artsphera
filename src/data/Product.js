const { v4: uuidv4 } = require("uuid");

const Product = function ({title, category, price, discount, stock, image, description}) {
    this.id = uuidv4();
    this.title = title.trim();
    this.category = category;
    this.price = +price;
    this.discount = +discount;
    this.stock = +stock;
    this.image = image;
    this.description = description.trim();
}

module.exports = Product;
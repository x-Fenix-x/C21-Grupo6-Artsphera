const { v4: uuidv4 } = require("uuid");

const Product = function ({title, category, price, discount, stock, images, description, section}) {
    this.id = uuidv4();
    this.title = title.trim();
    this.category = category;
    this.price = +price;
    this.discount = +discount;
    this.stock = +stock;
    this.images = images;
    this.section = section;
    this.description = description.trim();
}

module.exports = Product;
let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let ProductSchema = new Schema({
  product_name: String,
  product_price: Number,
});
const ProductModel = mongoose.model("ProductList", ProductSchema);
module.exports = ProductModel;

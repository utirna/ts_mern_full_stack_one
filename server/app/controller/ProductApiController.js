const ProductModel = require("../model/ProductModel");

var ProductApiController = {
  home: function (req, res) {
    res.status(200).send({ status: true });
  },
  addNewProduct: async function (req, res) {
    var data = req.body;
    let product = new ProductModel({
      product_name: data.product_name,
      product_price: data.product_price,
    });
    try {
      let result = await product.save();
      res
        .status(200)
        .send({ status: 1, message: "product saved successfully", result });
    } catch (error) {
      res.status(501).send({ status: 0, error });
    }
  },
  getProductList: async function (req, res) {
    try {
      let result = await ProductModel.find({}, { __v: 0 });
      res.status(200).send({ status: 1, list: result });
    } catch (error) {
      res.status(501).send({ status: 0, error });
    }
  },
  removeProduct: async function (req, res) {
    var id = req.body.id;
    try {
      let { deletedCount } = await ProductModel.deleteOne({ _id: id });
      res.status(200).send({ status: 1, result: deletedCount });
    } catch (error) {
      res.status(501).send({ status: 0, error });
    }
  },
};

module.exports = ProductApiController;

let router = require("express").Router();
let ProductApiController = require("../controller/ProductApiController");

/* get apis*/
router.get("/", ProductApiController.home);
router.get("/product-list", ProductApiController.getProductList);

/* post apis*/
router.post("/add-new-product", ProductApiController.addNewProduct);
/* delete apis*/
router.delete("/remove-product", ProductApiController.removeProduct);
/* put apis*/
/* patch apis*/

module.exports = router;

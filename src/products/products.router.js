const router = require("express").Router();

const productServices = require("./products.services");

//? Routes

router
  .route("/")
  .get(productServices.getAllProducts)
  .post(productServices.createProduct);

router
  .route("/:id")
  .get(productServices.getProductById)
  .patch(productServices.patchProduct)
  .delete(productServices.deleteProduct);

module.exports = router;

const express=require("express");
const productController=require("../controller/products.controller");
const router=express.Router();

router.route("/").get(productController.getAllProducts).post(productController.addProduct);
router.route("/:id").get(productController.getProductById).delete(productController.deleteProductById)
.patch(productController.updateProduct);
module.exports=router


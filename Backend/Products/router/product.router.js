let express = require('express');
let router = express.Router(); //router reference
let ProductController = require("../controller/product.controller.js");
//http://localhost:9090/api/product/viewProducts
router.get("/viewProducts",ProductController.getProductDetails);
router.get("/selectProduct/:pid",ProductController.getProductById);
//http://localhost:9090/api/product/storeProductDetails
router.post("/storeProductDetails",ProductController.storeProdectDetails);
router.delete("/deleteProductById/:pid",ProductController.deleteProdectById);
router.put("/updateProductById",ProductController.updateProdectDetails);




router.post("/addProduct", productController.addProduct);
router.delete("/deleteProduct", productController.deleteProduct);
router.put("/updateProduct",productController.updateProduct);
router.get("/getAllProducts",productController.getAll);


module.exports = router;
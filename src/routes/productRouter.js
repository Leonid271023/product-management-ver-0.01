import { Router } from "express";
import * as controller from "../controller/productController.js";

const router = Router();

router.post("/products", controller.addProduct);

router.get("/products/category", controller.getProductsByCategory);
router.get("/products/min-price", controller.getProductsByMinPrice);
router.get("/products/max-price", controller.getProductsByMaxPrice);

router.get("/products/:id", controller.getProductById);
router.patch("/products/:id", controller.updateProduct);
router.delete("/products/:id", controller.deleteProduct);

export default router;
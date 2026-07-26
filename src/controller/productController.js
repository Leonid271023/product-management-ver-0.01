import * as service from "../service/productService.js";
import { productSchema } from "../validation/productValidation.js";
import { productUpdateValidation } from "../validation/productUpdateValidation.js";

export const addProduct = async (req, res) => {
    try {
        const { error, value } = productSchema.validate(req.body);

        if (error) {
            return res.status(400).send({
                message: error.message,
            })
        }

        const createdProduct = await service.addProduct(value);

        return res.status(201).json(createdProduct);

    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
};

export const getProductById = async (req, res) => {
    try {
        const id = req.params.id;

        const product = await service.getProductById(id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        return res.status(200).json(product);

    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;

        const deletedProduct = await service.deleteProductById(id);

        if (!deletedProduct) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        return res.status(200).json(deletedProduct);

    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { error, value } = productUpdateValidation.validate(req.body);
        if (error) {
            return res.status(400).send({
                message: error.message,
            })
        }
        const id = req.params.id;
        const updatedProduct = await service.updateProduct(id,value);
        if (!updatedProduct) {
            return res.status(404).json({
                message: "Product not found"
            });
        }
        return res.status(200).json(updatedProduct);
    }catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}

export const getProductsByCategory= async (req, res) => {
    try {
        const category = req.query.category;
        const product = await service.getProductsByCategory(category);
        return res.status(200).json(product);

    }catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}

export const getProductsByMinPrice = async (req, res) => {
    try {
        const price = Number(req.query.price);
        if (isNaN(price)) {
            return res.status(400).json({
                message: "Price must be a number"
            });
        }
        const product = await service.getProductsByMinPrice(price);

        return res.status(200).json(product);

    }catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}
export const getProductsByMaxPrice = async (req, res) => {
    try {
        const price = Number(req.query.price);
        if (isNaN(price)) {
            return res.status(400).json({
                message: "Price must be a number"
            });
        }
        const product = await service.getProductsByMaxPrice(price);
        return res.status(200).json(product);

    }catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}
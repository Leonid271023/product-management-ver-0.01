import * as service from "../service/productService.js";

export const addProduct = async (req, res) => {
    const { error, value } = productSchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        });
    }

    // עכשיו קוראים ל-Service

};

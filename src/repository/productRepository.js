import Product from "../model/product.js";

export function createProduct(product) {
    return Product.create(product);
}

export  function  findProductById(id){
    return Product.findById(id);
}

export function deleteProductById(id){
    return Product.findByIdAndDelete(id);
}

export function updateProduct(id, data){
    return Product.findByIdAndUpdate(id,data,{new:true});
}

export function findAllProductByCategory(category){
    return Product.find({category});
}

export function findAllProductByGreaterThanOrEqualPrice(price){
    return Product.find({
        price: {
            $gte: price
        }
    });
}
export function findAllProductByLessThanOrEqualPrice(price){
    return Product.find({
        price: {
            $gte: price
        }
    });
}




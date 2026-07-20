import * as repo from "../repository/productRepository";

export async function addProduct(product){
    const findById= await repo.findProductById(product.id);
    if (findById!==null){
        throw new Error('Product with this id already exists');
    }
    return repo.createProduct(product);

}

export async function  getProductById(id){
    const findById= await repo.findProductById(id);
    if (findById===null){
        throw new Error('Product with this id not found');
    }
    return findById;
}

export async function deleteProductById(id){
    const findById= await repo.findProductById(id);
    if (findById===null){
        throw new Error('Product with this id not found');
    }
    return repo.deleteProductById(id);
}

export async function updateProduct(id, data){
    const findById= await repo.findProductById(id);
    if(findById===null){
        throw new Error('Product with this id not found');
    }
    return repo.updateProduct(id, data);
}

export async function  getProductsByCategory(category){
    return repo.findAllProductByCategory(category);
}

export async function  getProductsByMinPrice(price){
    return repo.findAllProductByGreaterThanOrEqualPrice(price);
}

export async function  getProductsByMaxPrice(price){
    return repo.findAllProductByLessThanOrEqualPrice(price);
}


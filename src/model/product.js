import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    _id:{type:Number, required:true},
    name:{type:String, required:true},
    price:{type:Number, required:true},
    category:{type:String, required:true},
    quantity:{type:Number,default: 0}
},{
    versionKey: false,
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
        }
    }});
const Product= mongoose.model('Product', productSchema, 'products');
export default Product;
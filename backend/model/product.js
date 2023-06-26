import mongoose from "mongoose";



const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"Place enter product name"]
    },
    description:{
        type: String,
        required: [true,"Place enter product description"]
    },
    price:{
        type: Number,
        required: [true,"Place enter product price"]
    },
    images:[
        {
            public_id:{
                type:String,
            },
            url:{
                type:String,
            }

            
        }
    ],
    category: {
        type: String,
        required: [true,"Place enter product category"],
        enum:{
            values:[
                "Headphones",
                "Electronics",
                "Sport",
                "Laptops"
            ],
            message: "Place select correct category"
        }
    },
    seller: {
        type:String,
        required: [true,"Place enter product seller"],
    },
    stock: {
        type:Number,
        required: [true,"Place enter product seller"],
    },
    ratings: {
        type:Number,
        default: 0
    },
    reviews: [
        {
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now,
            }
        }
    ],

    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export default mongoose.models.Product || mongoose.model("Product",ProductSchema);
const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name can not be empty!!"]
    },
    price: {
        type: String,
        required: [true, "Price can not be empty!!"]
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.9
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        ecum: {
            values: ["apples", "samsung", "dell", "mi"],
            message: `{VALUE} is not supported`,
        }
    },

})

module.exports = mongoose.model('Product', productSchema)
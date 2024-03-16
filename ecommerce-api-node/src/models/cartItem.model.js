const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cart',
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
        default: 1,
    },
    price: {
        type: String,
        required: true,
    },
    discountedPrice: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
});

const CartItem = mongoose.model('cartItems', cartItemSchema);

module.exports = CartItem;
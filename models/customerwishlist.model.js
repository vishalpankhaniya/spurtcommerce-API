var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerwishlist = new Schema({

    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    is_active: {
        type: String
    },
    created_date: {
        type: Date,
        Default: Date.now()
    },
    modified_date: {
        type: Date,
        Default: Date.now()
    },
    created_by: {
        type: String,
        Default: null
    },
    modified_by: {
        type: String,
        Default: null
    }
});
module.exports = mongoose.model('customerwishlist', customerwishlist, 'customer_wishlist'); 
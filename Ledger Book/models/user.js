const mongoose = require ('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ledgerbook');

const userShema = mongoose.Schema({
    invoice: String,
    item: String,
    qty: Number,
    rate: Number,
    total: Number
});

module.exports = mongoose.model('user', userShema);
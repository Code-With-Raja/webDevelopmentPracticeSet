const mongoose = require ('mongoose')

mongoose.connect (`mongodb://127.0.0.1:27017/Deed`);


const userSchema = mongoose.Schema({

    date: String,
    name: String,
    address: String,
    debit: String,
    credit: String,
    select: String

});


module.exports = mongoose.model('user', userSchema);

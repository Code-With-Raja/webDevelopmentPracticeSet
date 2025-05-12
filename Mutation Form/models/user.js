const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/mutationform')


const userSchema = mongoose.Schema({

    name: String,
    Gname: String,
    address: String,
    mode: String,
    deedNo: String,
    raiyat: String

})




module.exports = mongoose.model('user', userSchema);

 
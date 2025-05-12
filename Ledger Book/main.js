const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();
const path = require ('path');
const userModel = require ('./models/user')

app.set ('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req,res)=>{
    res.render('index');
});
app.get('/index1', async (req,res)=>{
    let users = await userModel.find();
    res.render('index1', {users});
});



app.post ("/create", async (req,res)=>{
    let {invoice,item,qty,rate,total} = req.body;
    let createUser = await userModel.create ({
        invoice,
        item,
        qty,
        rate,
        total
    });
   

    res.redirect('/index1')

})



app.listen(3000);
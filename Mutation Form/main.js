const express = require ("express");
const app = express();
const path = require ("path");
const userModel = require('./models/user');



 
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req,res)=>{

    res.render('index');



})
app.get('/form', async (req,res)=>{

    let users = await userModel.find();
    res.render('form', {users});
    res.redirect("/detailsOfTransfer")



})
app.get('/detailsOfTransfer', async (req,res)=>{
    let users = await userModel.find();

    res.render('DetailsOfTransfer', {users});



})

app.get('/LandSchedule', (req,res)=>{

    res.render('LandSchedule');



})
app.get('/ParticularsOfTransferer', (req,res)=>{ 

    res.render('ParticularsOfTransferer');



})

app.post('/create', async (req,res)=>{

    let {name, Gname,address, mode, deedNo, raiyat} = req.body;

    let createUser = await userModel.create({
        name,
        Gname,
        address,
        mode,
        deedNo,
        raiyat
    });
 
    res.redirect("/form");
 

})











app.listen(3020);
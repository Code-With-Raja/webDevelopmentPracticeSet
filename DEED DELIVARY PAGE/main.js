const express = require('express');
const path = require('path');
const app = express();
const userModel = require('./models/user');




app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('index')
});

app.get('/index1', async (req, res) => {
    let users = await userModel.find();
    res.render('index1', { users });
});

app.get('/edit/:userid', async (req, res) => {
    let user = await userModel.findOne({ _id: req.params.userid });
    res.render('edit', {user});
});

app.get('/delete/:id', async (req, res) => {
    let users = await userModel.findOneAndDelete({ _id: req.params.id });
    res.redirect("/index1");
});
app.post('/update/:userid', async (req, res) => {
    let { date, name, address, debit, credit, select } = req.body;
    let user = await userModel.findOneAndUpdate({ _id: req.params.userid }, { date, name, address, debit, credit, select }, { new: true });
    res.redirect("/index1"); 
})

app.post('/create', async (req, res) => {
    let { date, name, address, debit, credit, select } = req.body;
    let createUser = await userModel.create({
        date,
        name,
        address,
        debit,
        credit,
        select
    });
    res.redirect('/index1')
})









app.listen(3000);
const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/form-db', { useNewUrlParser: true, useUnifiedTopology: true });

// Mongoose
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected');
});
const formSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    age: Number,
    gender: String,
    address: String,
    more: String
})
const formData = mongoose.model('formData', formSchema)

// log req url
app.use((req, res, next) => {
    console.log(req.url);
    next();
})

// serve static files
app.use('/static', express.static(path.join(__dirname, '/public')))

// form data
app.use(express.urlencoded({ extended: false }))

//set pug
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'))

//end points
app.get('/form', (req, res) => {
    res.status(200).render('form.pug', { title: 'Gym Membership' })
})

app.get('/form/data', (req, res) => {
    formData.find().then((formData) => {
        res.status(200).json(formData)
    }).catch((error) => {
        res.status(400).json({status: error})
    })
})

app.get('*', (req, res) => {
    res.status(200).render('error.pug', { title: 'Gym Membership' })
})

app.post('/backend', (req, res) => {
    const form = new formData(req.body)
    form.save().then(() => {
        res.status(200).json({success: true, comment: 'form submit successful', data: req.body})
    }).catch((error) => {
        res.status(400).json({success: false, comment: ['form submit failed', error], data: req.body})
    })
})


app.listen(port = 3000, hostname = '127.0.0.1', () => {
    console.log(`Server is listening at port: http://${hostname}:${port}`);
})
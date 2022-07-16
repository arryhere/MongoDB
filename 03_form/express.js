const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

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

app.get('*', (req, res) => {
    res.status(200).render('error.pug', { title: 'Gym Membership' })
})

app.post('/backend', (req, res) => {
    const { name, age, gender, address, more } = req.body
    console.log(name, age, gender, address, more);
    res.status(200).send('form submitted successfully')
})


app.listen(port = 3000, hostname = '127.0.0.1', () => {
    console.log(`Server is listening at port: http://${hostname}:${port}`);
})
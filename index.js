const express = require('express')

const app = express()
const port = 3004

//

app.listen(port, () =>{
    console.log(`server runs on port ${port}`)
})

app.get('/', (req,res) => {
    res.send(`<h1>Build about 10 routes...</h1>`)
})

app.get('/1', (req,res) => {
    res.send(`<h1>A</h1>`)
})

app.get('/2', (req,res) => {
    res.send(`<h1>B</h1>`)
})

app.get('/3', (req,res) => {
    res.send(`<h1>C</h1>`)
})

app.get('/4', (req,res) => {
    res.send(`<h1>D</h1>`)
})

app.get('/5', (req,res) => {
    res.send(`<h1>E</h1>`)
})

app.get('/6', (req,res) => {
    res.send(`<h1>F</h1>`)
})

app.get('/7', (req,res) => {
    res.send(`<h1>G</h1>`)
})

app.get('/8', (req,res) => {
    res.send(`<h1>H</h1>`)
})

app.get('/9', (req,res) => {
    res.send(`<h1>I</h1>`)
})

app.get('/10', (req,res) => {
    res.send(`<h1>J</h1>`)
})

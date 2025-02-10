require('dotenv').config()
const express = require('express') // import the express 
const app = express()
// restart localhost - necessary after updation of code 

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.get('/twitter', (req,res)=>{
    res.send('Akhildotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai aur code </h2>")
    // req.send("Hello")
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${process.env.PORT}`);
})
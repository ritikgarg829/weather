const express = require('express');
const path = require('path');
const app = express();
const port = 3000

// ------------------------------public static path-------------------------------------------------

const static_path=path.join(__dirname, "../public");

app.set('view engine' , 'hbs');
app.use(express.static(static_path));

// ------------------------------routing------------------------------------------------------------
app.get("",(req,res)=>{
    res.render('index')
})


app.get("/about.html",(req,res)=>{
    res.render('about')
})
app.get("/weather.html",(req,res)=>{
    res.render('weather')
})

app.get("*",(req,res)=>{
    res.render('error')
})

app.listen(port, () =>{
    console.log('your server is started at port no.3000')
})
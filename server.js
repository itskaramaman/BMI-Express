const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render("bmi");
})

app.post('/', (req, res)=>{
    let age = Number(req.body.age);
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    const result = ((weight / (height * height)) * 10000).toFixed(1);
    res.render("bmi", {result, age, weight, height});
})

app.listen(3000, ()=>console.log("Server running on 3000"));

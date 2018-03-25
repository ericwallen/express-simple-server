var express = require('express')
var app = express()
var port = 8080

yoda = {
    name: "yoda",
    forcePoints: 1200,
}

obiOne = {
    name: "Obi one",
    forcePoints: 1400,
}


app.get('/yoda', function(req, res){
    res.json(yoda)
})


app.get('/obi', function(req, res){
    res.json(obi)
})


app.get('/home', function(req, res){
    res.send("/public/index.html")
})

app.get('/:characters', function(req, res){
  console.log(req.params.characters);
})

app.use(express.static('public'))

app.listen(port)

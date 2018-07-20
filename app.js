var express = require('express')
var app = express()
var router = require('./router.js')
var bodyParser = require('body-parser')

app.use(router)
app.engine('html',require('express-art-template'))
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))
//parse application/json
app.use(bodyParser.json())
app.use('/static',express.static('./statics'))
app.use('/public',express.static('./public'))


app.listen(3000,function(){
	console.log('server ON')
})
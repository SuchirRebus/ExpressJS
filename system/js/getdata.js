var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var fs = require('fs')
router.get('/getdata', (req,res) => {
    res.sendFile(__dirname + '/html/getdata.html')
})



router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true}))


router.post('/getdata', (req,res) => {
    // how to give the destination to a file which we have to create 
    fs.readFile(req.body.fname+'.txt', (err, data) => {
        if(err) throw err;
        x=data.toString()
        res.send(x + "<hr> <button><a href='/'>Home</a></button>")
        console.log("File readed")
    } )
    
})

module.exports=router
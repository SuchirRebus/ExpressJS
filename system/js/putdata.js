var express = require('express')
var router = express.Router()
const bodyParser= require('body-parser')
const fs = require('fs')

router.get('/putdata', (req,res) => {
    res.sendFile(__dirname + '/html/putdata.html')
})



router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true}))


router.post('/putdata', (req,res) => {
    // how to give the destination to a file which we have to create 
    fs.appendFile(req.body.fname+'.txt', req.body.data,(err) => {
        if(err) throw err;
        res.send(req.body.fname +'<br>' + req.body.data + "<hr> <button><a href='/'>Home</a></button>")
        console.log("File readed")
    } )
    
})

router.get('/puttry', (req,res) => {
    res.sendFile(__dirname + '/html/puttry.html')
})

router.put('/puttry', (req,res) => {
    // how to give the destination to a file which we have to create 
    // fs.appendFile(req.body.fname+'.txt', req.body.data,(err) => {
    //     if(err) throw err;
    //     res.send(req.body.fname +'<br>' + req.body.data + "<hr> <button><a href='/'>Home</a></button>")
    //     console.log("File readed")
    // } )
    console.log("put try page")
    
})


module.exports=router
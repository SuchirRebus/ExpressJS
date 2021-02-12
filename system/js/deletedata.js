var express = require('express')
var router = express.Router()
const bodyParser= require('body-parser')
const fs = require('fs')
const { throws } = require('assert')


var names=[]
var temp=""
router.get('/deletedata', (req,res) => {
    res.sendFile(__dirname + '/html/deletedata.html')
    readData()
})



router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true}))



readData= () =>{
    fs.readFile('names.txt', (err, dat) => {
        if(err) throw err;
        temp=dat.toString()
        console.log('temp: '+temp+"\ndata: "+dat)
        names=temp.split(',')
        console.log("names in block: " + names)
    })
    
    //console.log('names: '+ names)
}

writeData = (name)=>{
    console.log("names in writedata: "+ names)
    index=names.indexOf(name)
        if(index>-1)
            names.splice(index,1)

    fs.writeFile('names.txt', names.toString(), (err) => {
        if(err) throw err;
        console.log(names)
       

    })
    
    if(index>-1)
        return true
}
router.post('/deletedata', (req,res) => {
    // how to give the destination to a file which we have to create 
    //x=false
    x=writeData(req.body.fname)
    if(x){
        fs.unlink(req.body.fname+'.txt', (err) => {
            if(err) throw err;
            //res.send("file Deleted" + "<hr> <button><a href='/'>Home</a></button>")
            console.log("File readed")
            res.send("file Deleted" + "<hr> <button><a href='/'>Home</a></button>") 
        } )
    }
})

module.exports=router
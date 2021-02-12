var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var fs = require('fs')
const { throws } = require('assert')

router.get('/postdata', (req,res) => {
    res.sendFile(__dirname + '/html/postdata.html')
    fs.readFile('names.txt',(err, dat) => {
        nadata=dat.toString()
    })
})

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true}))
var names=[]

const checkName= (name) =>{
    
    if(names.includes(name)){
        
        console.log("condition: "+names.includes(name))
        return true
    }
    else{
        console.log("name: "+name)
        console.log(names)
        return false
    }
    
}
let nadata=""

router.post('/postdata', (req,res) => {
    // how to give the destination to a file which we have to create
    fname= req.body.fname
    data=req.body.data
    temp=fname
    fs.readFile('names.txt',(err, dat) => {
        nadata=dat.toString()
    })
    console.log("nadata: "+nadata)
    names=nadata.split(",")
    console.log("names: "+names)
    let i=0
    while(true){
        i+=1
        let cond=checkName(temp)
        console.log( "cond: " +cond)
        if(!cond){
            
            // if(i!=0){
            //     fname=fname+i
            // }
           
            break
        }
        else{
            temp=fname+i
            //cond=checkName(temp)
        }  
    }
    fname=temp
    fs.appendFile('names.txt', ','+fname,(err) => {
        if(err) throw err;
    })
     
    fs.writeFile(fname+'.txt', data, (err) => {
        if(err) throw err;
        res.send(req.body.fname +'<br>' + req.body.data + "<hr> <button><a href='/'>Home</a></button>")
        console.log("File saved")
    }) 
})

module.exports=router
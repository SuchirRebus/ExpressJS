var express=require('express')
var app= express()
var getdata = require('./system/js/getdata')
var putdata = require('./system/js/putdata')
var deletedata = require('./system/js/deletedata')
var postdata = require('./system/js/postdata')


app.get('/hello', (req,res)=>{
    res.send("Hello this is a express JS assignmwnt")
});

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/system/js/html/index.html')
})

app.use('/', [getdata, putdata, postdata, deletedata])

app.get('*', (req,res) => {
    res.send('Please enter correct url')
})

app.listen(3030);
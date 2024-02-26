const express= require('express')

const app=express()

const bodyParser= require('body-parser')

app.use(bodyParser.urlencoded({extends:false}))

app.use('/add-product',(req,res,next)=>{
    res.send("<form method='POST' action='/product'><input type='text' name='title'></input><input type='text' name='size' placeholder='inter-size'></input><button type='submit'>submit</button></form>")
})

app.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
    res.send('<h1>welcome to express</h1>')
})

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})
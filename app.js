const express= require('express')

const app=express()

app.use((req,res,next)=>{
    console.log("the first middleware")
    next()
})

app.use((req,res,next)=>{
    console.log("second middleware")
    res.send('<h1>welcome to express</h1>')
})

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})
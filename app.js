const express= require('express')

const app=express()



const adminRouter= require('./routes/admin')
const shopRouter= require('./routes/shop')



const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extends:false}))

app.use('/shop',shopRouter);
app.use('/admin',adminRouter);
app.use((req,res,next)=>{
    res.send('<h1>Page Not Found</h1>')
})


app.listen(3000,()=>{
    console.log("Listening on port 3000")
})
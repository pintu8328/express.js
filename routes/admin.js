const express=require('express')

const router= express.Router();
router.get('/add-product',(req,res,next)=>{
    res.send("<form method='POST' action='/product'><input type='text' name='title'></input><input type='text' name='size' placeholder='inter-size'></input><button type='submit'>submit</button></form>")
})

router.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})
module.exports=router;
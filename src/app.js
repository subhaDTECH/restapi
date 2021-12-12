const express=require("express")
const app=express()
const conn=require('./db/conn')
const Student =require('./modules/students')
const port=process.env.PORT || 5000;
const StudentRouter=require('./routes/student')
// middeel ware set up 
app.use(express.json())
app.use(StudentRouter)





app.listen(port,()=>{
    console.log(`server run on port ${port}`)
})
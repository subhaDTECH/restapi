const express=require('express')
const router=new express.Router() 
const Student =require('../modules/students')

router.get("/subha",(req,res)=>{
    res.send('heloo subha')
})

// start  
router.get('/',(req,res)=>{
    res.send("hello subha")
})
// app.post('/student',(req,res)=>{
//     const user=new Student(req.body)
//     user.save().then(()=>console.log(user)).catch((e)=>{
//         console.log(e)
//     })
// })


router.post('/student',async(req,res)=>{
    try{
      const user= new Student(req.body)
      const createUser= await user.save()
      res.status(200).send(createUser)
    }catch(e){
        res.status(400).send(e)
    }
     
  
  })
  
  // read data from data base 
  router.get('/student',async(req,res)=>{
      try{
          const studentsData=await Student.find({})
          res.status(200).send(studentsData)
          console.log(studentsData)
      }catch(e){
          res.status(404).send(e)
      }
  
  })
  // read data one by one 
router.get('/student/:id',async(req,res)=>{
      try{
           const _id=req.params.id;
          const studentsData=await Student.find({_id:_id})
          res.status(200).send(studentsData)
          console.log(studentsData)
      }catch(e){
          res.status(404).send(e)
      }
  
  })
  // get data via name 
  router.get('/student/:name',async(req,res)=>{
      try{
          
          const studentsData=await Student.find({name:req.params.name})
          res.status(200).send(studentsData)
          console.log(studentsData)
      }catch(e){
          res.status(404).send(e)
      }
  
  })
  
  
  // update data  
  
  
  router.patch('/student/:id',async(req,res)=>{
      try{
          const _id=req.params.id
          const studentsData=await Student.findByIdAndUpdate(_id,req.body,{
              new:true
          })
          res.status(200).send(studentsData)
          console.log(studentsData)
      }catch(e){
          res.status(404).send(e)
      }
  
  })
  
  
  // delete bdata 
  
router.delete('/student/:id',async(req,res)=>{
      try{
          const _id=req.params.id
          const studentsData=await Student.findByIdAndDelete(_id)
          res.status(200).send(studentsData)
          console.log(studentsData)
      }catch(e){
          res.status(404).send(e)
      }
  
  })





// end  
module.exports=router;
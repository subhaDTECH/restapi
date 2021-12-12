const { ValidatorsImpl } = require('express-validator/src/chain')
const mongoose=require('mongoose')
const { schema } = require('../../../modules/user')


const StudentSchema=new mongoose.Schema({
       name:{
           type:String,
           required:true,
           minlength:5,
           maxlength:15,
       },
       email:{
           type:String,
           required:true,
           unique:[true,'already exit'],
           valiidate(value){
               if( !validator.isEmail(value)){
                   throw new Error("invalid email")
               }
           }

       },
       phone:{
           type:Number,
           required:true,
           unique:true,
           min:10
       },
       address:{
           type:String,
           required:true
       },
      
       date:{
           type:Date,
           default:Date.now()
       }
})


// create model of schema  

const Student=new mongoose.model("StudentD",StudentSchema)


module.exports=Student;
// model me varable name first letter should be capital
const mongoose =require("mongoose");
const userSchema=new mongoose.Schema({
    name:{type:String,require:false,default: "sample Name"},
    _id:Number,
    course:String,
    skills:[String],
    address:{
        city:String,
        pincode:String,
    },
    isActive:Boolean,
    marks:[
        {
        subject:String,
        Score:Number,
    },
    ],
});
const User =mongoose.model("User",userSchema,"myusers") // considered as users
module.exports=User
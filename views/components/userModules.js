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
userSchema.pre("find",function(next){
    console.log(" ~ find Query is Trigeered:");
    next;
});
userSchema.post("UpdateOne",function(){
    console.log(" ~ Update Completed:");
    });
const User =mongoose.model("User",userSchema) // considered as users
module.exports=User;
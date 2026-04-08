const mongoose =require("mongoose");

const mdb =async ()=>{
    await mongoose
    .connect("mongodb://localhost:27017/FULL_STACK_LAB")
    .then(()=>console.log("connectd to DB"))
    .catch((err)=> console.log(err));
};

module.exports=mdb;
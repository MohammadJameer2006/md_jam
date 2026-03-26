const express = require("express");
require("dotenv").config()
constjwt =require("jsonwebtoken")

const jwtToken = process.env.jwtToken;

const app = express();
app.set("view engine","ejs");
app.get('/home',(req,res)=>{
    res.render("home",{
        name:"Sample User Name"
    })
})

const authMiddelware =(req,res,next)=>{

    const token = req.header.authorization?.split(" ")[1]
    console.log(" authMiddelware token:",token)
    if(!token){
        res.send("Token Not Found")
    }

    try {
        const decoded = jwt.verify(token,jwtToken)
        req.tokenMeta = decoded
        console.log(" authMiddelware decoded:",decoded)
        next()
    } catch (err){
        res.send("Not A Valid Token")
    }
};

//app.use(authMiddelware);

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRouts");
const authRoutes = require("./routes/authRoutes");

app.use("/admin", authMiddelware,userRoutes);
app.use("/",productRoutes);
app.use("/",authRoutes);

module.exports = app;
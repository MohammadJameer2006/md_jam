const express =require("express");

const app = express();

const customMiddleWare =(req,res,next) => {
  //logic goes here
  console.log(" ~ ",req.query.skip;.)
  if (req.query.skip === "true"){
    return next();  
  }else {
    res.send("Condition Failed");
  }

  //if failure case
  //res.send("Condition Failed");

  // if Success
  // next();

};

app.use(customMiddleWare);
app.use(express.json());

app.get("/home",(req,res) => {
  res.send("Home Page");
});

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./rotes/productRouts");

app.use("/admin",userRoutes);
app.use("/",productRoutes);

module.exports = app;

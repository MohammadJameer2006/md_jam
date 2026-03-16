const express = require("express");
const app = express();
app.use(express.json());
app.get("/home",(req,res) =>{
    res.send("Home Page");
});
app.listen(3000, () =>{
    console.log(' ~ :',"server running at 3000");
});
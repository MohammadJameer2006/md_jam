const expree =require("express");

const app = express();

app.use(express.json());

app.get("/home",(req,res) => {
    res.send("Home Page");
});

const userRoutes = require("./routes/userRoutes");

app.use("/",userRoutes);

module.exports = app;

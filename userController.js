const user =require("../modules/userModules");

exports.getUsers = (req,res)=>{
    req.json({
        users,
    })
};
exports.addUsers=(req,res)=>{
    const students = req.body;
    console.log("students",students);
    res.json({
        message:"student added",
        students,
    });
};
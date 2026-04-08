const UserModule = require("../models/userModules");

exports.getUsers = async (req, res)=>{
    const users = await UserModel.find({});
    res.json(users);    
};

exports.getUserById = async (req, res)=>{
    const{id}= req.params;
    const user = await UserModel.findOne({_id: Number(id)});
    res.json(user);
};
// insertOne({}) => create({})
// insertMany([]) => insertMany([])
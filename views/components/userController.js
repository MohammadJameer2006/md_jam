const UserModule = require("../models/userModules");

exports.getUsers = async (req, res)=>{
    const users = await UserModel.find({});
    res.json(users);    
};

exports.getUserById = async (req, res)=>{
    const{id}= req.params;
    const { isActive } = req.query;
    console.log(" ~ isActive:",isActive);
    filter = {_id: Number(id)};

    if(isActive){
        filter["isActive"]= Boolean(isActive);
    }
    console.log(" ~ filter:",filter)

    const user = await UserModel.findOne({_id: Number(id)});
    res.json(user);
};

exports.addUser = async (req,res)=>{
    const userMeta = req.body;
    console.log(" ~userMeta:",userMeta)

    if(userMeta?._id){
      const existingUser = await UserModel.findOne({_id: Number})
      if (existingUser){
        return res.send("User Exists");
      }
    }
    UserModel.create(userMeta);
    res.send("User Created");
};

// insertOne({}) => create({})
// insertMany([]) => insertMany([])
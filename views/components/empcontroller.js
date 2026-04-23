const  EmployeesModel = require("../model/empmodel");

exports.createEmployees = (req,res) =>{
    const departments = ["IT","HR","Finance","Sales"];
    const data = [];
    for(let i=1;i<=120;i++){
        data.push({
            id:i,
            name:"User"+i,
            department:departments[i % 4],
            salary: Math.floor(Math.random()*50000)+30000,
            age:Math.floor(Math.random()*15)+22,
        });
    }
    EmployeesModel.insertMany(data);
    console.log(" ~ data:",data);
    res.send("Data inserted");

};
exports.aggSample = async (req,res)=>{
    const aggregatedData = await EmployeesModel.aggregate([
        {$project:{department: 1}},
        {$group: {_id: "$deparment", ount: {$sum :1}}},
        {match:{_id: "IT"}},
        {$limit: 2},
        {$sort: {_id: -1}},
    ]);
    res.json(aggregatedData);
};
//import fs from "fs";
//const add = ()=>{};
//module.exports={
  //  add,
//};
//const add = require("add")
//fs.readFile("file.txt","utf8",(error,data)=>{
//   console.log("data:",data);
//});
//const pathName="C:\\notes\\GLA\\Demo\\functions\\function.js";
//fs.readFile(crossPlatformPathName,"utf8")
import os from "os"
const arch = os.arch()
console.log("🚀 ~ arch:",arch)
const platform = os.platform()
console.log("🚀 ~ paltform:",platform)
const freeMemory = os.freemem()/1024/1024/1024
console.log("🚀 ~ freeMemory:",freeMemory)
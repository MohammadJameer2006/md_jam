const sample = (callback)=>{
    callback("Sample Content","Demo");
};
const add = (a,b)=> {
    console.log("🚀 ~data:",a+b);
};
sample(add);
const login = async () =>{
    await checkHeader();
    await checkPassword();
};
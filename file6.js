const a=()=>{
    b();
    console.log("🚀~ a ~ a:");
};

const b=()=>{
    console.log("🚀~ b ~ b:");
    setTimeout(() =>{
        console.log("🚀~ b~timer 1:");
    },10000);
    setTimeout(() =>{
        console.log("🚀~ b~timer 2:");
    },0);
    Promise.resolve().then(() =>{
        console.log("🚀 ~ b ~ Promise Portion:");
    })
};

a();
console.log("🚀~ Final:")

const sample =async () =>{
    console.log("🚀 ~ sample ~ Started:");

const a = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
    (response) => response.json(),
);

const b = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
    (response) => response.json(),
);

const res1 = await a;
console.log("🚀 ~ sample ~ res1:",res1);
const res2 = await b;
console.log("🚀 ~ sample ~ res2:",res2);

console.log("🚀 ~ sample ~ Ended:");


};
console.log("🚀 ~ sample ~ Started---------1:");
sample();
console.log("🚀 ~ sample ~ Started---------2:");
function1 => started=> Ended
function2 => started=> Ended
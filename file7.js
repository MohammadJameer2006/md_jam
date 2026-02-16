const sample =async () =>{
    console.log("🚀 ~ sample ~ Started:");

    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => console.log(json));

    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => console.log(json));

    console.log("🚀 ~ sample ~ Ended:");

};
console.log("🚀 ~ sample ~ Started---------1:");
sample();
console.log("🚀 ~ sample ~ Started---------2:");
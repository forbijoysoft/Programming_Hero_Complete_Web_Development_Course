

/***
 * --------------- INFORMATION -----------------
 * fetch("put your url here") --> fetch() কোন একটি তথ্য নিয়ে আসার প্রমিস করে। fetch url থেকে যে তথ্য পায় সেটি একটি  X নামক ভেরিয়েবলের মধ্যে স্টোর করে।
 * X নামক ভেরিয়েবল.json() --> fetch যে রেসপন্স দেয় সেই রেসপন্সকে .json() জেসন ফাইলে কনভার্ট করে
 * জেসন ফাইলে কনভার্ট করার পর সেই ডাটা টা অন্য একটি ভেরিয়েবলে পাঠিয়ে দেয়।
 * 
 *
 * fetch("put your url here")
 * .then((response) => response.json())
 * .then((responseData) => console.log(responseData))
 * 
 *  */



// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then((res) => res.json())
// .then((data) => console.log(data));

const loadData = () =>{
    fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((res) => res.json())
.then((data) => console.log(data));
}
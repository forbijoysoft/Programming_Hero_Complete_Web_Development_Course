const loadData = () =>{
      fetch("https://jsonplaceholder.typicode.com/todos/1")
      //fetch gives us promise of response
      .then((response) => response.json())
      //response will convert into json data with the help of .json()
      .then((data) => console.log(data));
      //finally json data will jump into a variable(data), using this variable we will be able to console the json data
};



/***
 * Extension --> Json Viewer Pro
 * Json Viewer Pro is an extension which helps to organise json file in the chrome web page
 */

 // https://jsonplaceholder.typicode.com/posts


 const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then((resPromi) => resPromi.json())
    .then((resJson) => {
        // console.log(resJson); //we can show the response of json data here OR we can pass this response data to another function, like below: functionName(variable);
        displayPost(resJson); // এখন জেসন ডাটা যে ফাংশনে দিতে চায় সেই ফাংশনের মধ্যে এখানে বসিয়ে দিব। এবং সেই ফাংশন X নামক ভেরিয়েবলের মধ্যে ডাটা স্টোর করবে।
    });
 };

 const displayPost = (posts) => {
    // console.log(posts);
    posts.forEach((post)=>{
        console.log(post);
    });
 };
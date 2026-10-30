

const loadPost = () =>{
    fetch("./words.json")
    .then((response)=>response.json())
    .then((jsonData)=>{
        // console.log(jsonData);
        displayPosts(jsonData);

    });
};

const displayPosts = (posts) =>{
    /**1. Get the container */
    const postConatiner = document.getElementById("post-container");
    console.log(postConatiner);
    

    posts.forEach((post)=>{
        console.log(post);


        /**2. Create HTML element */
        const listItem = document.createElement("li");
 
        

        /**3. Add innerText to the Element */
        listItem.innerText = post.title;
       
        // console.log(listItem);

        

        
        

        /**3. add li into container */
        postConatiner.appendChild(listItem);
         
      
    });
}

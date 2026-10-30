const loadPost = () =>{
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then((res) => res.json())
    .then((data)=>{
        // console.log(jsonData);
        displayPost(data);

    });
};

// {
//     "userId": 7,
//     "id": 68,
//     "title": "odio quis facere architecto reiciendis optio",
//     "body": "magnam molestiae perferendis quisquam\nqui cum reiciendis\nquaerat animi amet hic inventore\nea quia deleniti quidem saepe porro velit"
// }

const displayPost = (posts) => {
    //1. get the container and empty the container
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML= " ";

    //2. 
    posts.forEach((post)=>{
        console.log(post);

        
        //3. create element
        const postCard = document.createElement("div");

        
        postCard.innerHTML = `
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `;

        // 4. add to the container
        postContainer.append(postCard)
    });
   
};


 loadPost();
    

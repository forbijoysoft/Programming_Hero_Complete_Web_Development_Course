function add(num1, num2){
    const total = num1 + num2;
    // console.log(num1, num2, total);
}
// Nan --> Not a Number
// add(10, 20);


/**
 * ----------- default parameter -------------
 * default perameter value দেওয়ার মানে হলো ফাংশন কল করার সময় যদি ডিফল্ট মান দেওয়া প্যারামিটারে কোন মান দেওয়া না হয় তখন ডিফল্ট মানটি হিসেব করেই ফাংশন রেজাল্ট দিবে। কিন্তু ফাংশন কল করার সময় যদি মান দিয়ে কল করা হয়, তখন ডিফল্ট মানকে আর হিসেব করবে না।
        * Default parameter এর মান কি কি হতে পারে?
        * string ---> ' '
        * number ---> 0 [for add]
        * number ---> 1 [for multiply]
        * array ---> []
        * object ---> {}
        * boolean ---> false
       
* 
* --> 

/** 
 *  default Parameter লিখব কিভাবে?
        * Parameter দেওয়ার পর = চিহ্ন দিয়ে parameter এর default একটা মান বসিয়ে দিব।
        * ডিফল্ট প্যারামিটারগুলোকে সবসময় তালিকার শেষে রাখা।
        
 */


function add2(num1, num2 = 0){
    const total = num1 + num2;
    // console.log(num1, num2, total);
}

add2(10, 60);function add(num1, num2){
    const total = num1 + num2;
    // console.log(num1, num2, total);
}
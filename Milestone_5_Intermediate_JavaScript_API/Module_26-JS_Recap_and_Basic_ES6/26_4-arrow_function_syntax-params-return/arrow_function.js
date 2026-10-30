
/** 
 * --------- function declaration -------
 * function declar করার আগে থেকেই কল করা যায়। 
 */
    // console.log(add(10, 20));
    function add (num1, num2) {
        return num1 + num2;
    }

/** 
 * ----------- function expression ----------
 * function declar করার আগে থেকেই কল করা যায় না।
 */

    // console.log(add2(30, 12));
    const add2 = function(num1, num2) {
        return num1 + num2;
    }
    // console.log(add2(30, 12));


/** 
 * ------------- arrow function ----
 * 
 */

const add3 = (num1, num2) => num1 + num2;
// console.log(add3(20, 40));


const multiply = (a, b) => a * b;
// console.log(multiply(10, 10));

const tenTimes = x => x * 10; // একটা প্যারামিটার থাকলে ব্র্যাকেট দেওয়ার প্রয়োজন নেই।
// console.log(tenTimes(10));

const tenTimes2 = (x) => x * 10; // একটা প্যারামিটার থাকলে ব্র্যাকেট দেওয়ার প্রয়োজন নেই। কিন্তু চায়লে দেওয়া যায়।
// console.log(tenTimes2(20));

const getPi = () => 3.1416; // constant value এর ক্ষেত্রে প্যারামিটার না দিলেও হবে।

const addAll = (a, b, c, d = 0, e, f) => a + b + c + d + e + f;
// console.log(addAll(10, 20, 20, 32, 30));


/**
 * 
 * Number থেকে Math.max দিয়ে সবচেয়ে বড় নাম্বারটা বের করা যায়। কিন্তু Array থেকে Math.max দিয়ে সরাসরি সবচেয়ে বড় নাম্বারটা বের করা যায় না।
 * 
 */
const max = Math.max(3, 5, 3, 9, 11, 15, 20, 40, 10);
// console.log(max);

const numbers = [3, 4, 5, 7, 9, 11, 10];
const max2 = Math.max(numbers);
// console.log(max2);

/**
 * কোন array এর আগে তিনটা ডট ডট চিহৃ দিলে সেই array আর array থাকে না, সেটি নাম্বারে পরিবর্তন হয়ে যায়।
 */
const number = [10, 34, 33, 53, 55];
// console.log(...number);

const params = [45, 12, 3];
function sum(x, y, z){
    return x + y + z;
}
const result = sum(...params);
// console.log(result);




/**
 * ---------- Copy Array -----------------
 * এখানে arr2 তে পুস করলে arr1 এ ও সেম একই উপাদান অটোমেটিকলি পুস হয়ে যাবে।
 */
        // const arr1 = [1, 2, 3];
        // const arr2 = arr1;
        // arr2.push(4);
        // console.log(arr2, arr1)


/**
 * কিন্ত এখন spread এর মাধ্যমে arr1 কপি করে arr2 নামে নতুন array তৈরি করা হলে, নতুন array arr2 তে পুস করা উপাদানটি শুধুমাত্র arr2 তেই যুক্ত হবে arr1 যুক্ত হবে না।
 */
        const arr1 = [1, 2, 3];
        const arr2 = [...arr1];
        arr2.push(4);
        console.log(arr1, arr2);


/**
 * ---Array এর সাথে Array বা নতুন উপাদান যুক্ত করা ----
 * দুটি অ্যারেকে খুব সহজে এক করা যায়।
 * খুব সহজেই নতুন উপাদান যুক্ত করা যায়।
 */
        const fruits = ["Apple", "Banana"];
        const veggies = ["Carrot", "Potato"];

        const addTwoArray = [...fruits, ...veggies]; 
        console.log(addTwoArray); // ["Apple", "Banana", "Carrot", "Potato"]

        const addNewElements = [...fruits, "Mango", "Guaba", "Jackfruit"];
        console.log(addElements);


/**
 *  -- ১. রেফারেন্স সমস্যা (Reference Problem) --
 * 
 * যদি আপনি একটি অবজেক্টকে সরাসরি অন্য একটি ভ্যারিয়েবলে সমান করেন, তবে তারা একই মেমোরি অ্যাড্রেস শেয়ার করে। ফলে একটি পরিবর্তন করলে অন্যটিও বদলে যায়। 
 * 
 *   
 */

        const obj1 = { name: "Zihad", age: 25 };
        const obj2 = obj1; // রেফারেন্স কপি (অ্যারের মতোই)

        obj2.city = "Dhaka"; // obj2 তে নতুন প্রপার্টি যোগ করা হয়েছে, কিন্তু Obj1 এ অটোমেটিক এড হয়ে যাবে।

        console.log(obj1); 
        console.log(obj2); 


/**
 *  -- Object Copy with Spread --
 * 
 *  স্প্রেড অপারেটর (...) ব্যবহার করলে অবজেক্টের ভেতরের প্রপার্টিগুলো ভেঙে নতুন একটি অবজেক্ট তৈরি হয়। ফলে একটি পরিবর্তন করলে অন্যটির ওপর কোনো প্রভাব পড়ে না।
 * 
 */
const object1 = { name: "Zihad", age: 25 };

// স্প্রেড অপারেটর দিয়ে কপি (নতুন অবজেক্ট তৈরি হলো)
const object2 = { ...object1 };

object2.city = "Chattogram"; // শুধু object2 তে পরিবর্তন হবে

console.log("Original object1:", object1); 
// Output: { name: "Zihad", age: 25 }

console.log("Copied obj2:", obj2);   
// Output: { name: "Zihad", age: 25, city: "Chattogram" }
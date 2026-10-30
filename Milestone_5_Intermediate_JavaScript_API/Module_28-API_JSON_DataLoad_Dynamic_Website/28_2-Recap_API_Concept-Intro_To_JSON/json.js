/***
 * ********* INFORMATION ****************
 * The full form of JSON is JavaScript Object Notation.
 

 * Uses of JSON:
        In modern web development, JSON is primarily used to transmit data between a web server and a browser (via RESTful APIs and AJAX) so websites can update dynamically without reloading the page. It is also extensively used for storing data in NoSQL databases like MongoDB, managing project configuration files (such as package.json), and sharing data seamlessly between different programming languages.
 
        
 * How To Write JSON File:
        Step-1: Create a File with .json at the end.
            Like: Open any code editor (VS Code) and create a new file named data.json (make sure it ends with .json).

        Step-2: Follow Proper JSON Rules
            When writing your data inside the file, follow these fundamental rules:

            i: Surround everything in a root set of curly braces {} (for an object) or square brackets [] (for a list).

            ii: Every key must be wrapped in double quotes (e.g., "name").

            iii: Strings as values must also use double quotes (e.g., "developer").

            iv: Numbers, booleans (true/false), and null do not use quotes.

            v: Use commas , to separate key-value pairs, but never put a trailing comma after the last item.

            Example:
            {
            "name": "Alex",
            "age": 28,
            "isDeveloper": true,
            "skills": ["JavaScript", "HTML", "CSS"],
            "address": {
                "city": "Limassol",
                "country": "Cyprus"
            }
            }





 * JSON.stringify(write an object variable);
            In web development, JSON.stringify() is a built-in JavaScript function used to convert a JavaScript object or value into a JSON string.



 * JSON.parse(write JSON string variable);
            To turn a JSON string back into a usable JavaScript object, use JSON.parse():


 * 
 * 
 * 
 * 
 * 
 */


const person = {
    //person is an object
    name: "Brian",
    fruit: "Mango",
    friends: ["alex", "Kaplan", "Romio", "Bin"],
    isRich: false,
    money: 10000,
};

console.log(person);
console.log(typeof person);


//we are going to conver object into JSON string
const personJSON = JSON.stringify(person);
console.log(personJSON);
console.log(typeof personJSON)


const parseJSON = JSON.parse(personJSON);
console.log(parseJSON);
console.log( typeof parseJSON);
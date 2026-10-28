/**
 * For a given string tell me whether is has even number of characters of not.
 *
 */

function evenString(str){
    console.log(str);
}
// evenString('Bangladesh');

/**
 * arry এর length দেখার জন্য array.lenght
 * string এর lenght দেখার জন্য string.lenght
 */
function stringEven(string){
    const stringSize = string.length;
    console.log("Srting is ",  string, "and the size of ",string,  " is = ", stringSize);
}
// stringEven('America');
// stringEven('Dhaka');

//
function stringEven(string) {
  const stringSize = string.length;
  
  if (stringSize % 2 === 0) {
    console.log("The size of ", string, " is Even Size");
    console.log(
    "Srting is ",
    string,
    "and the size of ",
    string,
    " is = ",
    stringSize,
  );
  } else {
    console.log("The size of ", string, " is Odd Size");
    console.log(
    "Srting is ",
    string,
    "and the size of ",
    string,
    " is = ",
    stringSize,
  );
  }
}
// stringEven("America");
// stringEven("Bangladesh");



/**
 * 
 */
function doubleOrTripple(number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

// console.log(doubleOrTripple(7, true));
// console.log(doubleOrTripple(10, false));



// 
function numberOfElements(numbers){
    const len = numbers.lenght;
    return len;
}
// numberOfElements([12, 45, 78, 45, 121254, 4,5]);

function getAge(person){
    const age = person.age;
    return age;
}

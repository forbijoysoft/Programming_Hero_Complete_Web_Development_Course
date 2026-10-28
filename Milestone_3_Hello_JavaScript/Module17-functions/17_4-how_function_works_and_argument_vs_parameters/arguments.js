function doubleIt(number) {
  const doubled = number * 2;
  console.log("Number is = ", number, " and it's double = ", doubled);
}

doubleIt(4); /** এখানে 4 দিয়ে কল করা হয়েছে, যাকে দিয়ে কল করা হয় তাকে arguments বলা হয়ে থাকে */
console.log('___________________________---------------___________')
doubleIt(10);
console.log('___________________________---------------___________')

const number = 60;
doubleIt(number);

const money = 334;
doubleIt(money); /**তার মানে সরাসরি যাকে দিয়ে কল করব সেটা মান ও হতে পারে, আবার ভেরিয়েবলও হতে পারে। */




function difference(num1, num2){
    const diff = num1 - num2;
    console.log(num1, num2, "Difference is = ", diff);
}

const fatherAge = 50;
const myAge = 16;

difference(fatherAge, myAge);
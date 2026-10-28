function add(price1, price2){
    const totall = price1 + price2;
    return totall;
}

const bill = add(10, 50);
console.log(bill);
/**
 * ফাংশন থেকে রিটার্ন নিতে চায়লে, ফাংশনকে কল করার সময় - তাকে একটি ভেরিয়েবলের মধ্যে রেখে দিয়ে, সেই ভেরিয়েবলকে console.log করে দিব।
 */



//shortcut
function add2(price1, price2){
    return price1 + price2;
}

const bill2 = add(50, 120);
console.log("Totall bill is = ", bill2);





// 
function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const mult = sum * diff;
    const result = mult /2;
    return result;
}

const result = doMath(10, 5);
console.log("Totall result is = ", result);






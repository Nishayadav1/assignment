// 1. Take two numbers a,b and print the sum, difference, product, quotient and modulus of a & b.
let a=10;
const b=20;
console.log("add=",a+b)

// 2. Take two numbers and only print the integer part when a is divided by b.
let d=10;
var b1=3;
if (d%b==0){
    console.log(d,"its divided by b1")}
else{
    console.log(d,"its not divided by b1")
}    

// 3. Take two numbers a,b and print the exponential power of the first number raised by the second.
let m=3;
let m1=2;
console.log("exponential power",m**m1)

// 4. Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b.
let k = 248;
let k1 = 5;
console.log("decimal_part=",(k%k1)/k1)

// 5. Take marks in 5 subjects A,B,C,D,E and print out the average of marks from five subject marks.
let A=23;
let B=34;
let C=45;
let D=67;
let E=98;
let ABCDE= A+B+C+D+E;
console.log("averge=",ABCDE/5)

// 6. Take the cost price a and selling price b of a product, and print the profit obtained on the product.
let cost_price=23;
let selling_price=54;
if (selling_price>cost_price){
    console.log("profit=",selling_price-cost_price)}
else if(cost_price>selling_price){
    console.log("loss=",cost_price-selling_price)
} 
else{
    console.log("no profit no loss")
}   


// 7. Take a number and print out the last digit of the number.
let number=24;
console.log("lastdigit=",24%10)

// 8. Take a number and return the first and last digits.
let digit=345;
let first_digit=parseInt(digit/10);
let last_digit=digit%10;
console.log("first_digit=",first_digit ,"last_digit=",last_digit)


// 9. Write a JavaScript program to find the largest of three numbers.
let first_n=45;
let second_n=34;
let third_n=271;
if (first_n>second_n && first_digit>third_n){
    console.log("lagest=",first_n)
}
else if(first_n<second_n && second_n>third_n){
    console.log("lagest=",second_n)
}
else{
   console.log("lagest=",third_n)
}

// 10. Write a JavaScript program to check whether a number is even or odd.
let num1=43;
if(num1%2==0){
    console.log(num1,"its  a even")
}
else{
    console.log(num1,"its  a odd")
}

// 11. Write a JavaScript program to check whether a given number is prime or not.
console.log("its my doubt")


// 12. Write a JavaScript program to convert temperature from Celsius to Fahrenheit and vice vers
// °F = °C × (9/5) + 32.
let celsius=23;
console.log("Fahrenheit=",celsius*(9/5)+32)
// °C = (°F - 32) × 5/9
let f=45;
console.log("celsius=",(f-32)*5/9)


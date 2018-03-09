/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function whatIsSinCosTan(x) {
    let myArray = [x];
    var mySinArray = [];
    var myCosArray = [];
    var myTanArray = [];
    for (var i = 0;i < myArray.length;i++){
     mySinArray.push(Math.sin(i));
     myCosArray.push(Math.cos(i));
     myTanArray.push(Math.tan(i));
     
     }

    console.log(mySinArray[0], myCosArray[0], myTanArray[0]);
}
whatIsSinCosTan(3);

function Addition(a,b) {
    let result = a+b;
    console.log(result);
}
Addition(3,6);

function Subtraction(a,b){
    let result = a-b;
    console.log(result);
}
Subtraction(3,6);

function Multiplication(a,b){
    let result = a*b;
    console.log(result);
}
Multiplication(3,6);

function Division(a,b){
    let result = a/b;
    console.log(result);
}
Division (3,6);

function ModDiv(a,b){
    let result = a%b;
    console.log(result);
}
ModDiv (3,6);

function Quad(a,b,c){
    let result1 = (-b+(Math.sqrt(b*b-(4*a*c))))/(2*a);
    let result2 = (-b-(Math.sqrt(b*b-(4*a*c))))/(2*a);
    console.log(result1, result2);
}
Quad(1,2,-3);
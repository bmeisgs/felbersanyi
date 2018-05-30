/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


let d = 1;
let g = 9.81;
let a = Math.asin(0.187);
let tgs = 1.5892715;
let tws = 1.251768;
let tos = 1.251128;

let mugs = Math.tan(a)-(2*d/(g*tgs*tgs*Math.cos(a)));
let muws = Math.tan(a)-(2*d/(g*tws*tws*Math.cos(a)));
let muos = Math.tan(a)-(2*d/(g*tos*tos*Math.cos(a)));

console.log("The coefficient of friction between the green soap and the table is", mugs);
console.log("The coefficient of friction between the white soap and the table is", muws);
console.log("The coefficient of friction between the olive soap and the table is", muos);


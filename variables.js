/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


let a = 2;
let b = (a === 3);
let c = "My choice of words";
let d = [a,b,c];
let e = {a: a,b: b,c: c};

//reverses d, iterates through it and displays it
d.reverse();
for(let i=0;i<d.length;i++) {
    console.log(d[i]);
};
 
 //iterates through e and displays it
for(var index in e) {
  console.log( index + " : " + e[index]);
};


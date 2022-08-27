// var tomato = 12;
// console.log(tomato);


// // object are key value pairs
// var fruit = {
//     name : 'apple',
//     taste : 'sweet'
// }

// console.log(fruit);

// //array
// var veg = ['tomato','potato','onion'];

// console.log(veg);


// // operators
// //1. arithemetic operator
// var a =100;
// var b= 50;
// var c= a+ b;

// console.log(c);
// //comparison operator
//  console.log(100< 20);
//  console.log(100==20);
//  console.log(20=='20');
//  console.log(20==='20');

//  //statements

//  var option = null;
// switch(option){
//     case 1:
//         console.log("is one");
//         break;
//     case null:
//         console.log("is null");
//         break;
//     case 'ste':
//         console.log("is a string");
//         break;
//     case undefined:
//         console.log("is undefined");
//         break;
// }

var arr = new Array();
arr[0]=5;
arr[1] = 7;

console.log(arr.find((elem)=> elem> 5 ));

try{
throw 'error thrown';
}
catch(ex){
console.log(ex);
}

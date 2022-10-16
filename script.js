
// 1.
// let array = [5, 25, 89, 120, 36];

// array.push("javascript","python");
// console.log(array);

// array.unshift("html","css")
// console.log(array);

// console.log(array.length);

// array.shift(0);
// array.pop(array.length-1);
// console.log(array);

// 2.

// let fruit = ["ფორთოხალი", "ბანანი", "მსხალი"];

// console.log(fruit.length);

// fruit.push("ვაშლი", "ანანასი");
// console.log(fruit);

// fruit.unshift("საზამთრო");
// console.log(fruit);

// console.log(fruit.length);

// fruit.splice(2, 1,"მანგო");
// console.log(fruit);

// fruit.shift(0);
// fruit.pop(fruit.length-1);
// console.log(fruit);

// console.log(fruit.length);

// 3.

// let numbers = [12, 25, 3, 6, 8, 14, 7, 23];

// let newnumbers = numbers.map((item) => item / 3);
// console.log(newnumbers);

// 4.
// let array1 = [  "hello",  125,  "javascript",  "html",  43,  "css",  "scss",  "bootstrap",  88,  59,  "python",];

// let newarray1 = array1.filter(function (element) {
//   if (typeof element == "number") {
//     console.log(element);
//   }
// });

// 5.
// let languages = ["html", "css", "javascript", "python", "php"];
// newlanguages = languages.filter(function (item) {
//   return item.length > 3;
// });

// console.log(newlanguages);

// 6.
// let array = [12, "google", 32, null, "yahoo", 25];

// let newarray = array.map(function (element) {
//     if (typeof element == "number") {
//         console.log(Math.pow(element,2));
//     } else if (typeof element == "string") {
//         console.log(element.toUpperCase());
//     } else
//     console.log(element);
// });

// 7.
// let words = ["Madrid", "Rome", "Milan", "Berlin"];
// let newwords = words.filter(function (items) {
//   return items.includes("m") || items.includes("M");
// });
// console.log(newwords);

// 8.
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];
// let newarray = arr1.concat(arr2.concat(arr3));
// console.log(newarray);

// 9.
// let array = [1, 2, 3, 4, 5];
// let sum = 0;
// array.forEach(function (item) {
//   return (sum = sum + item);
// });
// console.log(sum);

// 10.
// let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];
// let newnumbers = numbers.filter(function (positive) {
//   return positive > 0;
// });
// console.log(newnumbers);

// 11.

// let arr = [-1, -2, -3, 4].some(function (items) {
//   return items > 0;
// });
// console.log(arr);

// 12.
// let array = [23, 45, 32, 5, 87, 7, 3, 98].sort(function (x, y) {
//   return x - y;
// });
// console.log(array);

// 13.
// let array = [1, 2, 3, 4, 5];
// array.splice(2, 0, "a", "b", "c");
// console.log(array);





// ახალი მნიშვნელობის დამატება

// let names = ["beka", "sandro", "giorgi", "ani"];
// names.push("nino"); boloshi amatebs
// names.unshift("ana"); tavshi amatebns
// names.shift();boloshi shlis
// names.pop();tavshi shlis

// let newnames = names.slice(1,3); abrunebs axal masivs mkitirebuli mnisvnelobebit

// let numbers = [10, 25, 2, 4, 5];

// let newarray = numbers.map(function(item){
//   return item * 2;
// })
// let newarray = numbers.map((item) => item * 2)ან >
// let newarray = numbers.map((item) => Math.pow(item, 3));
// let newarray = numbers.filter(function (element) {
//   return element > 10;
// });
// let languages = ["javascript", "python", "java"];
// let newlanguages = languages.filter(function (items) {
//   return items.length > 5 && items.includes("av");
// });

// let array = ["apple", "mango", "bananna"];
// array.reverse();

// console.log(array.indexOf("apple"));

// some and every

// let array = [225, 25, 4, 8].some(function (items) {
//   return items < 125;
// });
// console.log(array);

// sort

// let array = [225, 25, 4, 8];
// let maxvalue = array.sort((x, y) => y - x)[array.length-1];

// let array1 = ["nino", "ana"];
// let array2 = ["beka", "sando"];
// let allarray = array1.concat(array2);

// reduce
// let array = [
//   [0, 1],
//   [2, 2],
//   [5, 6],
// ].reduce(function (accumulator, currentvalue) {
//   return accumulator.concat(currentvalue);
// });

// let array = [
//   [-10, 11],
//   [2, -2],
//   [-5, 6],
// ].reduce(function (accumulator, currentvalue) {
//   return accumulator.concat(currentvalue);
// });
// let newarray = array.filter((item) => item > 0);

// for (let item of array) {
//   for (let positive of item) {
//     if (positive > 0) console.log(positive);
//   }
// }

// splice

// let array = ["html", "css", "javascript", "c#"];
// array.splice(1, 2);
// let arra2 = array.splice(1, 2);
// array.splice(2,1,"txa")
// array.splice(2,0,"java")
// array.splice(-2,1)

// foreach

// let array = [10, 25, 4, 9];
// for (let x of array) {
//   if (x > 5) {
//     console.log(x);
//   }
// }
// array.forEach((item) => {
//   if (item > 5) {
//     console.log(item);
//   }
// });

// es6

// let user = {
//   name: "sandro",
//   age: 25,
// };
// let printname = user.name+"არის"+user.age;
// console.log(printname);

// let printname2 = `${user.name} aris ${user.age} wlis`;
// console.log(printname2);

// let number = 50;
// let result = number < 10 ? "hello" : number < 30 ? "hello2" : "error";
// console.log(result);

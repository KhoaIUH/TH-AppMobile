const arr=[1,2,3,4,5,6,7,8,9,10];
console.log("Array");
console.log(arr);
// 1. filter
const newarray1 = arr.filter(function (arrnum) {
    return arr % 2 != 0;
});
console.log("Array after filter");
console.log(newarray1);
// 2. find
const newarray2 = arr.find(arrnum => arrnum > 5);
console.log("Array after find");
console.log(newarray2);
// 3. every
const newarray3 = arr.every(arrnum => arrnum > 1);
console.log("Array after every");
console.log(newarray3);
// 4. map
const newarray4 = arr.map(arrnum => arrnum * 3);
console.log("Array after map");
console.log(newarray4);
// 5. reduce
const newarray5 = arr.reduce((total, arrnum) => total + arrnum, 0);
console.log("Array after reduce");
console.log(newarray5);
// 6. some
const newarray6 = arr.some(arrnum => arrnum > 10);
console.log("Array after some");
console.log(newarray6);
// 7. any
const newarray7 = arr.some(arrnum => arrnum > 0);
console.log("Array after any");
console.log(newarray7);
// 8. forEach
const newarray8 = arr.forEach(arrnum => console.log(arrnum));
console.log("Array after forEach");
console.log(newarray8);


var salaries = [45000, 89000, 78000, 90000, 45000, 75000];
var sum = 0;
salaries.forEach(function (ele, index, arr) {
    console.log(ele + " " + index + "  " + arr);
    sum = sum + ele;
});
console.log(sum);
salaries.forEach(function (ele) { return console.log(ele); });
console.log("====================");
var filtsalaries = salaries.filter(function (ele) { return ele < 80000; });
filtsalaries.forEach(function (e1) { return console.log(e1); });
console.log("=========================");
salaries.filter(function (ele) { return ele > 80000; }).forEach(function (e1) { return console.log(e1); });
console.log("====================");
//increment every salary by 5000
var incrsalaries = salaries.map(function (e1) { return e1 + 5000; });
incrsalaries.forEach(function (e1) { return console.log(e1); });
console.log("===================");
//increment salaries<50000 by 4000 and display it
salaries.filter(function (e1) { return e1 < 50000; }).map(function (e1) { return e1 + 4000; }).forEach(function (e1) { return console.log(e1); });
//find method
//sum of salaries//reducing n salaries ip====> single op
var summ = salaries.reduce(function (acc, ele) { return acc + ele; }); //acc=0 acc=0+45000 acc=450000
console.log(summ);
console.log("====================");
var summ2 = salaries.reduce(function (acc, ele) { return acc + ele; }); //acc=0 acc=0+45000 acc=45000
console.log(summ2);

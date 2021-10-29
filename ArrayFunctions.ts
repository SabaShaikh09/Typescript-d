let salaries=[45000,89000,78000,90000,45000,75000];
let sum=0;
salaries.forEach(function(ele, index, arr){
    console.log(ele+" "+index+"  "+arr);
    sum=sum+ele;
});
console.log(sum);
salaries.forEach(ele=>console.log(ele));
console.log("====================");
let filtsalaries=salaries.filter(ele=>ele<80000);
filtsalaries.forEach(e1=>console.log(e1));
console.log("=========================");
salaries.filter(ele=>ele>80000).forEach(e1=>console.log(e1));
console.log("====================");

//increment every salary by 5000
let incrsalaries=salaries.map(e1=>e1+5000);
incrsalaries.forEach(e1=>console.log(e1));
console.log("===================");

//increment salaries<50000 by 4000 and display it

salaries.filter(e1=>e1<50000).map(e1=>e1+4000).forEach(e1=>console.log(e1));

//find method
//sum of salaries  //reducing n salaries ip====> single op

let summ=salaries.reduce((acc,ele)=>acc+ele);   //acc=0 acc=0+45000 acc=450000
console.log(summ);
console.log("====================");
let summ2=salaries.reduce((acc,ele)=>acc+ele);   //acc=0 acc=0+45000 acc=45000
console.log(summ2);





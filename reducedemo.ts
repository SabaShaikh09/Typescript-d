

let arr=[2,1,6,4,8];
let sum=arr.reduce((acc,ele)=> acc+ele);
console.log(sum);

// acc : 1st element of that array : 
// ele: 2nd element of that array:
// 2, 1 2+1=3 acc=3 3+6=9 acc=9 9+4 acc=13 13+8 21 acc=21 return acc;

let sum1=arr.reduce((acc,ele)=> acc+ele , 5);
console.log(sum1);

/* ACC : init value = 5:
ele : 1st element of that array

5+2=7 acc=7 7+1=8 acc=8 8+6=14 acc=14 14+4=18 acc=18 18+8=26 acc=26 return acc;
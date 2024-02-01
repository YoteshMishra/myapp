let obj = [175, 50, 25]
function getSum(total, num){
    return total - num;
}
let obj2 = obj.reduce(getSum)
console.log(obj2)



let x = [18.2, 15.7, 18.36, 20.05]
function myCalc(sum, num1){
    return sum + Math.round(num1);
}
 let y = x.reduce(myCalc, 0);
 console.log(y);
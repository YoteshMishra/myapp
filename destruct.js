let arr = [3, 5, 8, 12, 6, 15]
// let [a, , b, ...rest] = arr
// console.log(a, b, rest);
let {a, b}= {a: 1, b: 5}
console.log(a, b);
// const objects = ['table', 'iPhone', 'apple', 'banana', 'pineapple']
// const [furniture, mobile, ...rest] = objects
// console.log(furniture, mobile, rest)


const MyUser = {
    name: "Yotesh",
    age: 26,
    address: "djhdh colony"
}
console.log(MyUser.age);
console.log({ ...MyUser, name:"Ashish", age: 27});

const {name, myAge, address} = MyUser;
console.log(name);
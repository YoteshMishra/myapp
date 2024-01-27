// let arr = [3, 5, 8, 12, 6, 15]
// let obj = {...arr}
// console.log(obj);

// function sum(a, b, c){
//     return a + b + c
// }

// console.log(sum(...arr));

// const a = "the", b = "no"
// const c = {a, b}
// console.log(c)

// let obj2 = {
//     name: "John",
//     company: "ckmdlknd pvt ltd",
//     phone: 'hhdkjdh'
// }
// console.log({name: "Yotesh", company: 'ABZ', ...obj2})

const [person, setPerson] = useState([
    {
        class :'',
        roll: '',
        address: ''
}]);
setPerson([
    ...person,
    {
        class :'12A',
        roll: '17fsc',
        address: 'sncvsnb colony'
}
]);
console.log(useState.address);


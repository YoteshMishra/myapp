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

// const [person, setPerson] = useState([
//     {
//         class :'',
//         roll: '',
//         address: ''
// }]);
// setPerson([
//     ...person,
//     {
//         class :'12A',
//         roll: '17fsc',
//         address: 'sncvsnb colony'
// }
// ]);
// console.log(useState.address);

function sumOne(a, b, ...args){
    let multi = a * b
    let sum = 0;
    for (const arg of args){
        sum += arg;
    }
        return [sum, multi];
    }
    console.log(sumOne(2, 3, 5, 8));



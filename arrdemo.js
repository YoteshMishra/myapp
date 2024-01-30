// used array constructor
const x = new Array("Yotesh", "Ashish", 53, true);
console.log(x);

// used direct array
const arr = [true, 100, "Yotesh"]
console.log(arr)


// using index to accessing the array elements
const y = [1, 5, 9, 11, 13]
y.push(10);
y.unshift(0)
y.pop();
const len = y.length;
// const z = y[0]
// const w = y[4]
let z = y[len - 2];
console.log(len);
console.log(z)
console.log(y);
// console.log(w);

// loop through the array using a regular for or forEach loop, or any other loop

const fruits = ['Apple', 'PineApple', 'Orange', 'Grapes']
for(let i=0; i<fruits.length; i++){
    console.log(`Element at index ${i} is ${fruits[i]}`);
    }


    let w = [1, 5, 8, 10]
    let obj = Array.isArray(w);
    wCopy = w.slice();
    console.log(wCopy);
    console.log(Array.isArray([1, 5, 8, 10]));

    students = ['Yotesh M', 'Ashish M', 'Rahul C']
const fullNames = students.map((element, index) => {
    return {'fullName': element['f_name'] + ' ' + element['l_name']}
  });
  
  console.log(fullNames);


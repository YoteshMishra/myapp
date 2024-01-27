// With Destructring
const objects = ['table', 'iPhone', 'apple']
const [furniture, mobile, fruit] = objects
// console.log(objects);

// Without Destructuring
// const furniture = objects[0]
// const mobile = objects[1]
// const fruit = objects[2]

// With Destructuring Ex-1
function Fruit({apple}) {
    return (
        <div>
            This is an {apple}
        </div>
    )
}

// With Destructuring Ex-2

function Fruit(props) {
    const {apple, iphone, car} = props
    return (
        <div>
            This is an {apple}
        </div>
    )
}

// Without Destructuring
function Fruit(props) {
    return (
        <div>
            This is an {props.apple}
        </div>
    )
}
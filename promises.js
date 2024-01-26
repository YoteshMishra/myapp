const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network call
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async taks2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Yotesh", email: "yoteshmishra1853@gmai.com"})
    }, 1000)    
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({username: 'Yotesh Mishra', password: 'yotesh@8877'})
        } else {
            reject('ERROR: Something Went Wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The Promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    console.log("I am in promise");
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: 'JavaScript', password: 'yotesh@8877'})
        } else {
            reject('ERROR: JS Went Wrong')
        }
    }, 1000)
})

async function consumePromiseFive()
{
    try {
        // const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
        
    }
}

getAllUsers()




// // // Example function that takes a callback
// // function fetchData(callback) {
// //     // Simulating an asynchronous operation (e.g., fetching data from a server)
// //     setTimeout(function() {
// //         const data = 'Data received!';
// //         // Calling the callback function and passing data to it
// //         callback(data);
// //     }, 1000); // Simulating a delay of 2000ms (2 seconds)
// // }

// // // Callback function passed to fetchData
// // function processData(data) {
// //     console.log('Processing data:', data);
// // }

// // // Calling fetchData and passing the processData function as a callback
// // fetchData(processData);



// function fetchData(callback) {
//     setTimeout(function() {
//         const error = Math.random() < 0.5 ? new Error('Error fetching data') : null;
//         if (error) {
//             callback(error, null); // Pass error as the first argument
//         } else {
//             const data = 'Data received!';
//             callback(null, data); // Pass data as the second argument
//         }
//     }, 2000);
// }

// function processData(error, data) {
//     if (error) {
//         console.error('Error:', error.message);
//         // Handle the error appropriately, e.g., show an error message to the user
//     } else {
//         console.log('Processing data:', data);
//         // Process the data as intended
//     }
// }

// fetchData(processData);





 

// // Creating a promise
// const fetchData1 = new Promise((resolve, reject) => {
//     // Simulating an asynchronous operation (e.g., fetching data from a server)
//     setTimeout(() => {
//         const success = true; // Simulate success or failure
//         if (success) {
//             resolve('Data received!');
//         } else {
//             reject(new Error('Failed to fetch data'));
//         }
//     }, 2000); // Simulating a delay of 2000ms (2 seconds)
// });

// // Consuming the promise using .then() and .catch()
// fetchData1.then(data => {
//     console.log('Success:', data);
// }).catch(error => {
//     console.error('Error:', error);
// });




// let prom1 = new Promise ((resolve, reject)=> {
//     let a= Math.random();
//     if (a<0.5){
//     reject("no random no suppoting you")
//     }
//     else {
//         setTimeout(() => {
//             console.log("i am done");
//             resolve ("raja");
//         }, 2000 );
//     }

// });
// let prom2 = new Promise ((resolve, reject)=> {
//     let a= Math.random();
//     if (a<0.5){
//     reject("no random no suppoting you2")
//     }
//     else {
//         setTimeout(() => {
//             console.log("i am done 2");
//             resolve ("raja 2");
//         }, 1000 );
//     }

// });

// let p3 = Promise.allSettled ([prom1,prom2])

// p3.then ((a)=>{
     
//     console.log (a);
// }).catch ((err)=>{
//     console.log(err);
// });

async function getData (){
    return new Promise ((res,rej)=>{
        setTimeout(() => {
            res(555);
            
        }, 3000);

    })

}

console.log("loading modules");
console.log("Do somthng else");
console.log("Load data");
let data = await getData();
console.log (data);



// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


 

 
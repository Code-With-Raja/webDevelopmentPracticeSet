function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Some data');
        }, 1000);

        setTimeout(()=>{
            reject('Rejected')
        }, 2000);
    });
}

fetchData().then((result) => {
    console.log(result); // Outputs: Some data
});


async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Some data recived');
        }, 2000);
    });
}

async function getData() {
    const result = await fetchData();
    console.log(result); // Outputs: Some data
}

getData();

let Promise1 = new Promise (function (resolve,reject){
    alert('i am here');
    reject('reject');

    console.log('i am here');

    resolve('resoved');
    

}, 5000);

Promise1.then(function(){
    alert('fghfghdfgf');
});

Promise1.catch (function(){
    alert('cfdfdfgdc');
})


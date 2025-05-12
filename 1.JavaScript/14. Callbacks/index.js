// function loadScript (Src, callback){
//     let script = document.createElement('script');
//     script.src = Src;
//     script.onload=()=> callback (script);
//     document.head.append(script);
// };

// loadScript ('https://youtube.com',(script)=>{
//     alert('script is loaded');
//     alert(script.src);
// })


function fetchData(callback) {
    setTimeout(() => {
        const data = 'Some data';
        callback(data);
    }, 1000);
}

fetchData((result) => {
    console.log(result); // Outputs: Some data
    alert(result);
});

fetchData((data) => {
    processData(data, (processedData) => {
        saveData(processedData, (savedData) => {
            console.log('Data saved!');
        });
    });
});

function fetchData(callback) {
    // Simulate error
    const error = new Error('Something went wrong');
    callback(error, null);
}

fetchData((error, data) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log(data);
});

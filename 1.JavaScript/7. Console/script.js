// Console //


// 1) assert () // if any argument failed print a msg.

const x = 5;

console.assert(x > 10, 'x is not greater than 10');



// 2) clear () //

let con = document.getElementById("container");

console.clear(con);


// 3) log() //

let container = document.getElementById("container");

console.log(container);



// 4) warn() //

const userInput = 'dangerous';
console.warn('User input is %s', userInput);

const userId = 123;
const userRole = 'admin';

console.warn('User ID: %d has role: %s', userId, userRole);


function processUserData(user) {
    if (!user.email) {
        console.warn('User %s does not have an email address', user.name);
    }

    // Further processing...
}

const user = { name: 'Raja' };
processUserData(user); // Logs: User Alice does not have an email address



// 5) table() //

const users = {
    name: 'Alice',
    age: 30,
    location: 'Wonderland'
};

console.table(users);



// 6) error ()  //

const errorCode = 404;
const fileName = 'data.json';

console.error('Error %d: Unable to load file %s', errorCode, fileName);


function readFile(fileName) {
    if (!fileExists(fileName)) {
        console.error('File not found: %s', fileName);
    } else {
        // Read and process the file...
    }
}

function fileExists(fileName) {
    // Simulated file existence check
    return false;
}

readFile('nonexistent-file.txt'); // Logs: File not found: nonexistent-file.txt

try {
    throw new Error('Something went wrong!');
} catch (error) {
    console.error(error);
}



// 7) info()  //

let userName = "raja";
let userAge = 30;


console.info('User login:', userName);
console.info('User age:', userAge);


function initializeUserProfile(user1) {
    console.info('Initializing profile for user %s', user1.name);
    
    if (user1.age < 18) {
        console.info('User %s is under 18 years old.', user1.name);
    } else {
        console.info('User %s is an adult.', user1.name);
    }
}

const user1 = { name: 'Alice', age: 30 };
initializeUserProfile(user);
// Logs:
// Initializing profile for user Alice
// User Alice is an adult.






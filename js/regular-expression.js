// Regular Expression or Pattern Matching Technique

/*
// ================ exec()
let re;
re = /hello/;
re = /hello/i; // i is for 'case insensative'

console.log(re);
console.log(re.source);

let str = 'Hello World!';
let str2 = 'Hi there! Hello world';
console.log(str);

// exec() method tests for a match in a string. exec stands for execute
// exec() returns an array or a null

let result = re.exec(str);
console.log(result);
console.log(re.exec(str2));
*/

// ================= test()
// test returns true or false
let re2 = /hi/i;
let newStr = 'Hi sajjad';
console.log(re2.test(newStr));

// ================= match()
let re3 = /how/i;
let newStr2 = 'How are you?';
console.log(newStr2.match(re3));

// ==================== search()
// search() returns the first index number or -1
newStr2 = 'Sajjad, how are you?';
console.log(newStr2.search(re3));

// ============= replace()
// replace() returns new string
let re4 = /hello/i;
let newStr3 = 'Hello Sajjad!';
console.log(newStr3.replace(re4, 'hi'));

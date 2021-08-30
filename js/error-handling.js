// basically catch() er vetor j perameter thake setai error ta dhore ney

/*
console.log('BEFORE ERROR!');

try {
  // test();
  undefined.test();
} catch (err) {
  // console.log(err)
  console.log(err.message);
  console.log(err.name);
} finally {
  console.log("I'am inside finally");
}

console.log('AFTERR ERROR!');
*/

let number = 205;

try {
  if (number > 100) throw 'Too big number!';
  else if (number < 10) throw ' Too small number!';
} catch (err) {
  console.log(err)
}

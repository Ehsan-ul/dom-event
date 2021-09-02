let expression, str;

str = 'hello';

expression = /[a-z]/;

// ======= Bracess {} - Quantifier
expression = /hel{2}o/; // {} er majhe joto number thakbe, tar ager letter ta to to songkhok bar thakte hobe
expression = /hel{2, 5}o/; // {minimum, maximum}
expression = /hel{2,}o/; // minimum 2 bar, maximum joto iccha

// ======== parentheses () - Grouping
str = '+8801123456789';
expression = /^([0-9]){6}/; //str er first e 0 theke 9 er total 6 ta digit thaka lagbe.

// check bangladesh phone number
expression = /^01[0-9]{9}$/; // $ sign mane: eta diyei ses hobe
expression = /^\+8801[0-9]{9}$/;

// .........
str = '2x3x4x';
expression = /([0-9]x){3}/;

let regFun = (expression, str) => {
  if (expression.test(str)) {
    console.log(`'${str}' matches with '${expression.source}'`);
  } else {
    console.log(`'${str}' dosen't match with '${expression.source}'`);
  }
};

regFun(expression, str);

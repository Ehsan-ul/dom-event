let str, expression;

// =========== postal code
str = '1206';
expression = /^[0-9]{4}$/;

// =========== Phone Number
// patterns: 01776199121
expression = /^01[0-9]{9}$/;
str = '01776199121';

// patterns: +8801776199121
expression = /^\+8801[0-9]{9}$/;
str = '+8801776199121';

// pattern: +8801776199121  (here +88 is optional)
expression = /^(\+88)?01[0-9]{9}$/;
str = '+8801776199121'; // or str = '01776199121'

// when + and 88 both are optional
expression = /^(\+)?(88)?01[0-9]{9}$/;
str = '+01776199121';
str = '01776199121';
str = '8801776199121';
str = '+8801776199121';

// ========== email address
// ehsanulislam82@gmail.com
str = 'ehsanulislam82@gmail.com';
expression = /^([a-z0-9A-Z])+@gmail\.([a-z0-9A-Z])+[^\.]$/;

// ehsan82.semicolon@gmail.com
// expression = /^([a-zA-Z0-9]\.?)+([a-z0-9A-Z])+@([a-zA-Z0-9].?)+[^\.]$/;
// str = 'ehsan82.semicolon@gmail.com';
// str = 'info@mainlycoding.com';

regFun(str, expression);
function regFun(str, expression) {
  if (expression.test(str)) {
    console.log(`'${str}' matches with '${expression.source}'`);
  } else {
    console.log(`'${str}' doesn't matche with '${expression.source}'`);
  }
}

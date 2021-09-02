let str, expression;

str = 'hel lo*&{';
expression = /[a-z]/;
// word character
expression = /\w/; // word characters: 'alpha', 'numeric' or '_'
expression = /\w+/; // eker beshi word character thakbe
expression = /\W/; // non word character
expression = /\W+/; // one or more non word character

// digit
expression = /\d/; // digit
expression = /\d+/; // one or more digit

expression = /\D/; // non digit character
expression = /\D+/; // one or more non digit character

// white spaces
expression = /\s/; //white spaces
expression = /\S/; //non white spaces

// word boundary
// kono word er ses e or suru te only space thakbe or khali thakle kaj korbe.
expression = /\bhello\b/;

regFun(str, expression);

function regFun(str, expression) {
  if (expression.test(str)) {
    console.log(`'${str}' matches with '${expression.source}'`);
  } else {
    console.log(`'${str}' doesn't match with '${expression.source}'`);
  }
}

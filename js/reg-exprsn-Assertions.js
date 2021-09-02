let str, expression;

str = 'helloxy';
expression = /x(?=y)/; //x will be matched if only x is before y. ie: xy ek sathe thakbe

str = 'bla bla xyz';
expression = /x(?=yz)/; //x will be matched if only x is before yz. ie: xyz ek sathe thakbe

str = 'bxssoy';
expression = /x(?!y)/; // y and x er majhe kichu ekta thakte hobe. (one or more than one)

str = '+8801776199121'  // +88 diteo pari nao dite pari.
expression = /^(\+88)?01[0-9]{9}$/  // ? sign er age () bracket er majhe ja thakbe seta optional

regFun(str, expression);

function regFun(str, expression) {
  if (expression.test(str)) {
    console.log(`'${str}' matches with '${expression.source}'`);
  } else {
    console.log(`'${str}' doesn't match with '${expression.source}'`);
  }
}

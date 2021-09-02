// Literal and Meta Character

let str;
let expression;

str = 'Hello World!';

// >>>>>>>>>>>>>>>>>>>>>>>>  literal character
expression = /hello/i;
expression = /lo Wo/i;

// >>>>>>>>>>>>>>>>>>>>>  Meta Character
expression = /^hello/i; // must starts with this
expression = /hello$/i; // must ends with this
expression = /^hello$/i; // only this, no toher string
expression = /h.llo/i; // dot er jagay jekono character thaklei match korbe
expression = /h*llo/i; // * er jagay kichu na thakleo matcch korbe, thakleo match korbe. and onek gulo thakleo match korbe
expression = /he?llo/i; // ? sign er age je char thakbe obossoi sei char thaktei hobe or na thakleo colbe,, diff char thakle hobe na
expression = /he?llo\?/i; // ? sign last e use korar niyom

// >>>>>>>>>>>>>>  characters using brackets - []

expression = /h[ea]ello/i; // [] er vetor jekono ekta thaklei match korbe
expression = /[HP]ello/; // [] jodi first e thake, taile [] er vetor duita char ek sathe use holeo match korbe... ekta holeo match korbe
expression = /[^hp]ello/i; // [] er fist er h thaklei hobe.. er por ja iccha ta thakle somossa nai.
expression = /^[Hi]ello/; // [] bracket er age ^ sign thaka mane holo- [] bracket er vetore thaka fist jinish diyei shuru hote hobe.
expression = /[a-z]ello/; // ei range er j kono kichui match korbe
expression = /[A-Z]ello/; // ei range er j kono kichui match korbe
expression = /[a-z]/;

expression = /[A-Za-z]/; // uppercase + lowerase

expression = /[0-9]/;
expression = /^[0-9]/;
expression = /[^0-9]ello/; // [] er vitore ^ sign thaka mane oi range er kichu thaka jabe na.. onno kichu thakte hobe
expression = /[0-9][0-9]hello/; // duita digit diye suru korte hobe. na korleo match korbe
expression = /^[0-9][0-9]hello/; // duita digit diye suru kortei hobe (must)

regular(expression, str);

function regular(expression, str) {
  if (expression.test(str)) {
    console.log(`"${str}" matches with "${expression.source}"`);
  } else {
    console.log(`"${str}" dosen't matches with "${expression.source}"`);
  }
}

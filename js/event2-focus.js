// input focus
document.querySelector('#name').addEventListener('focus', inputFocus);

function inputFocus() {
  console.log('focused!');
  this.style.background = 'lightgrey';
}

// input focusOut
document.querySelector('#name').addEventListener('focusout', inputFocusOut);

function inputFocusOut() {
  this.style.background = '#FFEFE9';
}

// keyup
document.querySelector('#name').addEventListener('keyup', keyupFun);

function keyupFun() {
  // console.log(this.value);

  document.getElementById('inputP').innerText = this.value;
}

// ########### button clicked
document.getElementById('mybtn').addEventListener('click', message);

function message() {
  console.log('button is clicked');
}

// ############ color change with offsetX

document.querySelector('.div1-container').addEventListener('click', color);
document.querySelector('.div1-container').style.background = 'pink';

function color(e) {
  // let val = e;
  // val = e.target;
  // val = e.target.id;
  // val = e.timeStamp; // wesite open korar koto milisec por click kora holo
  // val = e.type;
  // val = e.clientY;
  // val = e.clientX;
  // val = e.offsetY;
  // val = e.offsetX;

  this.style.background = `#${e.offsetX}`;

  // console.log(val);
}

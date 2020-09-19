/* ****************************************************************************
1- IIFE
******************************************************************************* */

(function iife() {
  var text = 'Hello world';
  console.log(text);
})();

// console.log(text);

/* ****************************************************************************
2- Funciones anonimas
******************************************************************************* */
/*
const myArray = [ 1, 2, 3, 4, 5, 6 ];

// reducir
console.log('Reduce');
  (method) Array<number>.reduce(
    callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number,
    initialValue: number
  )

const acumulado = myArray.reduce(function(acc, value, index) {
  return acc + value;
}, 0);
console.log(acumulado);

function acumuladorNoAnonimo(acc, value, index) {
  return acc + value;
}
const acumuladoNoAnonimo = myArray.reduce(acumuladorNoAnonimo);
console.log(acumuladoNoAnonimo);
*/

/* ****************************************************************************
3- Callbacks
******************************************************************************* */
/*
fs = require('fs')
fs.readFile('./text.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
*/

/* ****************************************************************************
4- Arrow functions
******************************************************************************* */
/*
// iife
(() => { console.log('as iife')})();

// as lambda / callback
const arrowFnAcum = [ 1, 2, 3, 4, 5, 6 ].reduce((acc, value, index) => {
  return acc + value;
}, 0);
console.log(arrowFnAcum);

// as var
const myArrowFn = () => { console.log('Soy una ArrowFn'); };
myArrowFn();

const myObject = {
  value: 'some value',

  method: function() {
    return function() {
      console.log(this.value);
    }
  }
}

console.log(' *************************************** ');
myObject.method();
console.log(' *************************************** ');

function myFn(callbackFn) {
  callbackFn();
}

 myFn(myObject.method());

 const myObject2 = {
  value: 'some value',

  method: function() {
    return () => {
      console.log(this.value);
    }
  }
}

myFn(myObject2.method());
*/
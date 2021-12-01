let num = 266219;
let res = 1;

for (var i = 0; i < num.toString().length; i++) {
  res = res * num.toString()[i];
}

console.log(res); //the product of the digits of a number 266219

let cube = res ** 3; //past result in the third degree

console.log(cube.toString().slice(0, 2)); //first 2 digits of the cube

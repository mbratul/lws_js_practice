/* 
Arrow Function in JS
url: https://youtu.be/UwrmEUCaAIY?si=jRnjCAT1OvmE2hkS
 */

function number() {
  return 10;
}
console.log(number());

/* 
below is the arrow function body 
() => {} 
 */
let number1 = () => {
  return 11;
};
console.log(number1());

let number2 = () => 12; //single line arrow function statement
console.log(number2());

let number3 = () => console.log(13);
number3();

let number4 = (a, b) => {
  return a + b;
};
console.log(number4(10, 20));

let javascript = {
  name: "JavaScript",
  libraries: ["React", "Angular", "Vue"],
  printLibraries: function () {
    this.libraries.forEach((a) => {
      console.log(`${this.name} loves ${a}`);
    });
  },
};
javascript.printLibraries();

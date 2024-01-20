/* This is a multiple line comment.
The multiple line comment is finished here. */

console.log("Hello World"); // This is the way how to print anything in Java Script.

alert("If you exit from this site your pc will blast."); //one time
let fullName = prompt("Enter your name:"); // one time
let age = prompt("ENter your age:");

console.log(fullName, age);

let num = prompt("Enter a number:");
if (num % 5 === 0) {
	console.log(num, "is multiple of 5.");
} else {
	console.log(num, "isn't multiple of 5.");
}

let a = 5;
let b = 2;

console.log("a =", a, ", b =", b);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log(a % b);
a++;
console.log("a =", a);
console.log("a =", ++a);
a -= 2;
console.log("a =", a);
a *= 2;
console.log("a =", a);
a /= 3;
console.log("a =", a);
a **= 3;
console.log("a =", a);
a %= 2;
console.log("a =", a);

b--;
console.log("b =", b);
console.log("b =", --b);
b += 3;
console.log("b =", b);

let aa = 5;
let bb = 5;
let cc = "5";
console.log("aa =", 5);
console.log("bb =", 5);
console.log('cc = "5"');
console.log("aa == bb", aa == bb);
console.log("aa == cc", aa == cc);
console.log("aa === bb", aa === bb);
console.log("aa === cc", aa === cc);
console.log("aa !== cc", aa !== cc);

let aaa = 6;
let bbb = 5;
console.log("aaa =", aaa, ", bbb =", bbb);
let cond1 = aaa > bbb;
let cond2 = aaa < bbb;
let cond3 = aaa === 6;
console.log("cond1 && cond3 =", cond1 && aaa === 6);
console.log("cond1 && cond2 =", cond1 && cond2);
console.log("cond1 && cond2 =", cond1 || cond2);
console.log("!(aaa === 6) =", !cond3);

let mode = "dark";
let color;
if (mode === "dark") {
	color = "black";
}
if (mode === "light") {
	color = "white";
}
console.log(color);

let mode2 = "light";
let color2;
if (mode2 === "dark") {
	color2 = "Black";
} else {
	color2 = "white";
}
console.log(color2);

let mode3 = "red";
let color3;
if (mode3 === "dark") {
	color3 = "black";
} else if (mode3 === "yellow") {
	color3 = "yellow";
} else if (mode3 === "red") {
	color3 = "red";
} else {
	color3 = "white";
}
console.log(color3);

let age1 = 23;
let result = age1 >= 18 ? "adult" : "not adult";
console.log(result);

let score = prompt("Enter your score(0-100):");

let grade;

if (score >= 90 && score <= 100) {
	grade = "A;";
} else if (score >= 70 && score <= 89) {
	grade = "b";
} else if (score >= 60 && score <= 69) {
	grade = "C";
} else if (score >= 50 && score <= 59) {
	grade = "D";
} else if (score >= 0 && score <= 49) {
	grade = "F";
}

console.log(
	"According to your scores, ( score =",
	score,
	") your grade is:",
	grade
);

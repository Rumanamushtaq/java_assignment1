var color = "Red";
console.log(typeof color); // Prints: string

var DOB = 1995;
console.log(typeof DOB); // Prints: number

var one = true;
console.log(typeof one); // Prints: boolean

var student = null;
console.log(typeof student);
 // Prints: object


 var condition = undefined;
console.log(typeof condition); // Prints: undefined

var area = Symbol();
console.log(typeof area); // Prints: symbol

var a=10;
if (a>18) {
console.log("User is eligible to vote");}
 else {
 console.log("User is not eligible to vote"); //Prints: This is false
}
var number=20;
function greet(number) {
    console.log("1" + number);
  }
  
  var colors=["Red, Blue, Green, Yellow, Pink, white, Black, Orange,Purple,Lavender,Ruby, Topaz, Green, Navy blue, Brown, Peach,Magenta, Grey, Lime, Beige"];
  console.log(colors);

  var colors = ["Red, Blue, Green, Yellow, Pink, white, Black, Orange,Purple,Lavender,Ruby, Topaz, Green, Navy blue, Brown, Peach,Magenta, Grey, Lime, Beige"];
colors.push("cyan");
console.log(colors);



var colors = ["Red, Blue, Green, Yellow, Pink, white, Black, Orange,Purple,Lavender,Ruby, Topaz, Green, Navy blue, Brown, Peach,Magenta, Grey, Lime, Beige"];
colors.unshift("cyan");
console.log(colors);



var animals = ["Dog", "Elephant", "Tiger"];
animals.pop();
console.log(animals); // Prints: ["Dog", "Elephant"]

var animals = ["Dog", "Elephant", "Tiger"];
animals.shift();
console.log(animals); // Prints: ["Elephant", "Tiger"]

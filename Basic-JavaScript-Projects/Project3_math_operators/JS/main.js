//Addition
function addition_Function() {
    var Addition = 10 + 5;
    document.getElementById("Addition").innerHTML = "10 + 5 = " + Addition;
}

//Subtraction
function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Subtraction").innerHTML = "5 - 2 = " + Subtraction;
}

//Math round
function round() {
    document.getElementById("round").innerHTML = "25.8 " + Math.round(25.8);}


//Multiplication and Division
function Multiplication() {
    var simple_Math = 6 * 9;
    document.getElementById("Multiplication").innerHTML = "6 x 8 = " + simple_Math;
}

//division
function division() {
    var simple_Math = 48 / 6;
    document.getElementById("division").innerHTML = "48 / 6 = " + simple_Math;
}

//Multiple Operations
function more_Math() {
    var simple_Math = (1 + 2) * 10  / 2 -5;
    document.getElementById("operation").innerHTML = + simple_Math; //1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals//

}

// Increment and decrement op
var Incrementnumber = 5;
function Increment() {
     
    Incrementnumber++;
    document.getElementById("Increment").innerHTML = Incrementnumber;
}


var Decrementnumber = 5.25;
function Decrement() {
    Decrementnumber--;
    document.getElementById("Decrement").innerHTML = Decrementnumber;
}
   

//math.random()
window.alert(Math.random() * 100);


console.log(document.getElementById("Math")) 
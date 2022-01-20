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


//Modulas operator
function Modulas_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("modulas").innerHTML = + simple_Math; //when you divide 25 by 6 you have a remainder of://
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
   


console.log(document.getElementById("Math")) 
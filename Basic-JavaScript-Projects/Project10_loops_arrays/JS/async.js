/*============================
        A WHILE LOOP
=============================*/
let text = "";          //the code in the loop will run, over and over
let i = 0;              // again, as long as a varibale (i) is less than 10
while (i < 10) {
    text += "<br> The number is " + i;
    i++;
}
document.getElementById("loop").innerHTML = text;


/*===========================
    Length Property
============================*/
// let text = "Hello World!";
// let length = text.length;

// document.getElementById("property").innerHTML = length;

/*==========================
        For Loops
===========================*/
// For loops is used to repeat a section of code a number of times
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

/*==============================
    Arrays and Objects
===============================*/
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}

/*==============================
        Constant Function
===============================*/
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = " The brand of the guitar is " +
        Musical_Instrument.brand + " was " + Musical_Instrument.price;
}

/*==============================
        Let Keyword
===============================*/
//  var x = 10; // x is 10                 //Redclaring a Variable using "var"
//  {
//         var x = 2 //x is 2
//  }
//  document.getElementById("let").innerHTML = x;
 
 /*=============================
        The Return Statement
===============================*/
// document.getElementById("Return").innerHTML = myFunction("Mark")

// function myFunction(name) {
//         return "Hello " + name;
// }

/*===================
        Objects
====================*/
// let car = {
//         make: "Dodge ",
//         model: "Viper ",
//         year: "2021 ",
//         color: "red ",
//         description : function() {
//                 return "The car is a " + this.year + this.color + this.make + this.model;
//         }
// };
// document.getElementById("Car_Object").innerHTML = car.description();

/*=============================
        Break and Continue
==============================*/
function break_and_continue () {
        
        let number = "";                        //A loop with a break statement
        for (let i = 0; i < 10; i++) {
                if (i === 3) { break; }
                text += " The number is " + i + "<br>"
        }
        
        document.getElementById("BNC").innerHTML = text;        
        
        let numbers = "";                               //a loop with a continue statment
        for (let i = 0; i < 10; i++) {
                if (i === 3) { continue; }
                text += " The number is " + i + "<br>";
        }
        
        document.getElementById("continue").innerHTML = text
}
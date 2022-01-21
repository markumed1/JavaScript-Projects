/*=======================================
    Constructor function "new" and "This"
=========================================*/
class Vehicle {
    constructor(Make, Model, Year, Color) {
        this.Vehicle_Make = Make;
        this.Vehicle_Model = Model;
        this.Vehicle_Year = Year;
        this.Vehicle_Color = Color;
    }
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik Drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}


  
/*===============================
    Nested Function
=================================*/
document.getElementById("Nested_Function").innerHTML = add();
function add() {
    let counter = 0;
    function plus () {counter += 1;}
    plus();
    return counter;
}
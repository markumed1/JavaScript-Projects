// function Vehicle (Make, Model, Year, Color) {
//     this.Vehicle_Make = Make;
//     this.Vehicle_Model = Model;
//     this.Vehicle_Year = Year;
//     this.Vehicle_Color = Color;
// }

// var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
// var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
// var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
// function myFunction() {
//     document.getElementById("Keywords_and_Constructors").innerHTML = 
//     "Erik Drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model +
//     " manufactured in " + Erik.Vehicle_Year;
// }

// Constructor function for Persons obejects
class Person {
    constructor(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }
}

const myFather = new Person("John", "Doe", 50, "blue");

//Display age
document.getElementById("display").innerHTML = 
"My father is " + myFather.age + "50";
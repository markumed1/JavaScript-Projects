/*===================================== 
        global variable
=======================================*/
var x = 10;
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();

/*======================================
        local variable
========================================*/
function Add_numbers_1() {
    var x = 10;
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100);
    }
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {
    var x = 10;
    console.log(15 + x);
}
function Add_numbers_2() {
    console.log(x + 100);
}
Add_numbers_1();
Add_numbers_1();

/*=======================================
        Date.hours
=========================================*/
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

const d = new Date();
let hour = d.getHours();
document.getElementById("Aroha").innerHTML = hour;

/*===========================================
        Else Statement
=============================================*/
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

/*============================================
        Else If function
==============================================*/
function Time_function() {
    var Time = new Date().getHours();
    var Replay;
    if (Time < 12 == Time > 0) {
        Replay = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Replay = "It is afternoon.";
    }
    else {
        Replay = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Replay;
}


/*==========================================
         Concat() Method
============================================*/
function full_Sentence() {       //concat() method concatenates aka "connects" two or more strings.
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var Whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = Whole_sentence;
}

/*=====================================
        Slice() Method
=======================================*/
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33); //the numbers indicate which characters in your string will be cut out and displayed. This code will display "Johnny".
    document.getElementById("Slice").innerHTML = Section;
}

/*============================
    toString() Method
==============================*/
let num = "15";                 //toString returns number as a string
let text = num.toString();      
document.getElementById("toString()").innerHTML = text;

/*======================================
        toPrecision() Method 
========================================*/
function precision_Method() {       //Formats a number to a specified length
    var x = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}

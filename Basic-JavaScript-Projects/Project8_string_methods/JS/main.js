// /*==========================================
//          Concat Method
// ============================================*/
// function full_Sentence() {       //concat() method concatenates aka "connects" two or more strings.
//     var part_1 = "I have ";
//     var part_2 = "made this ";
//     var part_3 = "into a complete ";
//     var part_4 = "sentence.";
//     var Whole_sentence = part_1.concat(part_2, part_3, part_4);
//     document.getElementById("Concatenate").innerHTML = Whole_sentence;
// }

// /*=====================================
//         Slice Method
// =======================================*/
// function slice_Method() {
//     var Sentence = "All work and no play makes Johnny a dull boy.";
//     var Section = Sentence.slice(27,33); //the numbers indicate which characters in your string will be cut out and displayed. This code will display "Johnny".
//     document.getElementById("Slice").innerHTML = Section;
// }

// /*============================
//     toUpper Case method
// ==============================*/
// let text = "Hello World!";
// let result = text.toUpperCase();        //toUpperCase() converts a string to uppercase letters
// document.getElementById("UpperCase").innerHTML = result;

// /*=============================
//         Number Methods
// ===============================*/
// function string_Method() {       //Number methods assist you in working with numbers.
//     var x=182;
//     document.getElementById("Numbers_to_string").innerHTML = x.toString();
// }

// /*======================================
//         To Precision Method 
// ========================================*/
// function precision_Method() {       //Formats a number to a specified length
//     var x = 12938.3012987376112;
//     document.getElementById("Precision").innerHTML = x.toPrecision(10);
// }

/*==============================
    toFixed Method
================================*/
// let num = 5.56789;
// let n = num.toFixed();
// document.getElementById("toFixed").innerHTML = n;

/*===============================
    valueOf() Method
=================================*/
// let text = "Hello World!";      //valueOf() returns the primitive value("data that is not an object and has no methods") of a string
// let result = text.valueOf();    

// document.getElementById("valueOf").innerHTML = result;

/*================================
    Countdown
=================================*/
function Countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds -1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000)
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}
    
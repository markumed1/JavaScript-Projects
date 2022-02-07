function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value; 
    var Color_String = " is a great color! ";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Black":
            Color_Output = "Black" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "White":
            Color_Output = "White" + Color_String;
        break;
        case "Orange":
            Color_Output = "Orange" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
        Color_Output = "Please enter a color exactly as written on the above list.";
    }   
    document.getElementById("Output").innerHTML = Color_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(230,115,70,0,2*Math.PI);
ctx.stroke();

var c = document.getElementById("myBox");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(0.5, "red");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);
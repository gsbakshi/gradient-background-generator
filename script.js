var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector("#random");

// Set Initial Gradient Values for h3 input on page load
color1.setAttribute("value", "#00ff00");
color2.setAttribute("value", "#ff0000");

// get initial CSS Property and create h3 on page load
// var cssGradeProperty = window.getComputedStyle(body).getPropertyValue("background-image");
// css.textContent = cssGradeProperty;
css.textContent = color1.value + ", " + color2.value;

// Generate Random Color Hex
function createRandom() {
    var code = Math.floor(Math.random()*16777216).toString(16);
    if(code.length<6){
        code = Math.floor(Math.random()*16777216).toString(16);
    }
    var hex = "#"+code;
    return hex;
}

// Create Random Gradient
function setRandom() {
    var random1 = createRandom();
    var random2 = createRandom();
    body.style.background = "linear-gradient(to right, "+ random1 +", " + random2 + ")";
    // css.textContent = body.style.background;
    css.textContent = random1 + ", " + random2;
    color1.setAttribute("value", random1);
    color2.setAttribute("value", random2);
}

// Set gradient and create h3 text
function setGrade() {
    body.style.background = "linear-gradient(to right, "+ color1.value + ", "+ color2.value+ ")";
    // css.textContent = body.style.background;
    css.textContent = color1.value + ", " + color2.value;
}

// Listener for color input
color1.addEventListener("input", setGrade);
color2.addEventListener("input", setGrade);
random.addEventListener("click", setRandom);
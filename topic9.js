function touchFunction() {
document.getElementById("touchIt").innerHTML = "It worked!  You touched the paragraph, and it triggered the function!";
}


// This is the touch annimation box that moves down and changes colors when touched
var x = document.getElementById("animatedTouch");

// Start the animation with JavaScript
function animatedTouchFunction() {
    x.style.WebkitAnimation = "mymove 4s 2";
    // Code for Chrome, Safari and Opera
    x.style.animation = "mymove 4s 2";
    // Standard syntax
}

// Code for Chrome, Safari and Opera
x.addEventListener("webkitAnimationStart", myStartFunction);
x.addEventListener("webkitAnimationIteration", myRepeatFunction);
x.addEventListener("webkitAnimationEnd", myEndFunction);

// Standard syntax
x.addEventListener("animationstart", myStartFunction);
x.addEventListener("animationiteration", myRepeatFunction);
x.addEventListener("animationend", myEndFunction);

function myStartFunction() {
    this.innerHTML = "animationstart event occured - You have started the annimation";
    this.style.backgroundColor = "lightgreen";
}

function myRepeatFunction() {
    this.innerHTML = "animationiteration event occured - The animation was played again";
    this.style.backgroundColor = "teal";
}

function myEndFunction() {
    this.innerHTML = "animationend event occured - The animation has finished";
    this.style.backgroundColor = "red";
}

//this is the function to change the paragraph text color from pink to green when clicked on.
function mouseDown() {
    document.getElementById("textChange").style.color = "pink";
}

function mouseUp() {
    document.getElementById("textChange").style.color = "green";
}

function myFunction(){
// Code for Safari 3.1 to 6.0
document.getElementById("myHover").style.WebkitTransitionProperty = "width, height";
// Standard syntax

test = document.getElementById("myHover");
    test.style.transitionProperty = "width, height";
}


/* This is supposed to take an input text field and trigger the alert */

// Get the input field
var input = document.getElementById("myInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("myBtn").click();
    }
});

var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});

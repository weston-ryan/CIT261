function myFunction() {
    document.getElementById("myHover").style.WebkitTransitionProperty = "width, height"; // Code for Safari 3.1 to 6.0
    document.getElementById("myHover").style.transitionProperty = "width, height";     // Standard syntax
}

$("button")
 .on("mousedown", function(){
    $("#message").text("mousedown");
})
.on("click", function() {
    $("#message").text("click");
});


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

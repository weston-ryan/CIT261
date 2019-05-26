var square = document.getElementById("square"),
    clickMe = document.getElementById('clickMe');

//when clicked turn it red
function runManip () {

    var button = this;
    square.style.backgroundColor = "red";
    button.setAttribute("disabled", "true");
    setTimeout(clearDemo, 1000, button);
}

//after turning it red, default back to light green.
function clearDemo (button) {
    var square = document.getElementById("square");
    square.style.backgroundColor = "lightgreen";
    button.removeAttribute("disabled");
}

clickMe.onclick = runManip;



//change the background image to eggshell if can't find image, otherwise tile image
    function backgroundChange() {
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('weatherPine.jpg')";
}


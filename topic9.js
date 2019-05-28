function touchFunction() {
    document.getElementById("touchIt").innerHTML = "It worked!  You touched the paragraph, and it triggered the function!";
}



// This is the touch annimation box that moves down and changes colors when touched
var touchAnimate = document.getElementById("animatedTouch");

// Start the animation with JavaScript
function animatedTouchFunction() {
    touchAnimate.style.WebkitAnimation = "mymove 4s 2";
    // Code for Chrome, Safari and Opera
    touchAnimate.style.animation = "mymove 4s 2";
    // Standard syntax
}

// Code for Chrome, Safari and Opera
touchAnimate.addEventListener("webkitAnimationStart", myStartFunction);
touchAnimate.addEventListener("webkitAnimationIteration", myRepeatFunction);
touchAnimate.addEventListener("webkitAnimationEnd", myEndFunction);

// Standard syntatouchAnimate
touchAnimate.addEventListener("animationstart", myStartFunction);
touchAnimate.addEventListener("animationiteration", myRepeatFunction);
touchAnimate.addEventListener("animationend", myEndFunction);

// this is the first animation function to run when first touched
function myStartFunction() {
    this.innerHTML = "Animation start event occured - You have started the annimation";
    this.style.backgroundColor = "lightgreen";
}

// this is the second animation function to rerun after the first has run
function myRepeatFunction() {
    this.innerHTML = "Animation repeat event occured - The animation was played again";
    this.style.backgroundColor = "teal";
}

// this is the final function, to "end" the animation
function myEndFunction() {
    this.innerHTML = "Animation end event occured - The animation has finished";
    this.style.backgroundColor = "red";
}

//this is the function for the touch transition

(function (touchTransition) {

    var myTouch, myTouch2;
    //on touch start the transition
    touchTransition.getElementById('pic').addEventListener('touchstart',
        function () {
            myTouch = this.firstChild;
            myTouch2 = myTouch.nextSibling;

            if (myTouch.nodeType === 1) {
                myTouch.style.opacity = 0;
                myTouch.style.transition = 'all .6s ease-in-out';
            } else {
                myTouch2.style.opacity = 0;
                myTouch2.style.transition = 'all 0.6s ease-in-out';
            }
        }, false);
    //this will end the transition
    touchTransition.getElementById('pic').addEventListener('touchend',
        function () {
            if (myTouch.nodeType === 1) {
                myTouch.style.opacity = 1;
                myTouch.style.transition = 'all .6s ease-in-out';
            } else {
                myTouch2.style.opacity = 1;
                myTouch2.style.transition = 'all 0.6s ease-in-out';
            }
        }, false);
}(document));

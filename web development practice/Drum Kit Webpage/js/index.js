// Mouse click
for(i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonHTML = this.innerHTML;
        keyPress(buttonHTML);
        buttonAnimation(buttonHTML);
    });
}

// Keyboard keypress
document.addEventListener("keydown",function(event) {
    keyPress(event.key);
    buttonAnimation(event.key);

})

// Switch statement
function keyPress (key) {
switch (key) {
        case 'w':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case 'a':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case 's':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case 'd':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'j':
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

        case 'k':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case 'l':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
    default:
        console.log("You are pressing the wrong button");
        break;
}
}

// Adding animation
function buttonAnimation(currentButton) {
    var activeButton = document.querySelector("." + currentButton);
    activeButton.classList.add("pressed");

    // Adding delay
    setTimeout(function() {
        activeButton.classList.remove("pressed")
    },100);
}
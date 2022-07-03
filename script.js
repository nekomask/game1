// Javascript file for jumping game

let character =
    document.getElementById("character");
let block = document.getElementById("block");

function jump() {

    //adding animate class if it hasn't already been added to allow animation to complete to prevent spamming
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
// removes class after function so that we can reload the class to jump again
    setTimeout(function() {
        character.classList.remove("animate");
    }, 500) 
}
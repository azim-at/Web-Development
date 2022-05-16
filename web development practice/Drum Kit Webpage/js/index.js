for(i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", onClick);
}
function onClick() {
    alert("I got clicked");
}
const showMenu = () => {
    var x = document.getElementsByClassName("hamburger-menu");
    if (x[0].style.display === "block") {
        x[0].style.display = "none";
    } else {
        x[0].style.display = "block";
    }
}

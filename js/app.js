function toggleMenu() {

    document
        .getElementById("sideMenu")
        .classList.toggle("active");

    document
        .getElementById("overlay")
        .classList.toggle("active");
}

fetch("menu.html")
.then(response => response.text())
.then(data => {
    document.getElementById("menu-container").innerHTML = data;
});

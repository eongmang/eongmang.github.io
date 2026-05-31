function toggleMenu(){

    document.getElementById("sideMenu")
        .classList.toggle("active");

    document.getElementById("overlay")
        .classList.toggle("active");
}

/* 메뉴 삽입 */
fetch("includes/menu.html")
.then(res => res.text())
.then(data => {
    document.body.insertAdjacentHTML("afterbegin", data);
});

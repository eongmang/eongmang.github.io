// 메뉴 삽입
fetch("includes/menu.html")
  .then(res => res.text())
  .then(data => {
    document.body.insertAdjacentHTML("afterbegin", data);
  })
  .catch(err => {
    console.error("메뉴 로딩 실패:", err);
  });

// 메뉴 토글
function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");

  if (!menu || !overlay) return; // 안전장치

  menu.classList.toggle("active");
  overlay.classList.toggle("active");
}

/* =========================
   공통 메뉴 스크립트
========================= */

// 메뉴 HTML 로드
fetch("includes/menu.html")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP 오류: ${response.status}`);
    }
    return response.text();
  })
  .then(html => {
    document.body.insertAdjacentHTML("afterbegin", html);

    // 메뉴 로드 후 이벤트 등록
    initializeMenu();
  })
  .catch(error => {
    console.error("메뉴 로딩 실패:", error);
  });

/* =========================
   메뉴 초기화
========================= */
function initializeMenu() {

  // 오버레이 클릭 시 닫기
  const overlay = document.getElementById("overlay");

  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }

  // 메뉴 링크 클릭 시 닫기
  document.querySelectorAll("#sideMenu a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // ESC 키로 닫기
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

/* =========================
   메뉴 열기/닫기
========================= */
function toggleMenu() {

  const menu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");

  if (!menu || !overlay) return;

  const isOpen = menu.classList.contains("active");

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

/* =========================
   메뉴 열기
========================= */
function openMenu() {

  const menu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");

  if (!menu || !overlay) return;

  menu.classList.add("active");
  overlay.classList.add("active");
  document.body.classList.add("menu-open");
}

/* =========================
   메뉴 닫기
========================= */
function closeMenu() {

  const menu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");

  if (!menu || !overlay) return;

  menu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("menu-open");
}

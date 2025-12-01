/* == 平滑捲動 == */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
      });
    }
  });
});

/* == 目錄開啟 / 關閉動畫 == */
const sidebar = document.querySelector(".sidebar");
const menuToggle = document.getElementById("menu-toggle");

menuToggle.addEventListener("change", function () {
  if (this.checked) {
    sidebar.classList.add("open");
  } else {
    sidebar.classList.remove("open");
  }
});

/* == 字體縮放 == */
let fontSize = 100; // 百分比

function applyFontSize() {
  document.documentElement.style.fontSize = fontSize + "%";
}

function increaseFont() {
  fontSize += 10;
  applyFontSize();
}

function decreaseFont() {
  fontSize = Math.max(50, fontSize - 10);
  applyFontSize();
}

// 快捷鍵
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key === "+") increaseFont();
  if (e.ctrlKey && e.key === "-") decreaseFont();
});

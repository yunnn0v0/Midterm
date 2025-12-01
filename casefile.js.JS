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

let fontSize = 100; // 百分比
function applyFontSize() {
  document.documentElement.style.fontSize = fontSize + "%";
}
function increaseFont() { fontSize += 10; applyFontSize(); }
function decreaseFont() { fontSize = Math.max(50, fontSize - 10); applyFontSize(); }

/* == 字體縮放 == */
let fontSize = 100; // 預設 100%

function applyFontSize() {
  document.documentElement.style.fontSize = fontSize + "%";
}

// 增加
function increaseFont() {
  fontSize += 10;
  applyFontSize();
}

// 減少
function decreaseFont() {
  fontSize = Math.max(50, fontSize - 10); // 最小 50%
  applyFontSize();
}

// 快捷鍵
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.key === "+") {
    increaseFont();
  }
  if (e.ctrlKey && e.key === "-") {
    decreaseFont();
  }
});

/* ==目錄可滑動 == */
sidebar.addEventListener("wheel", function (event) {
  // 防止 body 捲動
  event.stopPropagation();
});

function increaseFont() {
  document.body.style.fontSize =
    parseFloat(getComputedStyle(document.body).fontSize) + 1 + "px";
}

function decreaseFont() {
  document.body.style.fontSize =
    parseFloat(getComputedStyle(document.body).fontSize) - 1 + "px";
}
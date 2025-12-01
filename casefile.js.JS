/* ===== 平滑滾動 ===== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      window.scrollTo({
        top: target.offsetTop - headerHeight - 20,
        behavior: "smooth"
      });
    }
  });
});

/* ===== 目錄開關 ===== */
const sidebar = document.querySelector(".sidebar");
const menuToggle = document.getElementById("menu-toggle");
menuToggle.addEventListener("change", function() {
  if (this.checked) sidebar.classList.add("open");
  else sidebar.classList.remove("open");
});

/* ===== 字體縮放 ===== */
let fontSize = 100; // 百分比
function applyFontSize() {
  document.documentElement.style.fontSize = fontSize + "%";
}
function increaseFont() { fontSize += 10; applyFontSize(); }
function decreaseFont() { fontSize = Math.max(50, fontSize - 10); applyFontSize(); }
document.addEventListener("keydown", function(e){
  if(e.ctrlKey && e.key === "+") increaseFont();
  if(e.ctrlKey && e.key === "-") decreaseFont();
});

/* ===== 劇照淡入動畫 ===== */
const sections = document.querySelectorAll('.movie-section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.transition = 'opacity 1s, transform 1s';
      observer.unobserve(entry.target);
    }
  });
},{ threshold: 0.2 });
sections.forEach(section => observer.observe(section));

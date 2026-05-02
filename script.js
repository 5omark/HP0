const elements = document.querySelectorAll("section");

function showElements() {
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 50) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
}

// 初期状態（最初から表示）
elements.forEach(el => {
  el.style.opacity = 1;
  el.style.transform = "translateY(0)";
});

// スクロール時だけアニメーション
window.addEventListener("scroll", showElements);

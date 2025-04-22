// js/main.js

// Typing effect for header
function typeWriterEffect(el, text, speed) {
    let i = 0;
    (function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i++);
        setTimeout(type, speed);
      }
    })();
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const headerEl = document.querySelector('header h1');
    const text = headerEl.textContent;
    headerEl.textContent = '';
    typeWriterEffect(headerEl, text, 100);
  });
  
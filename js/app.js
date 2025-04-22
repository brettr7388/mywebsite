// Back to top
const backBtn = document.getElementById('backToTopBtn');
window.addEventListener('scroll',()=>{
  if(window.scrollY>300) backBtn.classList.add('show');
  else backBtn.classList.remove('show');
});
backBtn.addEventListener('click',e=>{
  e.preventDefault();
  window.scrollTo({top:0,behavior:'smooth'});
});

// Scroll‑spy
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',()=>{
  const fromTop = window.scrollY + 100;
  navLinks.forEach(link=>{
    const sec = document.querySelector(link.hash);
    if(sec.offsetTop <= fromTop && sec.offsetTop + sec.offsetHeight > fromTop){
      link.classList.add('active');
    } else link.classList.remove('active');
  });
});

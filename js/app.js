// Sticky‑back‑to‑top
const backBtn = document.getElementById('backToTopBtn');
window.addEventListener('scroll',()=>{
  if(window.scrollY>300) backBtn.classList.add('show');
  else backBtn.classList.remove('show');
});
backBtn.addEventListener('click',e=>{
  e.preventDefault();
  window.scrollTo({top:0,behavior:'smooth'});
});

// Scroll‑spy active link
const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',()=>{
  let fromTop = window.scrollY + 80;
  navLinks.forEach(link=>{
    let section = document.querySelector(link.hash);
    if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
      link.classList.add('active');
    } else link.classList.remove('active');
  });
});

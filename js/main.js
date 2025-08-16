// Mobile nav toggle
const btn = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Footer year auto-update
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();

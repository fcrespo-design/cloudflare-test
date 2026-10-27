// Aparición al hacer scroll. Sin IntersectionObserver, todo queda visible.
const rises = document.querySelectorAll('.rise');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  rises.forEach(el => io.observe(el));
} else {
  rises.forEach(el => el.classList.add('in'));
}

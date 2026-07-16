// Inder Sawhney — portfolio interactions

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---- Scroll progress bar (styled like a build progress bar) ----
const bar = document.createElement('div');
bar.className = 'progress-bar';
bar.setAttribute('aria-hidden', 'true');
document.body.appendChild(bar);

function updateProgress() {
  const doc = document.documentElement;
  const max = doc.scrollHeight - window.innerHeight;
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
  bar.style.width = pct + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

// ---- Count-up numbers ----
function formatNum(n) {
  return Math.round(n).toLocaleString('en-US');
}

function animateCount(el) {
  const target = parseFloat(el.dataset.target);
  if (prefersReduced || isNaN(target)) {
    el.textContent = formatNum(target || 0);
    return;
  }
  const duration = 1200;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
    el.textContent = formatNum(target * eased);
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// ---- Scroll-triggered reveals + counters ----
const revealEls = document.querySelectorAll('.reveal');
const countEls = document.querySelectorAll('.count');

if (prefersReduced || !('IntersectionObserver' in window)) {
  revealEls.forEach(el => el.classList.add('visible'));
  countEls.forEach(el => animateCount(el));
} else {
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach(el => revealObserver.observe(el));

  const countObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  countEls.forEach(el => countObserver.observe(el));
}

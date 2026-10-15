export const smoothScroll = (e, path) => {
  if (!path || !path.startsWith('#')) return;
  e.preventDefault();

  const target = document.querySelector(path);
  if (!target && path !== '#home' && path !== '#hero') return;

  const headerOffset = 80; // Tinggi navbar
  const targetPosition = (path === '#home' || path === '#hero') 
    ? 0 
    : Math.max(0, target.getBoundingClientRect().top + window.pageYOffset - headerOffset);
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 600; // Durasi scroll dalam milidetik (0.6 detik)
  let start = null;

  // Fungsi easing (easeOutCubic) agar luncuran halus dan tidak ngagetin
  function animationStep(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percentage = Math.min(progress / duration, 1);

    // Kurva matematika penyesuai kecepatan
    const ease = 1 - Math.pow(1 - percentage, 3);

    window.scrollTo(0, startPosition + distance * ease);

    if (progress < duration) {
      window.requestAnimationFrame(animationStep);
    }
  }

  window.requestAnimationFrame(animationStep);
};
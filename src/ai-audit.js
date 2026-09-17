/* DinoCodeLA AI Audit landing page helpers.
   Keep CRM/form/calendar behavior native to GoHighLevel whenever possible. */
(function () {
  const sticky = document.getElementById('dino-mobile-sticky');
  const qualify = document.getElementById('qualify');

  if (sticky && qualify && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        sticky.classList.toggle('dino-hidden', entry.isIntersecting);
      });
    }, { threshold: 0.15 });
    observer.observe(qualify);
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();

document.addEventListener('DOMContentLoaded', function () {

   // ── Mobile Navigation ──────────────────────────────────────
   const navToggle = document.querySelector('.nav-toggle');
   const nav = document.querySelector('.nav');

   if (navToggle && nav) {
      navToggle.addEventListener('click', function () {
         const isOpen = nav.classList.toggle('active');
         navToggle.setAttribute('aria-expanded', isOpen);
      });
      document.querySelectorAll('.nav-link').forEach(function (link) {
         link.addEventListener('click', function () {
            nav.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
         });
      });
   }

   // ── Scroll Animations ──────────────────────────────────────
   const animatedEls = document.querySelectorAll('[data-animate]');
   if (!animatedEls.length) return;

   const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
         if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
         }
      });
   }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

   animatedEls.forEach(function (el) {
      observer.observe(el);
   });

});

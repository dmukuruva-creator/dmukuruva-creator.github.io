document.addEventListener('DOMContentLoaded', function () {
   const navToggle = document.querySelector('.nav-toggle');
   const nav = document.querySelector('.nav');

   if (!navToggle || !nav) return;

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
});

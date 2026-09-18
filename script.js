/**
 * ENAMOR#ARTE - Lógica Editorial de Alta Joyería
 * Integración con WhatsApp oficial de Laura: +54 9 261 649 7321
 */

document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_PHONE = '5492616497321';

  // 1. Menú Móvil
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const auraNav = document.getElementById('auraNav');

  if (mobileMenuBtn && auraNav) {
    mobileMenuBtn.addEventListener('click', () => {
      auraNav.classList.toggle('is-active');
    });

    document.querySelectorAll('.aura-nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        auraNav.classList.remove('is-active');
      });
    });
  }


  // 3. Paginación visual del Hero
  const dots = document.querySelectorAll('.hero-pagination-dots .dot');
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
  });
});

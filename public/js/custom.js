// Robust hero image rotator for sunset mode
(function () {
  console.log('[heroRotator] Script loaded');
  const HERO_IMAGES = [
    '/images/Hero_image_sunset_mode_1.png',
    '/images/Hero_image_sunset_mode_2.png',
    '/images/Hero_image_sunset_mode_3.png',
  ];
  const ROTATE_MS = 20000;
  let idx = 0;
  let intervalId;

  function setSrc(src) {
    const hero = document.getElementById('hero-img');
    if (hero) {
      hero.src = src;
      console.log('[heroRotator] Set hero image to', src);
    } else {
      console.warn('[heroRotator] #hero-img not found');
    }
  }

  function rotate() {
    setSrc(HERO_IMAGES[idx % HERO_IMAGES.length]);
    idx += 1;
  }

  function isSunsetMode() {
    return document.documentElement.classList.contains('sunset');
  }

  function handleMode() {
    clearInterval(intervalId);
    if (isSunsetMode()) {
      console.log('[heroRotator] Detected sunset mode');
      idx = 0;
      rotate();
      intervalId = setInterval(rotate, ROTATE_MS);
    } else {
      const hero = document.getElementById('hero-img');
      if (!hero) return;
      if (document.documentElement.classList.contains('dark')) {
        const dark = hero.getAttribute('data-dark-src');
        if (dark) hero.src = dark;
      } else {
        const light = hero.getAttribute('data-light-src');
        if (light) hero.src = light;
      }
      console.log('[heroRotator] Not in sunset mode, using static hero image');
    }
  }

  // Run immediately if DOM is already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', handleMode);
  } else {
    handleMode();
  }

  // Listen for theme changes if your theme toggle updates <html> class
  const observer = new MutationObserver(() => {
    handleMode();
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
})();

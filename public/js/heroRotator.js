// Rotate hero image every 20 s in SUNSET mode
(function () {
  const HERO_IMAGES = [
    "/images/Hero_image_sunset_mode_1.png",
    "/images/Hero_image_sunset_mode_2.png",
    "/images/Hero_image_sunset_mode_3.png",
  ];
  const ROTATE_MS = 20000;
  let idx = 0;
  let intervalId;

  function setSrc(src) {
    const hero = document.getElementById("hero-img");
    if (hero) hero.src = src;
    else console.warn("[heroRotator] #hero-img not found");
  }

  function rotate() {
    setSrc(HERO_IMAGES[idx % HERO_IMAGES.length]);
    idx += 1;
    console.log(`[heroRotator] Rotated to image: ${HERO_IMAGES[(idx-1)%HERO_IMAGES.length]}`);
  }

  function handleTheme(state) {
    clearInterval(intervalId);
    console.log(`[heroRotator] handleTheme called with state:`, state);
    if (state === window.THEMES?.SUNSET || state === "sunset") {
      rotate();
      intervalId = setInterval(rotate, ROTATE_MS);
    } else {
      const hero = document.getElementById("hero-img");
      if (!hero) return;
      if (state === window.THEMES?.DARK || state === "dark") {
        const dark = hero.getAttribute("data-dark-src");
        if (dark) hero.src = dark;
      } else {
        const light = hero.getAttribute("data-light-src");
        if (light) hero.src = light;
      }
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    console.log("[heroRotator] Script loaded, DOMContentLoaded");
    if (window.getThemeState) {
      handleTheme(window.getThemeState());
    }

    if (window.updateHeroImageForTheme) {
      const origUpdate = window.updateHeroImageForTheme;
      window.updateHeroImageForTheme = (state) => {
        origUpdate(state);
        handleTheme(state);
      };
    }
  });
})();

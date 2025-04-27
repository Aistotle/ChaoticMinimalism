(() => {
    "use strict";
    const LS_THEME_KEY = "theme";
    const THEMES = {
        LIGHT: "light",
        DARK: "dark",
        SUNSET: "sunset"
    };

    const body = document.body;
    const config = body.getAttribute("data-theme");

    const getThemeState = () => {
        const lsState = localStorage.getItem(LS_THEME_KEY);
        if (lsState && Object.values(THEMES).includes(lsState)) return lsState;
        let state;
        switch (config) {
            case THEMES.DARK:
                state = THEMES.DARK;
                break;
            case THEMES.LIGHT:
                state = THEMES.LIGHT;
                break;
            case THEMES.SUNSET:
                state = THEMES.SUNSET;
                break;
            default:
                state = THEMES.LIGHT;
                break;
        }
        return state;
    };

    const initTheme = (state) => {
        document.documentElement.classList.remove(THEMES.LIGHT, THEMES.DARK, THEMES.SUNSET);
        document.documentElement.classList.add(state);
    };

    function updateHeroImageForTheme(theme) {
        var heroImg = document.querySelector('.hero-image');
        if (!heroImg) return;
        var lightSrc = heroImg.getAttribute('data-light-src');
        var darkSrc = heroImg.getAttribute('data-dark-src');
        var sunsetSrc = heroImg.getAttribute('data-sunset-src');
        if (theme === THEMES.DARK) {
            if (darkSrc) heroImg.src = darkSrc;
        } else if (theme === THEMES.SUNSET) {
            if (sunsetSrc) heroImg.src = sunsetSrc;
            else if (lightSrc) heroImg.src = lightSrc;
        } else {
            if (lightSrc) heroImg.src = lightSrc;
        }
    }

    const origInitTheme = initTheme;
    const newInitTheme = (state) => {
        origInitTheme(state);
        updateHeroImageForTheme(state);
    };

    // init theme ASAP, then do the rest.
    newInitTheme(getThemeState());
    requestAnimationFrame(() => body.classList.remove("notransition"));

    const toggleTheme = () => {
        const state = getThemeState();
        let next;
        if (state === THEMES.LIGHT) next = THEMES.SUNSET;
        else if (state === THEMES.SUNSET) next = THEMES.DARK;
        else next = THEMES.LIGHT;
        localStorage.setItem(LS_THEME_KEY, next);
        newInitTheme(next);
        updateModeIcon(next);
    };

    function updateModeIcon(theme) {
        const iconSpan = document.getElementById("mode-fallback");
        if (!iconSpan) return;
        let icon = '';
        if (theme === THEMES.DARK) {
            // Moon icon
            icon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.79A9 9 0 0 1 12.79 3a7 7 0 1 0 8.21 9.79z" stroke="#bbb" stroke-width="2" fill="#222"/></svg>`;
        } else if (theme === THEMES.SUNSET) {
            // Sunset icon
            icon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="16" r="4" fill="#ff9800"/><rect x="4" y="18" width="16" height="2" fill="#ffcc80"/><path d="M2 22h20" stroke="#ffcc80" stroke-width="2"/></svg>`;
        } else {
            // Sun icon
            icon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5" fill="#fff8e1" stroke="#bbb" stroke-width="2"/><g stroke="#bbb" stroke-width="2"><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/><line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/></g></svg>`;
        }
        iconSpan.innerHTML = icon;
    }

    window.addEventListener("DOMContentLoaded", () => {
        // Theme switch
        const modeToggle = document.getElementById("mode-toggle");
        if (modeToggle) {
            modeToggle.addEventListener("click", (e) => {
                e.preventDefault();
                toggleTheme();
            });
        }
        updateModeIcon(getThemeState());

        // Blur the content when the menu is open
        const cbox = document.getElementById("menu-trigger");
        if (cbox) {
            cbox.addEventListener("change", function () {
                const area = document.querySelector(".wrapper");
                if (this.checked) return area.classList.add("blurry");
                area.classList.remove("blurry");
            });
        }
    });
})();

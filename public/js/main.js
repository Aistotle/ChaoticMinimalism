'use strict';

// This file is required for Hugo's asset pipeline. It can be empty if all JS is in other files.

;
window.addEventListener('load', () => {
    const gttButton = document.getElementById("totop");
    if (!gttButton) return;
    window.onscroll = () => {
        if (
            document.body.scrollTop > 300 ||
            document.documentElement.scrollTop > 300
        ) {
            gttButton.style.visibility = "visible";
            gttButton.style.opacity = "1";
        } else {
            gttButton.style.visibility = "hidden";
            gttButton.style.opacity = "0";
        }
    };
});

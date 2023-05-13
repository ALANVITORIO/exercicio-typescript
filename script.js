"use strict";
document.addEventListener('DOMContentLoaded', (event) => {
    const btnMobile = document.getElementById('btn-mobile');
    const nav = document.getElementById('nav');
    if (!btnMobile || !nav)
        return;
    btnMobile.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});

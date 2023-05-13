document.addEventListener('DOMContentLoaded', (event) => {
const btnMobile = document.getElementById('btn-mobile') as HTMLButtonElement;
const nav = document.getElementById('nav') as HTMLDivElement;

if (!btnMobile || !nav) return;

    btnMobile.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
  });


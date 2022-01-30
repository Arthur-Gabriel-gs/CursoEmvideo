const btn = document.getElementById('btn')

function toggleMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

btn.addEventListener('onclick', toggleMenu)
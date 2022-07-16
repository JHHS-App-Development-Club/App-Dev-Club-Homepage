window.onscroll = () => { scrollNavbar() }
let navbarOpen = false;

scrollNavbar = () => {
    const navbar = document.getElementById("navbar");
    if (document.documentElement.scrollTop > 0) {
        navbar.classList.add("scrolled");
    } else {
        if (!navbarOpen) {
            navbar.classList.remove("scrolled");
        }
    }
}

const navbarButton = document.getElementById("menu-btn")

navbarButton.onclick = () => {
    navbarOpen = !navbarOpen;
    if (document.documentElement.scrollTop <= 0) {
        navbar.classList.toggle("scrolled");
    }
}
window.onscroll = () => { scrollNavbar() }

scrollNavbar = () => {
    const navbar = document.getElementById("navbar");
    if (document.documentElement.scrollTop > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}
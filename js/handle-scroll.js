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

const reminderButton = document.getElementById("reminder-1")
const command1 = document.getElementById("command-1")

reminderButton.onclick = () => {
    reminderButton.style.display = "none";
    command1.style.display = "block";
}


const reminderButton2 = document.getElementById("reminder-2")
const command2 = document.getElementById("command-2")

reminderButton2.onclick = () => {
    reminderButton2.style.display = "none";
    command2.style.display = "block";
}
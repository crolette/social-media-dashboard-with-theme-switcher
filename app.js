const theme = document.querySelector("[data-theme]");
const themeSelect = document.querySelector("#theme")

window.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM fully loaded and parsed');
    const themeUser = localStorage.getItem("theme")
    console.log(themeUser)
    if(themeUser === null) {
        localStorage.setItem("theme", "light")
    } else if (themeUser === "dark") {
        theme.dataset.theme = "dark"
        themeSelect.checked = true
    }
});



themeSelect.addEventListener("click", (e) => {
    console.log(e.target)
    if(theme.dataset.theme === "light") {
        theme.dataset.theme = "dark"
        localStorage.setItem("theme", "dark")
    } else {
        theme.dataset.theme = "light"
        localStorage.setItem("theme", "light")
    }
})


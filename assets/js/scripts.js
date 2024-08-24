const toggleTheme = document.getElementById('toggleTheme');
const rootHtml = document.documentElement

function changeTheme(){
    const currenTheme = rootHtml.getAttribute("data-theme");

    if (currenTheme === "dark") rootHtml.setAttribute("data-theme", "light")
        else rootHtml.setAttribute("data-theme", "dark")

    toggleTheme.classList.toggle("bi-sun")
    toggleTheme.classList.toggle("bi-moon-stars")
}

toggleTheme.addEventListener("click", changeTheme);


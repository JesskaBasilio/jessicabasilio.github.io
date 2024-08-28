const toggleTheme = document.getElementById('toggleTheme');
const rootHtml = document.documentElement
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");


function changeTheme(){
    const currenTheme = rootHtml.getAttribute("data-theme");

    if (currenTheme === "dark") rootHtml.setAttribute("data-theme", "light")
        else rootHtml.setAttribute("data-theme", "dark")

    toggleTheme.classList.toggle("bi-sun")
    toggleTheme.classList.toggle("bi-moon-stars")
}

toggleTheme.addEventListener("click", changeTheme);

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      const accordionActive = accordionItem.classList.contains("active");
  
      accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
    })
  })
  
  menuLinks.forEach(item => {
    item.addEventListener("click", () => {
      menuLinks.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    })
  })

// Função para adicionar redirecionamento a botões
function addRedirectEvent(buttonClass) {
  const buttons = document.querySelectorAll(buttonClass);
  
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          const url = button.getAttribute('data-url');
          window.location.href = url;
      });
  });
}

// Adiciona evento para os botões de Prévia
addRedirectEvent('.redirect-btn');

// Adiciona evento para os botões de Repositório
addRedirectEvent('.repo-btn');



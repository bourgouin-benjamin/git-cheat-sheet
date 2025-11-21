const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const links = document.querySelectorAll("#menu a");

burger.addEventListener('click', () => {
    burger.classList.toggle("open");
    menu.classList.toggle("hidden");
});

links.forEach(a => {
    a.addEventListener('click', () => {
        burger.classList.remove("open");
        menu.classList.add("hidden")
    })
})
const darkButton = document.querySelector("#dark");
const body = document.querySelector("body");
const icon = document.querySelector("#icon");
let state = "light";
function toggleMode() {
    if (state == "dark") {
        body.className = "light";
        state = "light";
        icon.classList.remove("fa-moon-o")
        icon.classList.add("fa-sun-o")
    } else {
        body.className = "dark";
        state = "dark";
        icon.classList.remove("fa-sun-o")
        icon.classList.add("fa-moon-o")
    }
};
darkButton.addEventListener("click", toggleMode)
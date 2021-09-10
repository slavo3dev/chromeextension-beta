window.onload = () => {
    const button = document.createElement('button');
    button.id = "darkMode";
    button.textContent = "Dark Mode"
    document.getElementById("end").prepend(button)

    button.addEventListener("click", () => enableDarkMode())
}


function enableDarkMode() {
    document.getElementsByTagName("ytd-app")[0].style.background = "#000"
}
function exibeMenu() {
    menu.style.display = "block"
    iconHam.style.display = "none"
    iconClose.style.display = "block"

}

function fechaMenu() {
    menu.style.display = "none"
    iconClose.style.display = "none"
    iconHam.style.display = "block"
}

function verificaTela() {
    if (window.innerWidth < 1024) {
        iconHamb.style.display = "block"
        iconClose.style.display = "none"
        menu.style.display = "none"

    } else {
        iconHam.style.display = "none"
        iconClose.style.display = "none"
        menu.style.display = "block"
    }
}
window.addEventListener("resize", verificaTela)
function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")
    if(html.classList.contains('light')) {
 img.setAttribute('src', './assets/fotoluz.png')
    } else {
        img.setAttribute("src", "./assets/419051642_694914926090289_5500336131213445145_n.jpg")

    }


}


